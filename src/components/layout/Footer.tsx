import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebook , FaInstagram } from "react-icons/fa6";

// footer links
const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/subscription" },
  { label: "Contact", href: "/contact" }
];

function Footer() {
  return (
    <footer className="bg-(--olive-dark) px-4 py-14 text-(--cream) sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* main grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* brand info */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-display text-xl font-extrabold"
            >
              <Dumbbell size={21} />
              gym<span className="text-(--champagne)">X</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-(--cream)/50">
              A premium training environment built around coaching,
              consistency and long-term progress.
            </p>
          </div>

          {/* navigation links */}
          <div>
            <h3 className="font-semibold">Explore</h3>

            <nav className="mt-4 grid grid-cols-2 gap-3">
              {footerLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-(--cream)/50 transition-colors hover:text-(--cream)"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-(--cream)/50 transition-colors hover:text-(--cream)"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>

          {/* contact info */}
          <div>
            <h3 className="font-semibold">Get in touch</h3>

            <div className="mt-4 space-y-2 text-sm text-(--cream)/50">
              <p>123 Fitness Avenue</p>
              <p>Kolkata, West Bengal</p>
              <p>+91 98765 43210</p>
              <p>hello@gymx.com</p>
              <div className="grid grid-flow-col gap-2 w-max">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>

        {/* copyright section */}
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-(--cream)/40">
          © {new Date().getFullYear()} GymX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
