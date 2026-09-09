import { reviews } from "../../data/reviews";
import ReviewCard from "../reviews/ReviewCard";

function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 overflow-hidden bg-(--cream-light) px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-(--champagne) uppercase">
            Member stories
          </span>

          <h2 className="mt-4 text-3xl font-bold text-(--olive-dark) sm:text-4xl">
            Results speak louder.
          </h2>

          <p className="mt-4 leading-7 text-(--text-muted)">
            Hear from members who made training part of their lifestyle.
          </p>
        </div>
        {/* reviews carousel */}
        <div className="carousel carousel-center mt-12 w-full gap-5 px-1 pb-4 sm:mt-14">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="carousel-item w-[88%] sm:w-[70%] md:w-[47%] lg:w-[31.5%]"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
        {/* mobile indicators */}
        <div className="mt-4 flex justify-center gap-2 lg:hidden">
          {reviews.map((review, index) => (
            <a
              key={review.id}
              href={`#review-${review.id}`}
              className={`h-1.5 rounded-full transition-all ${
                index === 0
                  ? "w-8 bg-(--olive-dark)"
                  : "w-2 bg-(--border-light)"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;