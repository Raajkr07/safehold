export default function StrategicSection() {
  return (
    <div className="border-t border-gray-300 pt-6 mt-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Strategic & Risk Indicators</h2>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-1">Debt-to-Equity Ratio</h3>
          <p>
            Measures the company's financial leverage by comparing total debt to shareholders' equity.
            Helps assess risk and financial stability.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Break-even Point</h3>
          <p>
            Calculate the sales needed to cover all expenses.
            Useful for planning, pricing, and understanding profitability thresholds.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Market Share</h3>
          <p>
            Indicates your position relative to competitors in the market.
            Higher market share often reflects strong competitiveness and growth potential.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Business Diversification</h3>
          <p>
            Evaluate dependency on a single customer or revenue stream.
            Diversification reduces risk and increases resilience.
          </p>
        </div>
      </div>
    </div>
  );
}
