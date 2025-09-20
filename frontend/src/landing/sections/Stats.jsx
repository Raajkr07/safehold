import React from "react";
import Bitcoin from '../images/bitcoin.jpeg'

const stats = [
  { label: "Businesses Served", value: "500+" },
  { label: "Average Cost Savings", value: "23%" },
  { label: "Hours Saved Monthly", value: "15+" },
  { label: "Customer Satisfaction", value: "98%" }
];

const StatsSection = () => {
  return (
    <section className="relative overflow-auto w-full bg-primary py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-green-600"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-white/5 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl tracking-tight sm:text-4xl text-white">
              Proven results for businesses
            </h2>
            <p className="mt-6 text-lg leading-8 text-green-100">
              Join thousands of business owners who have transformed their financial management and achieved sustainable growth with our platform.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <dt className="text-base leading-7 text-green-100">{stat.label}</dt>
                  <dd className="text-3xl tracking-tight sm:text-4xl text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative lg:ml-10">
            <img
              src={Bitcoin}
              alt="Bitcoin Image"
              draggable="false"
              className="aspect-[4/3] w-full rounded-2xl bg-gray-50 object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;