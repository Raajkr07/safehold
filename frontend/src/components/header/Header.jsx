import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo/HeaderLogo.png";
import ThemeButton from "./ThemeButton";
import SplitText from "../animations/SecureSpend";

const navigation = [
  { name: "Working", href: "/Working" },
  { name: "Benefits", href: "/benefits" },
  { name: "Pricing", href: "/pricing" },
  { name: "Demo", href: "https://cal.com/raajkumar" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full bg-opacity-90 backdrop-blur-md z-50"
        style={{ height: "70px" }}
      >
        <nav
          className="mx-auto max-w-7xl flex items-center justify-between h-[70px] px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center lg:flex-1 h-full">
            <Link to="/" className="flex items-center gap-x-3">
              <img src={Logo} alt="" className="h-10 w-10"/>
              {/* <span className="text-xl font-semibold text-primary">Secure Spend</span> */}
              <SplitText
                text="Secure Spend"
                className="text-xl font-semibold text-primary"
                delay={150}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </Link>
          </div>

          <div className="flex lg:hidden items-center h-full">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12 items-center h-full">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium hover:underline font-mono leading-6 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-end lg:gap-x-4 h-full">
            <ThemeButton />
            <Link
              to="/login"
              className="inline-flex items-center font-bold text-white justify-center bg-primary hover:bg-yellow-400 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-200 text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 h-[36px] sm:h-[42px] no-underline"
            >
              Login
            </Link>
          </div>
        </nav>
      </header>

      <div style={{ height: "70px" }} />

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-aut bg-opacity-90 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-x-3">
                <img src={Logo} alt="SS" className="h-10 w-10"/>
                <span className="text-lg font-semibold">Secure Spend</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 font-mono text-base leading-7 hover:bg-gray-50 dark:hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="py-6">
                  <div className="space-y-2">
                    <ThemeButton />
                    <Link
                      to="/login"
                      className="w-full sm:w-auto flex items-center font-bold justify-center bg-primary hover:bg-yellow-400 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-200 text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 h-[42px] no-underline"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
