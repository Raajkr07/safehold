import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Check } from "lucide-react";
import Header from '../components/header/Header';
import Footer from '../components/footer/AuthFooter';

const features = [
  "14-day free trial",
  "No credit card required",
  "Cancel anytime",
  "24/7 customer support"
];

const Pricing = () => {
  return (
    <section className="py-16 sm:py-16 lg:py-16">
        <Header/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
            Ready to take control of your business finances?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join thousands of successful small business owners who trust our platform to manage their finances and drive growth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-x-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button size="lg" className="px-8 py-4">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button variant="outline" size="lg" className="px-8 py-4">
              Schedule Demo
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Trusted by 12,500+ businesses worldwide. Start saving money today.
          </p>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Pricing;