import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Check, Star, Zap, Crown, Sparkles, ArrowRight } from 'lucide-react';
import Header from '../components/header/Header';
import Footer from '../components/footer/AppFooter';

const features = [
  "14-day free trial",
  "No credit card required",
  "Cancel anytime",
  "24/7 customer support"
];

const plans = [
  {
    name: 'Starter',
    icon: Sparkles,
    description: 'Perfect for individuals getting started',
    monthlyPrice: 900,
    annualPrice: 700,
    features: [
      '25 Reports Monthly',
      '10GB cloud Storage',
      'Email Support',
      'Basic Analytics',
      'Mobile App Access'
    ],
    color: 'from-gray-100 to-gray-200',
    textColor: 'text-gray-800',
    buttonColor: 'bg-gray-800 hover:bg-gray-900',
    popular: false
  },
  {
    name: 'Professional',
    icon: Zap,
    description: 'Ideal for growing businesses and teams',
    monthlyPrice: 2900,
    annualPrice: 2400,
    features: [
      '100 Reports Monthly',
      '100GB cloud Storage',
      'Priority Support',
      'Advanced Analytics',
      'Custom Integrations',
      'Personal team'
    ],
    color: 'from-[#53D347] to-[#45B83A]',
    buttonColor: 'bg-white text-[#53D347] hover:bg-gray-100',
    popular: true
  },
  {
    name: 'Enterprise',
    icon: Crown,
    description: 'For large organizations with advanced needs',
    monthlyPrice: "Call Us",
    annualPrice: "Call Us",
    features: [
      'Unlimited Reports',
      '1TB cloud Storage',
      'Dedicated Support',
      'Custom Analytics',
      'Advanced Security',
      'Custom Development',
      'SLA Guarantee'
    ],
    color: 'from-purple-500 to-purple-700',
    buttonColor: 'bg-white text-purple-600 hover:bg-gray-100',
    popular: false
  }
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  return (
    <section className="py-6 sm:py-12 lg:py-16">
      <Header />
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-clip-text text-transparent mb-4 animate-fade-in">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in-delay">
            Unlock the full potential of your Business with our flexible pricing options designed to grow with your needs
          </p>

          {/* Toggle Button for selecting monthly or yearly*/}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 animate-slide-up">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!isAnnual
                  ? 'bg-primary text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${isAnnual
                  ? 'bg-primary text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Annual
              <span className="absolute -top-4 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`relative rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 flex flex-col justify-between h-full ${plan.popular ? 'ring-4 ring-primary ring-opacity-50' : ''
                  } ${hoveredPlan === index ? 'shadow-2xl -translate-y-2' : 'shadow-lg'
                  }`}
                style={{
                  background: `linear-gradient(135deg, ${plan.color.split(' ')[1]}, ${plan.color.split(' ')[3]})`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-[#45B83A] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${plan.popular ? 'bg-white bg-opacity-20' : 'bg-black bg-opacity-10'
                    } transition-transform duration-300 ${hoveredPlan === index ? 'scale-110 rotate-6' : ''}`}>
                    <Icon className={`w-8 h-8 ${plan.textColor}`} />
                  </div>

                  <h3 className={`text-2xl font-bold ${plan.textColor} mb-2`}>
                    {plan.name}
                  </h3>

                  <p className={`${plan.textColor} opacity-80 mb-6`}>
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    {plan.monthlyPrice === "Call Us" ? (
                      <div className="flex flex-col items-center">
                        <Link 
                        to={'/contact'}
                        type="button"
                        className={`text-3xl font-semibold underline ${plan.textColor}`}>
                          Contact Us
                        </Link>
                        <span className={`${plan.textColor} opacity-80 text-sm mt-1`}>
                          For tailored enterprise solutions
                        </span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-baseline justify-center">
                          <span className={`text-5xl font-bold ${plan.textColor}`}>
                            ₹{currentPrice}
                          </span>
                          <span className={`${plan.textColor} opacity-80 ml-2`}>
                            /month
                          </span>
                        </div>
                        {isAnnual && (
                          <div className={`${plan.textColor} opacity-80 text-sm mt-1`}>
                            Billed annually (₹{currentPrice * 12}/year)
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={feature}
                      className={`flex items-center ${plan.textColor} transition-all duration-300`}
                      style={{ animationDelay: `${(index * 0.2) + (featureIndex * 0.1)}s` }}
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 ${plan.popular ? 'bg-white bg-opacity-20' : 'bg-black bg-opacity-10'
                        } transition-transform duration-300 ${hoveredPlan === index ? 'scale-110' : ''}`}>
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-sm opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform ${plan.buttonColor} ${hoveredPlan === index ? 'scale-105 shadow-lg' : ''
                  }`}>
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center mt-16 p-8 bg-gradient-to-r from-primary to-[#45B83A] rounded-3xl shadow-2xl animate-fade-in-up">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-white opacity-90 mb-6 text-lg">
            Our team is here to help you find the perfect plan for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
              View FAQ
            </button>
          </div>
        </div>

        <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up {
          animation: fade-in 1s ease-out 0.9s forwards;
          opacity: 0;
        }
      `}</style>
      </div>
      <Footer />
    </section>
  );
}

export default Pricing;