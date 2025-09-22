import React from "react";
import { useState, useEffect } from 'react';
import {
  UserPlus,
  CreditCard,
  Smartphone,
  BarChart3,
  Bell,
  Settings,
  TrendingUp,
  FileText,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Zap,
  Eye,
  Target,
  Clock,
  Download,
  Camera,
  Scan,
  PieChart,
  DollarSign,
  AlertTriangle,
  Layers,
  GitBranch,
  Database
} from 'lucide-react';
import Header from '../components/header/Header';
import Footer from '../components/footer/AuthFooter';

const mainSteps = [
  {
    step: "01",
    title: "Quick Setup",
    description: "Connect your accounts and get started in under 5 minutes",
    icon: UserPlus,
    color: "from-[#53D347] to-[#45B83A]",
    details: [
      "Create your secure account",
      "Connect bank accounts & credit cards",
      "Import existing financial data",
      "Set up your business profile"
    ]
  },
  {
    step: "02",
    title: "Smart Integration",
    description: "AI automatically categorizes and organizes your financial data",
    icon: Zap,
    color: "from-blue-500 to-blue-600",
    details: [
      "Automatic transaction categorization",
      "Receipt scanning & processing",
      "Vendor identification",
      "Duplicate detection & removal"
    ]
  },
  {
    step: "03",
    title: "Real-Time Insights",
    description: "Get instant visibility into your cash flow and business health",
    icon: BarChart3,
    color: "from-purple-500 to-purple-600",
    details: [
      "Live cash flow monitoring",
      "Business health dashboard",
      "Predictive analytics",
      "Custom report generation"
    ]
  },
  {
    step: "04",
    title: "Actionable Intelligence",
    description: "Make informed decisions with AI-powered recommendations",
    icon: Target,
    color: "from-orange-500 to-orange-600",
    details: [
      "Smart alerts & notifications",
      "Optimization recommendations",
      "Trend analysis & forecasting",
      "Performance benchmarking"
    ]
  }
];

const workflowSteps = [
  {
    title: "Data Collection",
    icon: Database,
    description: "Automatically sync with 100+ banks and financial institutions",
    features: ["Bank account sync", "Credit card integration", "Receipt capture", "Manual entry support"]
  },
  {
    title: "AI Processing",
    icon: Layers,
    description: "Advanced machine learning categorizes and analyzes your data",
    features: ["Smart categorization", "Duplicate detection", "Vendor matching", "Anomaly detection"]
  },
  {
    title: "Real-Time Analysis",
    icon: TrendingUp,
    description: "Continuous monitoring provides up-to-the-minute insights",
    features: ["Live dashboards", "Cash flow tracking", "Trend analysis", "Predictive modeling"]
  },
  {
    title: "Intelligent Alerts",
    icon: Bell,
    description: "Proactive notifications keep you informed of important changes",
    features: ["Custom alerts", "Budget warnings", "Opportunity alerts", "Performance updates"]
  }
];

const featureSpotlight = [
  {
    title: "Mobile Receipt Scanning",
    description: "Snap a photo and our AI extracts all the details instantly",
    icon: Camera,
    workflow: [
      { action: "Take photo", icon: Smartphone },
      { action: "AI extracts data", icon: Scan },
      { action: "Auto-categorizes", icon: FileText },
      { action: "Syncs to dashboard", icon: CheckCircle }
    ]
  },
  {
    title: "Cash Flow Forecasting",
    description: "Predict your financial position weeks and months ahead",
    icon: TrendingUp,
    workflow: [
      { action: "Analyze patterns", icon: BarChart3 },
      { action: "Factor seasonality", icon: Clock },
      { action: "Generate forecast", icon: PieChart },
      { action: "Alert on risks", icon: AlertTriangle }
    ]
  }
];

const Working = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 4);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections(prev => ({
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
    <section className="py-6 sm:py-12 lg:py-16">
      <Header />
      <div className="min-h-screen">
        <section className="relative overflow-hidden px-4">
          <div className="absolute inset-0"></div>

          <div className="max-w-6xl mx-auto relative text-center">

            <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
              How It Works
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              From setup to mastery in minutes. Our intelligent platform automates your financial management so you can focus on growing your business.
            </p>

            <div className="flex items-center justify-center gap-4 mb-12">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 bg-primary font-bold text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                {isPlaying ? 'Pause Demo' : 'Play Demo'}
              </button>
              <button
                onClick={() => setActiveStep(0)}
                className="flex items-center gap-2 text-white bg-red-600 px-6 py-3 font-bold rounded-xl hover:bg-red-800 transition-all duration-200"
              >
                <RotateCcw className="w-5 h-5" />
                Restart
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                {mainSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = activeStep === index;

                  return (
                    <div
                      key={step.step}
                      onClick={() => { setActiveStep(index); setIsPlaying(false); }}
                      className={`relative p-8 rounded-3xl cursor-pointer transition-all duration-500 transform ${isActive
                          ? 'bg-white shadow-2xl scale-105 border-2 border-[#53D347]/20'
                          : 'bg-white/50 shadow-lg hover:shadow-xl hover:scale-102'
                        }`}
                    >
                      {index < mainSteps.length - 1 && (
                        <div className="absolute left-12 top-24 w-px h-16 bg-gradient-to-b from-[#53D347]/30 to-transparent"></div>
                      )}

                      <div className="flex items-start gap-6">
                        <div className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center ${isActive ? 'scale-110' : ''
                          } transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-700">
                            {step.step}
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isActive ? 'text-[#53D347]' : 'text-gray-900'
                            }`}>
                            {step.title}
                          </h3>

                          <p className="text-gray-600 mb-4 text-lg">{step.description}</p>

                          {isActive && (
                            <div className="space-y-2 animate-fade-in">
                              {step.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <CheckCircle className="w-4 h-4 text-[#53D347] flex-shrink-0" />
                                  <span className="text-gray-700">{detail}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Visual Demo Area with mac like screen */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="ml-4 text-sm font-bold text-gray-500">Secure Spend</span>
                    </div>

                    {/* Dynamic Demo Content if user click then it will change*/}
                    <div className="h-80 relative overflow-hidden">
                      {activeStep === 0 && (
                        <div className="animate-fade-in">
                          <h4 className="text-lg font-semibold mb-4">Account Setup</h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 p-3 bg-[#53D347]/10 rounded-lg">
                              <CreditCard className="w-5 h-5 text-[#53D347]" />
                              <span>Chase Business Checking Connected</span>
                              <CheckCircle className="w-4 h-4 text-[#53D347] ml-auto" />
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                              <CreditCard className="w-5 h-5 text-blue-500" />
                              <span>American Express Connected</span>
                              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin ml-auto"></div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeStep === 1 && (
                        <div className="animate-fade-in">
                          <h4 className="text-lg font-semibold mb-4">AI Processing</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <span>Office Supplies - ₹1,20,750</span>
                              <span className="text-sm text-[#53D347]">✓ Categorized</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <span>Marketing - ₹2,45,000</span>
                              <span className="text-sm text-blue-500">Processing...</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeStep === 2 && (
                        <div className="animate-fade-in">
                          <h4 className="text-lg font-semibold mb-4">Live Dashboard</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-[#53D347]/10 rounded-lg">
                              <div className="text-2xl font-bold text-[#53D347]">₹4,50,000</div>
                              <div className="text-sm text-gray-600">Current Balance</div>
                            </div>
                            <div className="p-4 bg-orange-50 rounded-lg">
                              <div className="text-2xl font-bold text-orange-500">₹2,52,450</div>
                              <div className="text-sm text-gray-600">Monthly Expenses</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeStep === 3 && (
                        <div className="animate-fade-in">
                          <h4 className="text-lg font-semibold mb-4">Smart Alerts</h4>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                              <AlertTriangle className="w-5 h-5 text-orange-500 mt-1" />
                              <div>
                                <div className="font-medium">Cash Flow Alert</div>
                                <div className="text-sm text-gray-600">Low balance predicted in 2 weeks</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Progress Indicators */}
                  <div className="flex gap-2 justify-center">
                    {mainSteps.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-500 ${index === activeStep ? 'w-8 bg-[#53D347]' : 'w-2 bg-gray-400'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Workflow */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                Behind the Scenes Technology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our advanced platform processes your financial data through multiple layers of intelligent analysis
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    data-animate
                    id={`workflow-${index}`}
                    className={`relative text-center ${visibleSections[`workflow-${index}`] ? 'animate-fade-in-up' : 'opacity-0'
                      }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Connection Line */}
                    {index < workflowSteps.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-[#53D347] to-transparent z-0"></div>
                    )}

                    <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#53D347] to-[#45B83A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 mb-6">{step.description}</p>

                      <div className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-[#53D347] rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Feature Spotlights */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
                Feature Spotlight
              </h2>
              <p className="text-xl text-gray-600">
                Deep dive into how our most popular features work
              </p>
            </div>

            <div className="space-y-16">
              {featureSpotlight.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                      }`}
                  >
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#53D347] to-[#45B83A] rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-clip-text text-transparent">{feature.title}</h3>
                      </div>

                      <p className="text-xl text-gray-600 mb-8">{feature.description}</p>

                      <div className="space-y-4">
                        {feature.workflow.map((step, stepIndex) => {
                          const StepIcon = step.icon;
                          return (
                            <div key={step.action} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                <StepIcon className="w-5 h-5 text-[#53D347]" />
                              </div>
                              <span className="font-medium text-gray-900">{step.action}</span>
                              {stepIndex < feature.workflow.length - 1 && (
                                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
                        <div className="bg-white rounded-2xl p-6 aspect-square flex items-center justify-center">
                          <Icon className="w-24 h-24 text-[#53D347] animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
      </div>
      <Footer />
    </section>
  );
};

export default Working;
