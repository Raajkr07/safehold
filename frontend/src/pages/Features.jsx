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
import Header from '../components/header/Header';
import Footer from '../components/footer/AuthFooter';

const Card = ({ children, className }) => (
  <div className={`rounded-xl bg-white shadow ${className}`}>{children}</div>
);

const CardHeader = ({ children, className }) => (
  <div className={`px-6 py-4 border-b ${className}`}>{children}</div>
);

const CardTitle = ({ children, className }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

const CardContent = ({ children, className }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

const CardDescription = ({ children, className }) => (
  <p className={`text-gray-600 ${className}`}>{children}</p>
);

// Features data
const features = [
  { icon: PieChart, title: "Expense Tracking", description: "Automatically categorize and track all business expenses with smart receipt scanning and real-time updates." },
  { icon: TrendingUp, title: "Business Health Monitor", description: "Get comprehensive insights into your business financial health with predictive analytics and trend analysis." },
  { icon: Target, title: "Budget Management", description: "Set budgets, track spending against targets, and receive alerts when approaching limits." },
  { icon: BarChart3, title: "Financial Reporting", description: "Generate detailed reports for taxes, investors, or internal analysis with customizable dashboards." },
  { icon: AlertTriangle, title: "Cash Flow Alerts", description: "Proactive notifications about potential cash flow issues before they become critical problems." },
  { icon: DollarSign, title: "Cost Optimization", description: "AI-powered recommendations to reduce costs and identify unnecessary expenses across your business." },
  { icon: FileText, title: "Tax Preparation", description: "Automatically organize expenses for tax season with IRS-compliant categorization and documentation." },
  { icon: Shield, title: "Secure & Compliant", description: "Bank-level security with SOC 2 compliance and encrypted data storage for complete peace of mind." },
  { icon: Clock, title: "Real-time Sync", description: "Connect bank accounts and credit cards for automatic transaction import and real-time financial updates." }
];

const Features = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
        <Header/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Everything you need to manage your business finances
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive tools designed specifically for small businesses to track expenses, monitor financial health, and make data-driven decisions.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base leading-7">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            );
          })}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Features;
