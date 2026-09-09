import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-(--cream) px-4 py-20 pt-24 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* contact details */}
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-(--champagne) uppercase">
              Contact
            </span>

            <h2 className="mt-4 text-3xl font-bold text-(--olive-dark) sm:text-4xl">
              Let's get you moving.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-(--text-muted)">
              Visit us, talk with our team and find the membership that fits
              your training goals.
            </p>

            {/* info items */}
            <div className="mt-10 space-y-6">
              {/* location */}
              <div className="flex gap-4">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-(--champagne)"
                />

                <div>
                  <p className="font-semibold text-(--olive-dark)">
                    Visit us
                  </p>

                  <p className="mt-1 text-sm text-(--text-muted)">
                    123 GymX, Kolkata, West Bengal
                  </p>
                </div>
              </div>

              {/* phone */}
              <div className="flex gap-4">
                <Phone
                  size={20}
                  className="mt-1 shrink-0 text-(--champagne)"
                />

                <div>
                  <p className="font-semibold text-(--olive-dark)">
                    Call us
                  </p>

                  <p className="mt-1 text-sm text-(--text-muted)">
                    +91 10101 10101
                  </p>
                </div>
              </div>

              {/* email */}
              <div className="flex gap-4">
                <Mail
                  size={20}
                  className="mt-1 shrink-0 text-(--champagne)"
                />

                <div>
                  <p className="font-semibold text-(--olive-dark)">
                    Email us
                  </p>

                  <p className="mt-1 text-sm text-(--text-muted)">
                    abcdefgh@mail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* contact form */}
          <div className="card border-none bg-(--olive-dark) text-(--cream) shadow-xl">
            <div className="card-body p-6 sm:p-8">
              <h3 className="card-title font-display text-2xl text-(--cream)">
                Send us a message
              </h3>

              <div className="mt-5 space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered h-12 w-full border-white/10 bg-white/5 text-(--cream) placeholder:text-(--cream)/35 focus:border-(--champagne) focus:outline-none"
                />

                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered h-12 w-full border-white/10 bg-white/5 text-(--cream) placeholder:text-(--cream)/35 focus:border-(--champagne) focus:outline-none"
                />

                <textarea
                  placeholder="How can we help?"
                  className="textarea textarea-bordered min-h-36 w-full resize-none border-white/10 bg-white/5 text-(--cream) placeholder:text-(--cream)/35 focus:border-(--champagne) focus:outline-none"
                />

                <button
                  type="button"
                  className="btn h-12 w-full rounded-full border-none bg-(--cream) text-(--olive-dark) shadow-none hover:bg-(--cream-dark)"
                >
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact