import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';

const features = [
  "14-day free trial",
  "No credit card required",
  "Cancel anytime",
  "24/7 customer support"
];

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className=" py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl tracking-tight  sm:text-4xl">
            Ready to take control of your business finances?
          </h2>
          <p className="mt-6 text-lg leading-8 ">
            Join thousands of successful small business owners who trust our platform to manage their finances and drive growth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-sm ">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-0 gap-y-4 sm:gap-x-6 sm:gap-y-0">
            <Link
            to={'/login'}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
            to={'https://cal.com/raajkumar'}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              Schedule Demo
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Trusted by 500+ businesses. Start grow your Business today.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTASection;