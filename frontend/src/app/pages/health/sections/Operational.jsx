export default function OperationalSection() {
  return (
    <div className="border-t border-gray-300 pt-6 mt-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Operational Efficiency</h2>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-1">Revenue per Employee</h3>
          <p>
            Measures the productivity of your workforce by calculating the revenue generated per employee.
            Helps identify efficiency and staffing needs.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Utilization Rate</h3>
          <p>
            For service businesses, track the ratio of billable hours versus non-billable hours.
            This helps optimize employee productivity.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Inventory Turnover</h3>
          <p>
            For product-based businesses, measure how quickly inventory is sold and replaced.
            Higher turnover indicates efficient inventory management.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Average Payment Collection Time (DSO)</h3>
          <p>
            Track how quickly invoices are paid by customers.
            Reducing DSO improves cash flow and operational stability.
          </p>
        </div>
      </div>
    </div>
  );
}
