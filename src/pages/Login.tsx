import { ArrowRight, Dumbbell } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const from =
    (location.state as { from?: string } | null)?.from ?? "/dashboard";

  //submit handler
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    localStorage.setItem("gym_auth", "true");
    navigate(from, { replace: true });
  }

  return (
    <main className="min-h-screen bg-var(--olive-dark) text-var(--cream)">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/*left brand panel*/}
        <section className="relative hidden overflow-hidden lg:flex">
          {/*background image*/}
          <img
            src="https://images.unsplash.com/photo-1648995361141-30676a75fd27?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gym training"
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
                Member access
              </span>

              <h1 className="mt-5 font-display text-(--cream) text-5xl font-extrabold leading-tight xl:text-6xl">
                Your training.
                <span className="block text-(--champagne)">
                  Your progress.
                </span>
              </h1>

              <p className="mt-6 max-w-md leading-8 text-(--cream)/60">
                Access your membership, track your training and stay
                consistent with your goals.
              </p>
            </div>

            <p className="text-sm text-(--cream)/40">
              Train with purpose.
            </p>
          </div>
        </section>

        {/*right login form section*/}
        <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
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
              {/*form header*/}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-(--champagne)">
                  Welcome back
                </span>

                <h2 className="mt-3 font-display text-3xl font-extrabold">
                  Sign in to GymX
                </h2>

                <p className="mt-3 text-sm leading-6 text-(--text-muted)">
                  Continue where you left off.
                </p>
              </div>

              {/*login form*/}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
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
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs font-semibold text-(--olive-muted) hover:text-(--olive-dark)"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-(--border-light) bg-(--cream) px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-(--text-muted)/50 focus:border-(--champagne)"
                  />
                </div>

                {/*remember me checkbox*/}
                <label className="flex cursor-pointer items-center gap-3 text-sm text-(--text-muted)">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm border-(--border-light) [--chkbg:var(--olive-dark)] [--chkfg:var(--cream)]"
                  />
                  Keep me signed in
                </label>

                {/*submit button*/}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-(--olive-dark) px-5 py-3.5 font-semibold text-(--cream) transition-colors hover:bg-(--olive)"
                >
                  Sign in
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

              {/*signup link*/}
              <p className="text-center text-sm text-(--text-muted)">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-bold text-(--olive-dark) underline decoration-(--champagne) decoration-2 underline-offset-4"
                >
                  Create one
                </Link>
              </p>
            </div>

            {/*footer text*/}
            <p className="mt-6 text-center text-xs text-(--cream)/40">
              By continuing, you agree to our terms and privacy policy.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;