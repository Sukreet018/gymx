import { gallery } from "../../data/gallery";

function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 overflow-hidden bg-(--cream-light) py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-(--champagne) uppercase">
            Inside the gym
          </span>

          <h2 className="mt-4 text-3xl font-bold text-(--olive-dark) sm:text-4xl">
            Picture Gallery
          </h2>

          <p className="mt-4 leading-7 text-(--text-muted)">
            See what our gym looks like.
          </p>
        </div>
      </div>

      {/* Edge-to-Edge Zero-Gap Carousel */}
      <div className="carousel carousel-center mt-12 w-full gap-0 p-0 sm:mt-14">
        {gallery.map((item) => (
          <div
            key={item.id}
            id={`slide-${item.id}`}
            className="carousel-item relative aspect-3/4 w-full shrink-0 sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <img
              src={item.image}
              alt={`Gallery image ${item.id}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

    </section>
  );
}

export default Gallery;
