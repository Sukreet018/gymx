import { trainers } from "../../data/trainers";
import TrainerCard from "../trainers/TrainerCard";

function Trainers() {
  return (
    <section
      id="trainers"
      className="scroll-mt-24 bg-(--cream) px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-(--champagne) uppercase">
            Our coaches
          </span>

          <h2 className="mt-4 text-3xl font-bold text-(--olive-dark) sm:text-4xl">
            Train with people who know what they're doing.
          </h2>

          <p className="mt-4 leading-7 text-(--text-muted)">
            Experienced coaches who understand that good training is
            about progression, technique and consistency.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;