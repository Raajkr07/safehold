import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/LogoSymbol";
import ThemeButton from "./ThemeButton";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Benefits", href: "#benefits" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full bg-opacity-90 backdrop-blur-md z-50 shadow-sm"
        style={{ height: "70px" }}
      >
        <nav
          className="mx-auto max-w-7xl flex items-center justify-between h-[70px] px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center lg:flex-1 h-full">
            <Link to="/" className="flex items-center gap-x-3">
              <Logo width={80} height={70} />
              <span className="text-xl font-semibold text-primary">Safe Hold</span>
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
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:underline leading-6 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-end lg:gap-x-4 h-full">
            <ThemeButton />
            <button
              type="button"
              className="text-sm leading-6 px-4 py-2 rounded-md text-white font-bold bg-primary hover:bg-yellow-400 dark:hover:bg-yellow-400 transition-colors"
            >
              Log in
            </button>
          </div>
        </nav>
      </header>

      <div style={{ height: "70px" }} />

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/30 dark:bg-black/70" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-x-3">
                <Logo width="32" height="32" />
                <span className="text-lg font-semibold">Safe Hold</span>
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
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:bg-gray-50 dark:hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="py-6">
                  <div className="space-y-2">
                    <ThemeButton />
                    <button
                      type="button"
                      className="w-full text-base font-semibold leading-7 rounded-md px-3.5 py-2 bg-primary hover:bg-primary-dark dark:bg-primary-dark dark:hover:bg-primary transition-colors"
                    >
                      Log in
                    </button>
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
