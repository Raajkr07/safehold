const amountRegex = /(?:USD|US\$|\$|₹|INR|Rs\.?)?\s*([0-9]{1,3}(?:,[0-9]{3})*(?:[.,][0-9]{1,2})?|\d+(?:[.,]\d{1,2})?)/g;
const dateRegex1 = /\b(\d{4}[-/]\d{1,2}[-/]\d{1,2})\b/;
const dateRegex2 = /\b(\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4})\b/;

function normalizeDate(raw) {
  if (!raw) return null;
  // Already ISO
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;

  // Handle dd/mm/yyyy → yyyy-mm-dd
  const parts = raw.split(/[\/.-]/);
  if (parts.length === 3) {
    let [p1, p2, p3] = parts;
    if (p1.length === 4) {
      // yyyy-mm-dd
      return `${p1.padStart(4, '0')}-${p2.padStart(2, '0')}-${p3.padStart(2, '0')}`;
    } else {
      // dd/mm/yyyy
      if (p3.length === 2) p3 = `20${p3}`; // expand yy → yyyy
      return `${p3.padStart(4, '0')}-${p2.padStart(2, '0')}-${p1.padStart(2, '0')}`;
    }
  }
  return raw;
}

function findDate(text) {
  let m = text.match(dateRegex1);
  if (m) return normalizeDate(m[1]);
  m = text.match(dateRegex2);
  if (m) return normalizeDate(m[1]);
  return null;
}

function findAmounts(text) {
  const matches = [];
  let m;
  while ((m = amountRegex.exec(text)) !== null) {
    const raw = m[1];
    const norm = raw.replace(/,/g, '');
    const num = parseFloat(norm);
    if (!isNaN(num)) {
      matches.push({ value: num, index: m.index });
    }
  }

  if (!matches.length) return [];

  const lower = text.toLowerCase();
  const totalIndex = lower.lastIndexOf('total');
  if (totalIndex !== -1) {
    let closest = matches[0];
    let minDist = Math.abs(closest.index - totalIndex);
    for (const match of matches) {
      const dist = Math.abs(match.index - totalIndex);
      if (dist < minDist) {
        closest = match;
        minDist = dist;
      }
    }
    return [closest.value];
  }

  return matches.map(m => m.value);
}


function findVendor(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  if (!lines.length) return null;

  const first = lines[0];
  if (first.length > 2 && first.length < 60 && !/receipt|invoice|total|tax|amount/i.test(first)) {
    return first;
  }
  for (let i = 0; i < lines.length; i++) {
    if (/total|amount/i.test(lines[i]) && i > 0) {
      return lines[i - 1];
    }
  }
  return first;
}

export default function ImageParse(rawText = '') {
  const text = String(rawText || '').replace(/\r/g, '\n');
  const amounts = findAmounts(text);
  const amount = amounts.length ? amounts[0] : null;
  const date = findDate(text);
  const vendor = findVendor(text);

  let category = '';
  if (/uber|ola|grab|taxi/i.test(text)) category = 'Transport';
  else if (/restaurant|cafe|coffee|bar/i.test(text)) category = 'Food';
  else if (/hotel|inn|motel/i.test(text)) category = 'Lodging';
  else if (/amazon|flipkart|ebay|shop/i.test(text)) category = 'Shopping';

  return {
    amount,
    date,
    vendor,
    merchant: vendor,
    description: '',
    category,
  };
}
