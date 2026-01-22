import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaXTwitter, label: "Twitter", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaFacebookF, label: "Facebook", href: "#" },
  ];

  const companyLinks = ["Home", "Explore", "Tours", "Contact"];
  const quickLinks = [
    "Privacy Policy",
    "Terms & Conditions",
    "FAQs",
    "Support",
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Section */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div>
            <NavLink to="/" className="inline-flex items-center gap-3">
              <img
                src="src/assets/logo.ico"
                height={48}
                width={48}
                alt="Ravangla Star Logo"
                className="rounded"
              />
              <span className="text-xl font-bold text-white">
                Ravangla Star
              </span>
            </NavLink>

            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Discover unforgettable tours, breathtaking views, and curated
              travel experiences designed just for you.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="footer-heading font-bold">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link to="#" className="footer-link hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link to="#" className="footer-link hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h3 className="footer-heading font-bold">Connect With Us</h3>

            <div className="mt-4 text-sm text-gray-400 flex items-start gap-2">
              <IoLocationOutline className="mt-1 shrink-0" size={16} />
              <span>
                Road, opposite Power Colony, Kewzing, Ravangla, Sikkim 737139
                <br />
                India
              </span>
            </div>

            <div className="mt-6 flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className=" my-10 border-t border-gray-800" />

        {/* Bottom */}
        <div className="flex items-center justify-between text-center">
          <div className=" gap-4 text-sm text-gray-400">
            <span>© {currentYear} Ravangla Star. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
