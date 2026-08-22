import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                CAB
              </div>

              <div>
                <h2 className="text-lg font-bold text-white">
                  Community Action
                </h2>
                <p className="text-xs text-gray-400">
                  In Bangladesh PLC
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              নিরাপদ ও স্বচ্ছ বিনিয়োগের মাধ্যমে আর্থিক সমৃদ্ধির পথে
              এগিয়ে যাওয়ার জন্য আমরা একটি আধুনিক ও নির্ভরযোগ্য
              বিনিয়োগ প্ল্যাটফর্ম গড়ে তুলতে কাজ করছি।
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm font-bold transition hover:bg-green-600 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm font-bold transition hover:bg-green-600 hover:text-white"
              >
                ▶
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm font-bold transition hover:bg-green-600 hover:text-white"
              >
                in
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-sm font-bold transition hover:bg-green-600 hover:text-white"
              >
                W
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="transition hover:text-green-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition hover:text-green-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/investment-plans"
                  className="transition hover:text-green-400"
                >
                  Investment Plans
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition hover:text-green-400"
                >
                  Products & Services
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="transition hover:text-green-400"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/team"
                  className="transition hover:text-green-400"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Useful Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/news"
                  className="transition hover:text-green-400"
                >
                  News & Updates
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="transition hover:text-green-400"
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-green-400"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="transition hover:text-green-400"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="transition hover:text-green-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/risk-disclosure"
                  className="transition hover:text-green-400"
                >
                  Risk Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-5 text-sm">

              {/* Address */}
              <div className="flex gap-3">
                <span className="text-xl">📍</span>

                <div>
                  <p className="font-medium text-white">
                    Office Address
                  </p>

                  <p className="mt-1 leading-6 text-gray-400">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <span className="text-xl">📞</span>

                <div>
                  <p className="font-medium text-white">
                    Phone
                  </p>

                  <a
                    href="tel:+8801000000000"
                    className="mt-1 block text-gray-400 transition hover:text-green-400"
                  >
                    +880 1000-000000
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <span className="text-xl">✉️</span>

                <div>
                  <p className="font-medium text-white">
                    Email
                  </p>

                  <a
                    href="mailto:info@example.com"
                    className="mt-1 block text-gray-400 transition hover:text-green-400"
                  >
                    info@example.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-3">
                <span className="text-xl">💬</span>

                <div>
                  <p className="font-medium text-white">
                    WhatsApp
                  </p>

                  <a
                    href="#"
                    className="mt-1 block text-gray-400 transition hover:text-green-400"
                  >
                    Chat with us
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-sm sm:px-6 md:flex-row md:text-left lg:px-8">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Community Action In Bangladesh PLC.
            All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              to="/terms"
              className="text-gray-500 transition hover:text-green-400"
            >
              Terms
            </Link>

            <Link
              to="/privacy"
              className="text-gray-500 transition hover:text-green-400"
            >
              Privacy
            </Link>

            <Link
              to="/risk-disclosure"
              className="text-gray-500 transition hover:text-green-400"
            >
              Risk Disclosure
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;