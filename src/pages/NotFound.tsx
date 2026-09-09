import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-(--olive-dark) px-5 py-16 text-(--cream)">
      <div className="w-full max-w-3xl text-center">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-(--champagne)/40">
          <span className="font-display text-xl font-bold text-(--champagne)">
            X
          </span>
        </div>

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-(--champagne)">
          Page not found
        </p>

        <h1 className="mt-5 font-display text-7xl font-extrabold tracking-tight sm:text-9xl">
          404
        </h1>

        <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
          This page missed the workout.
        </h2>

        <p className="mx-auto mt-4 max-w-lg leading-7 text-(--cream)/55">
          The page you're looking for doesn't exist or may have
          moved. Let's get you back to the GymX homepage.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-(--cream) px-6 py-3.5 font-semibold text-(--olive-dark) transition-transform hover:-translate-y-0.5"
          >
            <Home size={18} />
            Back to home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-(--cream) transition-colors hover:bg-white/10"
          >
            <ArrowLeft size={18} />
            Go back
          </button>
        </div>
      </div>
    </main>
  );
}

export default NotFound;