import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import LogoComponent from '../../assets/logo/HeroLogo';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-auto pt-[70px] pb-20 sm:pt-[70px] sm:pb-24 lg:pt-[70px] lg:pb-32 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-14 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-3xl tracking-tight font-mono sm:text-4xl lg:text-5xl">
              Take Control of Your{" "}
              <span className="text-primary">Business Growth</span>
            </h1>
            <p className="mt-6 text-lg leading-8 sm:text-xl font-mono sm:leading-9 max-w-xl">
              This system helps businesses watch where their money goes and how well they're doing financially. You'll get up-to-date information and helpful suggestions so you can make smart choices about your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-x-0 gap-y-4 sm:gap-x-6">
              <Link
                type="button"
                to={'/login'}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white bg-primary rounded-md text-base sm:text-lg font-semibold inline-flex justify-center items-center dark:text-white hover:bg-green-600 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>

              <Link
                type="button"
                to={'/tutorials'}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white bg-red-600 rounded-md text-base sm:text-lg font-semibold inline-flex justify-center items-center dark:text-white hover:bg-red-700 transition-colors"
              >
                <Play className="mr-2 h-5 w-5" aria-hidden="true" />
                Watch Demo
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-x-8 text-sm">
              <div className="flex items-center gap-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                14-day free trial
              </div>
              <div className="flex items-center gap-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                Cancel anytime
              </div>
            </div>
          </div>
          <div className="relative lg:ml-10 flex flex-col items-center">
            <LogoComponent
              className="animate-svg relative w-full h-full"
              data-duration="200"
              data-stagger="80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
