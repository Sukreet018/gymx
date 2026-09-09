import { pricingPlans } from "../../data/pricing";
import PricingCard from "../pricing/PricingCard";

function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-(--olive-dark) px-4 py-20 text-(--cream) sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-(--champagne-light) uppercase">
            Memberships
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Choose your level.
          </h2>

          <p className="mt-4 leading-7 text-(--cream)/60">
            Straightforward memberships with everything you need to
            train consistently.
          </p>
        </div>

        {/* pricing plans grid */}
        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;