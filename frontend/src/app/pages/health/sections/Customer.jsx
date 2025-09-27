export default function CustomerSection() {
  return (
    <div className="border-t border-gray-300 pt-6 mt-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Customer Health</h2>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-1">Customer Acquisition Rate</h3>
          <p>
            Track the number of new customers gained over a specific period.
            Helps evaluate the effectiveness of marketing and sales efforts.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Customer Retention / Churn Rate</h3>
          <p>
            Measure how many customers you retain versus how many are lost.
            High retention indicates loyalty and satisfaction.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Customer Lifetime Value (CLV)</h3>
          <p>
            Estimate the total revenue a customer generates during their lifecycle.
            Helps make informed decisions on marketing spend and customer support.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Net Promoter Score (NPS)</h3>
          <p>
            Assess customer satisfaction and loyalty by asking how likely customers
            are to recommend your business to others.
          </p>
        </div>
      </div>
    </div>
  );
}
