import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CloudUpload, X, ImageIcon } from 'lucide-react';
import { createWorker } from 'tesseract.js';
import parseReceipt from '../../../../libs/ImageParse';

export default function DropSlipUploader({ onAdd }) {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [ocrText, setOcrText] = useState('');
  const [parsing, setParsing] = useState(false);
  const [ocrLoading, setOcrLoading] = useState(false);
  const [parsed, setParsed] = useState({});
  const [form, setForm] = useState({
    description: '',
    amount: '',
    date: '',
    category: '',
    type: 'expense',
  });

  const inputRef = useRef();

  // Clean up object URL
  useEffect(() => {
    return () => {
      if (preview && preview.startsWith('blob:')) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  // Drag handlers
  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true);
    if (e.type === 'dragleave') setDragActive(false);
  }, []);

  const handleDrop = useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const dt = e.dataTransfer;
    if (!dt) return;
    const fileItem = dt.files && dt.files[0];
    if (fileItem) await loadFile(fileItem);
  }, []);

  async function loadFile(fileObj) {
    if (!fileObj) return;
    if (!fileObj.type.startsWith('image/')) {
      alert('Please upload an image file (jpg, png, webp, HEIC not guaranteed).');
      return;
    }
    setFile(fileObj);
    const url = URL.createObjectURL(fileObj);
    setPreview(url);

    // Clear previous OCR/parsed
    setOcrText('');
    setParsed({});
    setForm({ description: '', amount: '', date: '', category: '', type: 'expense' });
  }

  const onFileInput = async (e) => {
    const f = e.target.files && e.target.files[0];
    if (f) await loadFile(f);
  };

  async function runOCR() {
    if (!file) return;
    setOcrLoading(true);
    setOcrText('');
    try {
      const worker = await createWorker('eng', 1, {
        logger: (m) => console.log(m),
      });

      const {
        data: { text },
      } = await worker.recognize(file);

      await worker.terminate();

      setOcrText(text);
      heuristicallyParse(text);
    } catch (err) {
      console.error('OCR failed', err);
      alert('OCR failed. Make sure tesseract.js is installed and try a smaller/clearer image.');
    } finally {
      setOcrLoading(false);
    }
  }

  // Run parse on raw text (OCR or user-provided)
  function heuristicallyParse(text) {
    if (!text) return;
    setParsing(true);
    try {
      const result = parseReceipt(text);
      setParsed(result);

      // Prefill form with parsed values when available
      setForm({
        description: result.vendor || result.merchant || result.description || '',
        amount: result.amount ? result.amount.toString() : '',
        date: result.date || '',
        category: result.category || '',
        type: result.amount && result.amount > 0 ? 'expense' : 'expense',
      });
    } finally {
      setParsing(false);
    }
  }

  function removeFile() {
    if (preview && preview.startsWith('blob:')) URL.revokeObjectURL(preview);
    setFile(null);
    setPreview(null);
    setOcrText('');
    setParsed({});
    setForm({ description: '', amount: '', date: '', category: '', type: 'expense' });
    if (inputRef.current) inputRef.current.value = null;
  }

  // Final create entry and call onAdd
  function handleSubmit(e) {
    e.preventDefault();
    // basic validation
    const amount = parseFloat(form.amount);
    if (!form.description || isNaN(amount) || !form.date) {
      alert('Please provide at least description, amount and date.');
      return;
    }

    const entry = {
      id: (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : String(Date.now()),
      description: form.description,
      amount: amount,
      date: form.date,
      category: form.category || 'Uncategorized',
      type: form.type || (amount >= 0 ? 'income' : 'expense'),
      imageUrl: preview,
      rawOcrText: ocrText || '',
      parsedFields: parsed || {},
    };

    // send to parent ledger
    if (typeof onAdd === 'function') onAdd(entry);

    // reset
    removeFile();
  }

  return (
    <div className="w-full">
      <div
        className={`w-full border-2 rounded-2xl p-5 flex flex-col md:flex-row items-center gap-6
          ${dragActive ? 'border-primary/80 bg-primary/5' : 'border-dashed border-muted bg-transparent'}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex-1 min-h-[160px] w-full">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold font-mono text-primary">Upload slip</h3>
            <div className="text-sm text-secondary">Drag & drop or click to upload</div>
          </div>

          <label
            htmlFor="slip-file"
            className="relative flex items-center justify-center h-40 w-full rounded-lg border bg-card cursor-pointer overflow-hidden"
            onClick={(e) => {
            }}
          >
            {preview ? (
              <img src={preview} alt="preview" className="object-contain w-full h-full" />
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 text-secondary">
                <CloudUpload size={40} />
                <div className="text-sm">Drop image here or click to browse</div>
              </div>
            )}

            <input
              id="slip-file"
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onFileInput}
            />
          </label>

          <div className="mt-3 flex flex-wrap md:flex-nowrap items-start md:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-secondary w-full md:w-auto">
              <span className="truncate">{file ? file.name : 'No file selected'}</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap md:flex-nowrap items-center gap-2 w-full md:w-auto">
              <button
                type="button"
                onClick={() => {
                  if (inputRef.current) inputRef.current.click();
                }}
                className="px-3 py-1 rounded-md border text-sm"
              >
                Browse
              </button>

              <button
                type="button"
                onClick={runOCR}
                className="px-3 py-1 rounded-md border text-sm"
                disabled={!file || ocrLoading}
                title={!file ? 'Select an image first' : 'Run OCR (requires tesseract.js)'}
              >
                {ocrLoading ? 'Running OCR...' : 'Auto-extract'}
              </button>

              <button
                type="button"
                onClick={() => heuristicallyParse(ocrText || '')}
                className="px-3 py-1 rounded-md border text-sm"
                disabled={!ocrText}
                title="Parse extracted text for amount/date/vendor"
              >
                Parse text
              </button>

              <button
                type="button"
                onClick={removeFile}
                className="px-3 py-1 rounded-md border text-sm text-danger"
                disabled={!file}
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Right column: preview + form */}
        <div className="w-full md:w-96">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="text-xs text-secondary block mb-1">Description</label>
              <input
                value={form.description}
                onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                placeholder="e.g., Client invoice, Software subscription"
                className="w-full px-3 py-2 rounded border h-11 bg-primary/20"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs text-secondary block mb-1">Amount (INR)</label>
                <input
                  value={form.amount}
                  onChange={(e) => setForm((p) => ({ ...p, amount: e.target.value }))}
                  placeholder="0.00"
                  className="w-full px-3 py-2 rounded border h-11 bg-primary/20 text-right"
                />
              </div>

              <div>
                <label className="text-xs text-secondary block mb-1">Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
                  className="w-full px-3 py-2 rounded border h-11 bg-primary/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs text-secondary block mb-1">Category</label>
                <input
                  value={form.category}
                  onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
                  placeholder="e.g., Revenue, Hosting"
                  className="w-full px-3 py-2 rounded border h-11 bg-primary/20"
                />
              </div>

              <div>
                <label className="text-xs text-secondary block mb-1">Type</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm((p) => ({ ...p, type: e.target.value }))}
                  className="w-full px-3 py-2 rounded border h-11 bg-primary/20"
                >
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
              </div>
            </div>

            {/* parsed hints */}
            {ocrText && (
              <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
                <div className="font-medium mb-1">Extracted text (preview)</div>
                <div className="max-h-24 overflow-auto text-[12px] whitespace-pre-wrap">{ocrText}</div>
              </div>
            )}

            <div className="flex justify-between items-center gap-3">
              <div className="text-xs text-secondary">
                {parsed.vendor && <div>Vendor guess: <strong>{parsed.vendor}</strong></div>}
                {parsed.amount && <div>Amount guess: <strong>{parsed.amount}</strong></div>}
                {parsed.date && <div>Date guess: <strong>{parsed.date}</strong></div>}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="px-3 py-1 rounded-md border text-sm"
                  onClick={() => {
                    // Copy parsed values into form if present
                    setForm((p) => ({
                      ...p,
                      description: p.description || parsed.vendor || parsed.description || '',
                      amount: p.amount || (parsed.amount ? String(parsed.amount) : ''),
                      date: p.date || parsed.date || '',
                      category: p.category || parsed.category || '',
                    }));
                  }}
                >
                  Use parsed values
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-primary text-white text-sm"
                >
                  Add to ledger
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
