import { Dumbbell, HeartPulse, ShieldCheck, Users } from "lucide-react";

// features data
const features = [
  {
    icon: Dumbbell,
    title: "Premium equipment",
    description:
      "Professional-grade equipment selected for strength, conditioning and functional training.",
  },
  {
    icon: Users,
    title: "Expert coaching",
    description:
      "Work with experienced coaches who focus on technique, progression and consistency.",
  },
  {
    icon: HeartPulse,
    title: "Smarter training",
    description:
      "Structured programs designed around your goals instead of random workouts.",
  },
  {
    icon: ShieldCheck,
    title: "Clean environment",
    description:
      "A carefully maintained training environment where quality and comfort matter.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-24 bg-(--cream-light) px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/*section header */}
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] text-(--champagne) uppercase">
            Why GymX
          </span>

          <h2 className="mt-4 text-3xl font-bold text-(--olive-dark) sm:text-4xl">
            Everything you need to train seriously.
          </h2>

          <p className="mt-4 leading-7 text-(--text-muted)">
            No unnecessary complexity. Just great equipment, expert guidance and
            an environment built for progress.
          </p>
        </div>

        {/* feature cards grid */}
        <div className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              /* feature item */
              <article
                key={feature.title}
                className="card bg-base-100 border border-(--border-light) shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="card-body p-6 sm:p-7">
                  {/* feature icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-(--olive) text-(--cream)">
                    <Icon size={21} />
                  </div>

                  {/* feature title */}
                  <h3 className="card-title font-display mt-3 text-lg text-(--olive-dark)">
                    {feature.title}
                  </h3>

                  {/* feature text */}
                  <p className="text-sm leading-7 text-(--text-muted)">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;