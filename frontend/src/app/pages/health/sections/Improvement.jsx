export default function Improvements({ category }) {
  const improvementsData = {
    financial: [
      "Review and reduce unnecessary expenses.",
      "Increase revenue streams through new products or services.",
      "Monitor cash flow weekly.",
      "Optimize pricing strategy for better margins."
    ],
    expense: [
      "Track and categorize all expenses.",
      "Negotiate with vendors for better rates.",
      "Reduce fixed costs by optimizing office or subscription plans.",
      "Measure ROI of marketing campaigns."
    ],
    customer: [
      "Implement loyalty programs to retain customers.",
      "Regularly collect feedback and NPS scores.",
      "Analyze churn reasons and improve service.",
      "Increase acquisition through referral programs."
    ],
    operational: [
      "Optimize employee utilization and productivity.",
      "Reduce inventory waste and turnover time.",
      "Implement automated workflows where possible.",
      "Track DSO and improve collections process."
    ],
    strategic: [
      "Diversify revenue streams to reduce dependency.",
      "Monitor market share regularly.",
      "Maintain a healthy debt-to-equity ratio.",
      "Identify and prepare for potential business risks."
    ],
  };

  return (
    <div className="border-t border-gray-300 pt-6 my-6 max-w-4xl mx-auto">
      <h3 className="text-xl font-bold mb-3">Improvements & Recommendations</h3>
      <ul className="list-disc pl-6 space-y-2">
        {improvementsData[category].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
