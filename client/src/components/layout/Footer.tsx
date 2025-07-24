import { BRAND_NAME, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Technology", href: "/technology" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Careers", href: "/reviews" },
  ];
  const products = [
    { label: "Serum", href: "/about" },
    { label: "Moisturizers", href: "/technology" },
    { label: "Cleansers", href: "/ingredients" },
    { label: "Speciality", href: "/sustainability" },
  ];

  const supportLinks = [
    { label: "Contact Us", href: "/contact" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Size Guide", href: "/size-guide" },
    { label: "FAQ", href: "/faq" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Accessibility", href: "/cookies" },
  ];

  return (
    <footer className="py-16 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text tracking-tighter mb-4">
              {BRAND_NAME}
            </h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md">
              The future of skincare innovation.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-orange-500 mb-6">Products</h4>
            <ul className="space-y-3">
              {products.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-orange-500 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Connect */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-orange-500 mb-6">Connect</h4>

            <div className="flex space-x-4 mb-6">
              {SOCIAL_LINKS.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="p-3 glass-effect rounded-full hover:border-orange-500 transition-all duration-300 hover-scale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`${social.icon} text-orange-500`}></i>
                </a>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 text-sm bg-gray-800 border border-gray-600 border-r-0 rounded-l text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                />
                <button className="px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-r transition-colors duration-300 flex items-center justify-center">
                  <i className="fas fa-arrow-right text-sm"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Support */}
          {/* <div>
            <h4 className="text-sm uppercase tracking-widest text-orange-500 mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2023 {BRAND_NAME} Cosmetics. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-500 hover:text-orange-500 text-sm transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
