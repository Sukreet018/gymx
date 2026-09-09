import { Check } from "lucide-react";
import type { PricingPlan } from "../../types/pricing";

interface PricingCardProps {
  plan: PricingPlan;
}

function PricingCard({ plan }: PricingCardProps) {
  return (
    <article
      className={`card h-full border shadow-sm ${
        plan.popular
          ? "border-(--champagne) bg-(--cream) text-(--olive-dark)"
          : "border-white/10 bg-white/5 text-(--cream)"
      }`}
    >
      <div className="card-body p-7 sm:p-8">
        {plan.popular && (
          <span className="badge h-auto w-fit border-none bg-(--champagne) px-3 py-2 text-xs font-bold text-(--olive-dark)">
            Most popular
          </span>
        )}

        <h3 className="card-title mt-3 font-display text-2xl">
          {plan.name}
        </h3>

        <p
          className={`text-sm leading-6 ${
            plan.popular
              ? "text-(--text-muted)"
              : "text-(--cream)/50"
          }`}
        >
          {plan.description}
        </p>

        <div className="mt-4">
          <span className="font-display text-4xl font-extrabold">
            ₹{plan.price}
          </span>

          <span
            className={`ml-1 text-sm ${
              plan.popular
                ? "text-(--text-muted)"
                : "text-(--cream)/50"
            }`}
          >
            /{plan.period}
          </span>
        </div>

        <div
          className={`divider my-2 ${
            plan.popular
              ? "before:bg-(--border-light) after:bg-(--border-light)"
              : "before:bg-white/10 after:bg-white/10"
          }`}
        />

        <ul className="flex flex-1 flex-col gap-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm">
              <Check
                size={18}
                className="mt-0.5 shrink-0 text-(--champagne)"
              />

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="card-actions mt-8">
          <button
            type="button"
            className={`btn w-full rounded-full border-none shadow-none ${
              plan.popular
                ? "bg-(--olive-dark) text-(--cream) hover:bg-(--olive)"
                : "border border-white/20 bg-transparent text-(--cream) hover:bg-white/10"
            }`}
          >
            Choose {plan.name}
          </button>
        </div>
      </div>
    </article>
  );
}

export default PricingCard;