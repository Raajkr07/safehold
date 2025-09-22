import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import Logo from "../../assets/logo/HeaderLogo.png";

const navigation = {
  product: [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Security", href: "#" },
    { name: "Integrations", href: "#" },
  ],
  support: [
    { name: "Schedule Demo", href: "https://cal.com/raajkumar" },
    { name: "Contact Us", href: "#" },
    { name: "Status", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "Working", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ],
  legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Pricing Policy", href: "#" },
    { name: "Security", href: "#" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
  ],
};

const Footer = () => {
  return (
    <footer className="dark:bg-gray-900/20 bg-gradient from-white to-primary border-t border-gray-400/30" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className=" mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-16 sm:pb-8 lg:px-8 lg:pt-16 lg:pb-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-x-3">
              <Link to="/">
                <img src={Logo} alt="SS" className="h-10 w-10" />
              </Link>
              <span className="text-xl font-bold text-primary">Secure Spend</span>
            </div>
            <p className="text-sm leading-6 max-w-sm">
              This tool gives businesses a complete picture of their finances so they can grow steadily and succeed over time.
            </p>
          </div>
          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            {/* <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">PRODUCT</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm hover:text-primary hover:underline transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div> */}
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold">SUPPORT</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm hover:text-primary hover:underline transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold">RESOURCES</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.Resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm hover:text-primary hover:underline transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold">LEGAL</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm hover:text-primary hover:underline transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* copyright and social links */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-gray-400/30 pt-8 sm:flex-row sm:gap-0">
          <p className="text-xs ">Copyright &copy; 2025 Secure Spend.</p>
          <div className="flex space-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className=" hover:text-primary hover:underline transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
