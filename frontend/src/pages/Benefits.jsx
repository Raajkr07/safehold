import Header from '../components/header/Header';
import Footer from '../components/footer/AppFooter';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  TrendingUp,
  DollarSign,
  PieChart,
  BarChart3,
  Shield,
  FileText,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  Star,
} from 'lucide-react';

const benefits = [
  "Save 15+ hours per month on financial admin",
  "Reduce business expenses by up to 23%",
  "Improve cash flow predictability by 40%",
  "Streamline tax preparation and compliance",
  "Make data-driven business decisions",
  "Identify growth opportunities faster"
];

const mainBenefits = [
  {
    icon: TrendingUp,
    title: "Real-Time Cash Flow Tracking",
    description: "Monitor your money movement instantly with live updates and predictive forecasting",
    color: "from-[#53D347] to-[#45B83A]",
    stats: "98% accuracy"
  },
  {
    icon: PieChart,
    title: "Complete Business Health Dashboard",
    description: "Get a 360° view of your business performance with comprehensive health metrics",
    color: "from-blue-500 to-blue-600",
    stats: "50+ key metrics"
  },
  {
    icon: DollarSign,
    title: "Smart Expense Management",
    description: "Automatically categorize, track, and optimize every business expense",
    color: "from-purple-500 to-purple-600",
    stats: "Save 10+ hours/week"
  }
];

const features = [
  {
    category: "Cash Flow Management",
    icon: TrendingUp,
    items: [
      { name: "Live Cash Flow Monitoring", desc: "Real-time tracking of money in and out" },
      { name: "Predictive Analytics", desc: "Forecast future cash positions" },
      { name: "Automated Reconciliation", desc: "Bank account sync and matching" },
      { name: "Cash Flow Statements", desc: "Professional financial reporting" }
    ]
  },
  {
    category: "Business Intelligence",
    icon: BarChart3,
    items: [
      { name: "Performance Dashboards", desc: "Visual business health indicators" },
      { name: "Profitability Analysis", desc: "Track margins and profit centers" },
      { name: "Trend Analysis", desc: "Identify patterns and opportunities" },
      { name: "Benchmark Comparisons", desc: "Compare against industry standards" }
    ]
  },
  {
    category: "Expense Tracking",
    icon: FileText,
    items: [
      { name: "Receipt Scanning", desc: "Mobile photo capture and processing" },
      { name: "Auto-Categorization", desc: "AI-powered expense classification" },
      { name: "Vendor Management", desc: "Track all supplier relationships" },
      { name: "Budget Controls", desc: "Set limits and get alerts" }
    ]
  },
  {
    category: "Financial Control",
    icon: Shield,
    items: [
      { name: "Multi-User Access", desc: "Team permissions and roles" },
      { name: "Audit Trails", desc: "Complete transaction history" },
      { name: "Tax Preparation", desc: "Organized records for filing" },
      { name: "Compliance Reporting", desc: "Stay regulation-ready" }
    ]
  }
];

const testimonials = [
  {
    name: "Tony yadav",
    role: "Head",
    company: "Stark Hedge Fund",
    quote: "This software transformed how I understand my business. I can see exactly where my money goes and make informed decisions daily.",
    rating: 5,
    savings: "₹2,50,000 saved in first year"
  },
  {
    name: "Manohar Dhakar",
    role: "Construction Contractor",
    company: "Dhakar Builders",
    quote: "The cash flow forecasting helped me avoid a major cash crunch. I can't imagine running my business without these insights.",
    rating: 5,
    savings: "40% better cash flow"
  }
];

const Benefits = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="overflow-hidden py-6 sm:py-12 lg:py-16">
      <Header />
        <section className="relative overflow-hidden py-6 px-4">
          <div className="absolute inset-0 "></div>

          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-16">

              <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                Master Your Business Finances
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Comprehensive financial management software designed specifically for business owners who want complete control over their cash flow, expenses, and business health.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                type="button"
                to={'/login'}
                className="bg-gradient-to-r from-primary to-[#45B83A] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </Link>

                <Link 
                type="button"
                to={'/tutorials'}
                className="flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-red-500 hover:text-red-600 transition-all duration-300">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Benefits Grid section*/}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {mainBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    data-animate
                    id={`benefit-${index}`}
                    className={`relative p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible[`benefit-${index}`] ? 'animate-fade-in-up' : 'opacity-0'
                      }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>

                    <div className="flex items-center text-[#53D347] font-semibold">
                      <Star className="w-4 h-4 mr-2" />
                      {benefit.stats}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text mb-6">
                Everything You Need to Run Your Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From cash flow forecasting to expense optimization, our comprehensive platform gives you complete financial visibility and control.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {features.map((feature, categoryIndex) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.category}
                    data-animate
                    id={`feature-${categoryIndex}`}
                    className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${isVisible[`feature-${categoryIndex}`] ? 'animate-slide-in' : 'opacity-0'
                      }`}
                    style={{ animationDelay: `${categoryIndex * 0.3}s` }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#53D347] to-[#45B83A] rounded-xl flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{feature.category}</h3>
                    </div>

                    <div className="space-y-4">
                      {feature.items.map((item, itemIndex) => (
                        <div key={item.name} className="flex items-start p-4 rounded-xl hover:bg-[#53D347]/5 transition-colors duration-300">
                          <CheckCircle className="w-5 h-5 text-[#53D347] mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-[#53D347] to-[#45B83A] rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">See Real Results</h2>
              <p className="text-xl mb-12 opacity-90">
                Our customers typically see significant improvements in their financial management within the first month
              </p>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { stat: "90%", label: "Reduction in financial errors" },
                  { stat: "10hrs", label: "Time saved per week" },
                  { stat: "25%", label: "Improvement in cash flow" },
                  { stat: "98%", label: "Customer satisfaction rate" }
                ].map((item, index) => (
                  <div key={item.label} className="text-center">
                    <div className="text-4xl font-bold mb-2">{item.stat}</div>
                    <div className="opacity-90">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text mb-6">
                Trusted by Business Owners
              </h2>
              <p className="text-xl text-gray-600">
                See how our platform has transformed businesses across industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-lg text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                      <div className="text-gray-500 text-sm">{testimonial.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#53D347] font-bold text-lg">{testimonial.savings}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text mb-6">
              Ready to Take Control?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join hundreds of business owners who have transformed their financial management with our platform
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
              to={'/login'}
              className="bg-gradient-to-r from-[#53D347] to-[#45B83A] text-white px-10 py-5 rounded-2xl font-semibold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Your Free Trial Today
              </Link>

              <Link 
              to={'https://cal.com/raajkumar'}
              className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-semibold text-xl hover:border-[#53D347] hover:text-[#53D347] transition-all duration-300 flex items-center justify-center">
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>

        <style>{`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slide-in {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          
          .animate-slide-in {
            animation: slide-in 0.8s ease-out forwards;
          }
      `}</style>
      <Footer />
    </section>
  );
}

export default Benefits;