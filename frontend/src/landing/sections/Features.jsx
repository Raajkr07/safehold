import React from "react";
import { 
  TrendingUp, 
  PieChart, 
  Shield, 
  Clock, 
  Target, 
  BarChart3,
  AlertTriangle,
  DollarSign,
  FileText
} from "lucide-react";

const features = [
  {
    icon: PieChart,
    title: "Expense Tracking",
    description: "Keep track of all your business spending automatically. Just take photos of receipts and see your expenses organized right away."
  },
  {
    icon: TrendingUp,
    title: "Business Health Monitor",
    description: "See how well your business is doing financially. Get easy-to-understand reports that show if you're making or losing money."
  },
  {
    icon: Target,
    title: "Budget Management",
    description: "Set spending limits for different parts of your business. Get warnings when you're close to spending too much."
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    description: "Create simple reports for taxes, investors, or yourself. Choose what information you want to see on easy-to-read charts."
  },
  {
    icon: AlertTriangle,
    title: "Cash Flow Alerts",
    description: "Get early warnings when your business might run low on cash, so you can fix problems before they get serious."
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description: "Smart suggestions to help you save money by finding expenses you don't really need and ways to spend less."
  },
  {
    icon: FileText,
    title: "Tax Preparation",
    description: "Automatically organize all your business expenses for tax time. Everything is sorted the way tax authorities want it."
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Your financial information is protected with the same security that banks use. Your data is completely safe and private."
  },
  {
    icon: Clock,
    title: "Real-time Sync",
    description: "Connect your bank accounts and credit cards to automatically bring in all transactions. Your financial information updates instantly."
  }
];


const FeaturesSection = () => {
  return (
    <section className="py-14 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Everything you need to manage your business Growth
          </h2>
          <p className="mt-6 text-lg leading-8">
            Comprehensive tools designed specifically for businesses to track expenses, monitor financial health, and make data-driven decisions.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group rounded-lg p-6"
              >
                <div className="pb-4">
                  <div className="flex items-center gap-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                </div>
                <div className="pt-0">
                  <p className="text-base leading-7">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;