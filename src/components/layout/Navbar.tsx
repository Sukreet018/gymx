import { Menu, X } from "lucide-react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Trainers", href: "/#trainers" },
  { label: "Pricing", href: "/subscription" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("/#")) {
      return;
    }

    event.preventDefault();

    const targetId = href.substring(2);

    if (location.pathname === "/") {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/", {
        state: { scrollTo: targetId },
      });
    }
  };

  React.useEffect(() => {
    const targetId = location.state?.scrollTo;

    if (location.pathname !== "/" || !targetId) {
      return;
    }

    const timer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      navigate("/", { replace: true, state: {} });
    }, 100);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.state, navigate]);

  return (
    <header className="fixed top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Desktop navbar */}
        <div className="navbar min-h-14 rounded-full border border-(--border-light) bg-base-100/95 px-4 shadow-sm backdrop-blur-md sm:min-h-16 sm:px-6">
          {/* Logo */}
          <div className="navbar-start">
            <Link
              to="/"
              className="font-display text-xl font-extrabold tracking-tight text-(--olive-dark) sm:text-2xl"
            >
              gym<span className="text-(--champagne)">X</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="navbar-center hidden lg:flex">
            <nav className="flex items-center gap-1">
              {navigation.map((item) =>
                item.href.startsWith("/#") ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => handleNavigation(event, item.href)}
                    className="rounded-full px-4 py-2 text-sm font-medium text-(--olive-dark)/70 transition-colors hover:bg-(--olive) hover:text-(--cream)"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-(--olive-dark)/70 transition-colors hover:bg-(--olive) hover:text-(--cream)"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
          </div>

          {/* Desktop right side (Only visible on lg screens and above) */}
          <div className="navbar-end hidden lg:flex">
            <Link
              to="/contact"
              className="btn rounded-full border-none bg-(--olive-dark) px-5 text-sm font-semibold text-(--cream) hover:bg-(--olive)"
            >
              Join us
            </Link>
          </div>
          
          {/* Mobile menu button (Only visible on screens smaller than lg) */}
          <div className="navbar-end lg:hidden">
            <label
              htmlFor="mobile-navigation"
              className="btn btn-circle btn-sm border-none bg-(--olive-dark) text-(--cream) shadow-none"
              aria-label="Open navigation"
            >
              <Menu size={19} />
            </label>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className="drawer drawer-end lg:hidden">
        <input
          id="mobile-navigation"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content" />

        <div className="drawer-side z-60">
          <label
            htmlFor="mobile-navigation"
            aria-label="Close navigation"
            className="drawer-overlay"
          />

          <aside className="min-h-full w-[min(85vw,20rem)] bg-(--olive-dark) p-6 text-(--cream)">
            {/* Drawer header */}
            <div className="mb-10 flex items-center justify-between">
              <Link
                to="/"
                className="font-display text-2xl font-extrabold tracking-tight"
              >
                gym<span className="text-(--champagne)">X</span>
              </Link>

              <label
                htmlFor="mobile-navigation"
                className="btn btn-circle btn-sm border border-white/15 bg-transparent text-(--cream) shadow-none"
                aria-label="Close navigation"
              >
                <X size={18} />
              </label>
            </div>

            {/* Mobile navigation */}
            <nav className="flex flex-col gap-2">
              {navigation.map((item) =>
                item.href.startsWith("/#") ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => handleNavigation(event, item.href)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-(--cream)/70 transition-colors hover:bg-white/10 hover:text-(--cream)"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="rounded-xl px-4 py-3 text-base font-medium text-(--cream)/70 transition-colors hover:bg-white/10 hover:text-(--cream)"
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-8">
              <Link
                to="/contact"
                className="btn w-full rounded-xl border-none bg-(--cream) text-(--olive-dark) shadow-none hover:bg-(--cream-dark)"
              >
                Join us
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}

export default Navbar;