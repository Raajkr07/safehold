export default function FinancialSection() {
  return (
    <div className="border-t border-gray-300 pt-6 mt-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Financial Health</h2>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-1">Revenue Growth</h3>
          <p>
            Track the month-over-month or year-over-year increase in revenue.
            This helps understand the company's growth trend over time.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Profitability</h3>
          <p>
            Measure net profit margin (profit ÷ revenue) to know how much
            money is actually kept after all expenses.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Cash Flow</h3>
          <p>
            Analyze inflows and outflows of cash to ensure the company has
            enough liquidity to operate.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Burn Rate</h3>
          <p>
            Understand how fast the company is spending cash, especially
            critical for startups or cash-intensive businesses.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Runway</h3>
          <p>
            Calculate how many months the business can survive with current
            cash reserves.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Expense Ratio</h3>
          <p>
            Measure expenses as a percentage of revenue to track operating
            efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}
