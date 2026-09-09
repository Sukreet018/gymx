import { ArrowUpRight } from "lucide-react";
import type { Trainer } from "../../types/trainer";

interface TrainerCardProps {
  trainer: Trainer;
}

function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <article className="card group bg-base-100 overflow-hidden border border-(--border-light) shadow-sm">
      {/*card image container*/}
      <figure className="relative h-80 overflow-hidden sm:h-96">
        <img
          src={trainer.image}
          alt={trainer.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/*role badge*/}
        <div className="absolute inset-0 bg-linear-to-t from-(--olive-dark)/70 to-transparent" />

        <div className="absolute bottom-4 left-4">
          <span className="badge border-none bg-(--cream) px-3 py-3 text-xs font-semibold text-(--olive-dark)">
            {trainer.role}
          </span>
        </div>
      </figure>
      {/*card body*/}
      <div className="card-body p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="card-title font-display text-xl text-(--olive-dark)">
            {trainer.name}
          </h3>

          <ArrowUpRight
            size={20}
            className="mt-1 shrink-0 text-(--champagne)"
          />
        </div>

        {/*description*/}
        <p className="text-sm leading-7 text-(--text-muted)">
          {trainer.description}
        </p>
        {/*specialties tags*/}
        <div className="mt-2 flex flex-wrap gap-2">
          {trainer.specialties.map((specialty) => (
            <span
              key={specialty}
              className="badge h-auto border border-(--border-light) bg-transparent px-3 py-2 text-xs text-(--olive-muted)"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default TrainerCard;
