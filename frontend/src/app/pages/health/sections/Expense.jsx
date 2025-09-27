export default function ExpenseSection() {
  return (
    <div className="border-t border-gray-300 pt-6 mt-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Expense Management</h2>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-1">Fixed vs Variable Expenses</h3>
          <p>
            Understand which costs remain constant and which vary with business activity.
            This helps in planning and scalability analysis.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Category Spending Trends</h3>
          <p>
            Track expenses across categories like salaries, marketing, and rent 
            to identify where money is going and detect unusual patterns.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Cost per Acquisition (CPA)</h3>
          <p>
            Measure how much is spent on marketing or advertising to acquire a new customer.
            This helps evaluate marketing efficiency.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Return on Investment (ROI)</h3>
          <p>
            Assess the revenue generated per expense type (e.g., ads, R&D) to see
            whether spending is effective and profitable.
          </p>
        </div>
      </div>
    </div>
  );
}
