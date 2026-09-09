import { ArrowRight, Dumbbell } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  //submit handler
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    localStorage.setItem("gym_auth", "true");
    navigate("/dashboard", { replace: true });
  }

  return (
    <main className="min-h-screen bg-(--olive-dark) text-(--cream)">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/*right brand panel (swapped order on lg screens)*/}
        <section className="relative hidden overflow-hidden lg:flex lg:order-2">
          {/*background image*/}
          <img
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1400&q=85"
            alt="Strength training"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-(--olive-dark)/75" />

          {/*panel content*/}
          <div className="relative z-10 flex w-full flex-col justify-between p-10 xl:p-14">
            {/*brand logo*/}
            <Link
              to="/"
              className="flex items-center gap-2 font-display text-xl font-extrabold"
            >
              <Dumbbell size={21} className="text-(--cream)" />
              <p className="text-(--cream)">gym</p><span className="text-(--champagne)">X</span>
            </Link>

            {/*panel text*/}
            <div className="max-w-lg">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-(--champagne-light)">
                Start your journey
              </span>

              <h1 className="mt-5 font-display text-(--cream) text-5xl font-extrabold leading-tight xl:text-6xl">
                Build strength.
                <span className="block text-(--champagne)">
                  Build consistency.
                </span>
              </h1>

              <p className="mt-6 max-w-md leading-8 text-(--cream)/60">
                Join a training environment designed to help you become
                stronger, healthier, and more consistent.
              </p>
            </div>

            <p className="text-sm text-(--cream)/40">
              Your next level starts here.
            </p>
          </div>
        </section>

        {/*left signup form section*/}
        <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 lg:order-1">
          <div className="w-full max-w-md">
            {/*mobile logo*/}
            <Link
              to="/"
              className="mb-10 inline-flex items-center gap-2 font-display text-xl font-extrabold lg:hidden"
            >
              <Dumbbell size={21} />
              gym<span className="text-(--champagne)">X</span>
            </Link>

            {/*form card*/}
            <div className="rounded-3xl bg-(--cream-light) p-7 text-(--olive-dark) shadow-2xl sm:p-10">
              {/* form header */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-(--champagne)">
                  Membership
                </span>

                <h2 className="mt-3 font-display text-3xl font-extrabold">
                  Create your account
                </h2>

                <p className="mt-3 text-sm leading-6 text-(--text-muted)">
                  Create your GymX account and start training with purpose.
                </p>
              </div>

              {/*signup form*/}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                {/*full name field*/}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Full name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-(--border-light) bg-(--cream) px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-(--text-muted)/50 focus:border-(--champagne)"
                  />
                </div>

                {/*email field*/}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-(--border-light) bg-(--cream) px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-(--text-muted)/50 focus:border-(--champagne)"
                  />
                </div>

                {/*password field*/}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    placeholder="At least 8 characters"
                    className="w-full rounded-xl border border-(--border-light) bg-(--cream) px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-(--text-muted)/50 focus:border-(--champagne)"
                  />
                </div>

                {/*terms agreement checkbox*/}
                <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-(--text-muted)">
                  <input
                    type="checkbox"
                    required
                    className="checkbox checkbox-sm mt-0.5 border-(--border-light) [--chkbg:var(--olive-dark)] [--chkfg:var(--cream)]"
                  />
                  <span>
                    I agree to the terms of service and privacy policy.
                  </span>
                </label>

                {/*submit button*/}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-(--olive-dark) px-5 py-3.5 font-semibold text-(--cream) transition-colors hover:bg-(--olive)"
                >
                  Create account
                  <ArrowRight size={18} />
                </button>
              </form>

              {/*divider*/}
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-(--border-light)" />
                <span className="text-xs text-(--text-muted)">
                  OR
                </span>
                <div className="h-px flex-1 bg-(--border-light)" />
              </div>

              {/*login link*/}
              <p className="text-center text-sm text-(--text-muted)">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-bold text-(--olive-dark) underline decoration-(--champagne) decoration-2 underline-offset-4"
                >
                  Sign in
                </Link>
              </p>
            </div>

            {/*footer text*/}
            <p className="mt-6 text-center text-xs text-(--cream)/40">
              Your account will be connected to your GymX membership.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SignUp;