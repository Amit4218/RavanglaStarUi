import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { useState } from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const companyLinks = ["Home", "Services", "Contact", "About us"];
  const socialLinks = [
    { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
    { icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
  ];

  const [Email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Email) {
      return;
    }
    fetch("https://ravonglastar.com/subscribe", {
      method: "POST",
      body: {
        Email: JSON.stringify(Email),
      },
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
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

            <p className="text-sm leading-relaxed text-gray-400">
              Discover unforgettable tours, breathtaking views, and curated
              travel experiences designed just for you.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white">Quick Links</h3>

            <ul className="space-y-2 text-sm">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="text-gray-400 transition hover:text-white hover:underline"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white">
              Subscribe to our Newsletter
            </h3>

            <p className="text-sm text-gray-400">
              Get travel updates, exclusive offers, and tour highlights straight
              to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={Email}
                required
                placeholder="Enter your email"
                className="
              w-full rounded-md bg-gray-800 px-4 py-2 text-sm
              text-white placeholder-gray-400 outline-none
              focus:ring-2 focus:ring-green-600"
              />

              <button
                type="submit"
                className="
              w-full rounded-md bg-green-600 px-4 py-2
              text-sm font-semibold text-white
              transition hover:bg-green-700"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-white">Connect With Us</h3>

            <div className="flex items-start gap-3 text-sm text-gray-400">
              <FaLocationDot className="mt-1 shrink-0" size={16} />
              <span>
                Road, opposite Power Colony, Kewzing, Ravangla, Sikkim 737139
                <br />
                India
              </span>
            </div>

            <div className="flex items-start gap-3 text-sm text-gray-400">
              <FaPhone className="mt-1 shrink-0" size={16} />
              <span>
                +91-9339268296
                <br />
                +91-7365050630
                <br />
                +91-9239038881
              </span>
            </div>

            <div className="flex gap-4 pt-2">
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

              <a
                href="mailto:hotel@ravongla.com"
                target="_blank"
                className="social-icon"
              >
                <AiOutlineMail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="my-12 border-t border-gray-800" />

        <div className="text-center text-sm text-gray-400">
          © {currentYear} Ravangla Star. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
