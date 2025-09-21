import { CheckCircle } from "lucide-react";
import Header from '../components/header/Header';
import Footer from '../components/footer/AuthFooter';

const benefits = [
  "Save 15+ hours per month on financial admin",
  "Reduce business expenses by up to 23%",
  "Improve cash flow predictability by 40%",
  "Streamline tax preparation and compliance",
  "Make data-driven business decisions",
  "Identify growth opportunities faster"
];

const Benefits = () => {
  return (
    <section className="overflow-hidden py-16 sm:py-16 lg:py-16">
      <Header/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base leading-7 text-primary">Why Choose Us</h2>
              <p className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl">
                Built for small business success
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We understand the unique challenges small businesses face. Our platform is designed to help you overcome financial obstacles and accelerate growth with actionable insights.
              </p>
              <dl className="mt-10 space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="relative flex gap-x-4">
                    <CheckCircle className="mt-1 h-6 w-6 flex-none text-primary" />
                    <div className="text-base leading-7 text-gray-700">
                      {benefit}
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1531058240690-006c446962d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzU4MjIwNDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Small Business Owner"
              className="aspect-[4/3] w-full rounded-2xl bg-gray-50 object-cover shadow-xl lg:aspect-auto lg:h-[600px]"
            />
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-6 shadow-2xl">
              <div className="text-sm text-gray-500">Businesses Helped</div>
              <div className="text-3xl text-primary">500+</div>
              <div className="text-sm text-green-600">Growing daily</div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Benefits;