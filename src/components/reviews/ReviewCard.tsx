import { Star } from "lucide-react";
import type { Review } from "../../types/review";

interface ReviewCardProps {
  review: Review;
}

function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article
      id={`review-${review.id}`}
      className="card h-full w-full border border-(--border-light) bg-base-100 shadow-sm"
    >
      <div className="card-body p-6 sm:p-7">
        {/* user info */}
        <div className="flex items-center gap-4">
          {/* user avatar */}
          <div className="avatar">
            <div className="h-12 w-12 rounded-full ring-1 ring-(--border-light)">
              <img
                src={review.image}
                alt={review.name}
                loading="lazy"
              />
            </div>
          </div>

          {/* user details */}
          <div className="min-w-0">
            <h3 className="font-semibold text-(--olive-dark)">
              {review.name}
            </h3>

            <p className="text-sm text-(--text-muted)">
              {review.role}
            </p>
          </div>
        </div>

        {/* star rating */}
        <div className="mt-6 flex gap-1">
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star
              key={index}
              size={16}
              className="fill-(--champagne) text-(--champagne)"
            />
          ))}
        </div>

        {/* review content */}
        <p className="mt-5 flex-1 text-sm leading-7 text-(--text-muted)">
          "{review.review}"
        </p>
      </div>
    </article>
  );
}

export default ReviewCard;