export default function KPISection() {

  const health = [
    { title: 'Revenue Growth', value: '+12% MoM', change: '+12%', positive: true },
    { title: 'Profitability', value: '18% Net Margin', change: '+12%', positive: false },
    { title: 'Cash Runway', value: '9 months', change: '+18%', positive: true },
    { title: 'Health', value: '97/100', change: '+3pts', positive: true }
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10 px-4 pt-10 sm:px-6 lg:px-8">
      {health.map((metric, i) => (
        <div
          key={i}
          className=" rounded-xl p-6 border border-gray-300 shadow hover:shadow-md transition hover:scale-110 duration-75 cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">{metric.title}</span>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                metric.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              {metric.change}
            </span>
          </div>
          <div className="text-2xl font-bold group-hover:text-green-600 transition-colors">
            {metric.value}
          </div>
        </div>
      ))}
    </section>
  );
}
