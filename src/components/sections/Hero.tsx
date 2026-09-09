import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-(--olive-dark) text-(--cream)"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(182,155,98,0.16),transparent_30%)]" />

      {/* main content container */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:grid-cols-2 lg:px-8 lg:pb-24">
        {/* text content */}
        <div className="max-w-2xl">
          {/* badge */}
          <span className="badge badge-outline mb-6 h-auto rounded-full border-(--champagne)/40 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-(--champagne-light) uppercase sm:text-xs">
            Train with purpose
          </span>

          {/* heading */}
          <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Stronger body.
            <span className="block text-(--champagne)">Sharper mind.</span>
          </h1>

          {/* description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-(--cream)/65 sm:text-lg">
            A premium training environment designed around serious coaching,
            intelligent programming and sustainable results.
          </p>

          {/* cta buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/signup"
              className="btn h-auto min-h-0 rounded-full border-none bg-(--cream) px-6 py-3.5 font-semibold text-(--olive-dark) shadow-none hover:bg-(--cream-dark)"
            >
              Start training
              <ArrowRight size={18} />
            </Link>

            <a
              href="#features"
              className="btn h-auto min-h-0 rounded-full border border-white/20 bg-transparent px-6 py-3.5 font-semibold text-(--cream) shadow-none hover:bg-white/10"
            >
              <Play size={17} />
              Explore gym
            </a>
          </div>

          {/* stats list */}
          <div className="stats mt-12 grid w-full max-w-lg grid-cols-3 overflow-hidden border-t border-white/10 bg-transparent pt-2 text-(--cream)">
            <div className="stat min-w-0 px-0 py-4 pr-3">
              <div className="stat-value text-2xl text-(--cream) sm:text-3xl">
                12+
              </div>
              <div className="stat-title mt-1 whitespace-normal text-xs font-normal text-(--cream)/50">
                Expert trainers
              </div>
            </div>

            <div className="stat min-w-0 px-3 py-4">
              <div className="stat-value text-2xl text-(--cream) sm:text-3xl">
                2K+
              </div>
              <div className="stat-title mt-1 whitespace-normal text-xs font-normal text-(--cream)/50">
                Active members
              </div>
            </div>

            <div className="stat min-w-0 px-3 py-4">
              <div className="stat-value text-2xl text-(--cream) sm:text-3xl">
                10+
              </div>
              <div className="stat-title mt-1 whitespace-normal text-xs font-normal text-(--cream)/50">
                Years experience
              </div>
            </div>
          </div>
        </div>

        {/* hero media */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-4 rounded-4xl border border-(--champagne)/20 sm:-inset-5" />

          <div className="relative overflow-hidden rounded-3xl sm:rounded-2xl">
            {/* main hero image */}
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=85"
              alt="Professional gym training"
              className="h-112 w-full object-cover sm:h-114 lg:h-168"
            />

            <div className="absolute inset-0 bg-linear-to-t from-(--olive-dark)/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;