import {
  Mail,
  MapPin,
  Clock3,
  Globe,
  Send,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100">

      {/* Hero */}

      <section className="hero py-20 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">

        <div className="hero-content text-center">

          <div>

            <div className="badge badge-primary badge-lg mb-4">
              Contact DevLinks
            </div>

            <h1 className="text-5xl md:text-6xl font-bold">
              We'd Love to
              <span className="text-primary"> Hear From You</span>
            </h1>

            <p className="py-6 text-lg max-w-3xl text-base-content/70 mx-auto">
              Whether you have a question, feedback, partnership inquiry,
              or need technical support, our team is always happy to help.
            </p>

          </div>

        </div>

      </section>

      {/* Main Section */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left */}

          <div>

            <h2 className="text-4xl font-bold mb-10">
              Get in Touch
            </h2>

            <div className="space-y-8">

              <div className="flex gap-5 p-5 rounded-2xl bg-base-200 hover:shadow-xl transition-all">

                <div className="w-14 h-14 rounded-full bg-primary text-primary-content flex items-center justify-center">
                  <Mail size={26} />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Email Support
                  </h3>

                  <p className="text-base-content/70">
                    support@devlinks.in
                  </p>
                </div>

              </div>

              <div className="flex gap-5 p-5 rounded-2xl bg-base-200 hover:shadow-xl transition-all">

                <div className="w-14 h-14 rounded-full bg-secondary text-secondary-content flex items-center justify-center">
                  <Globe size={26} />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Website
                  </h3>

                  <p className="text-base-content/70">
                    https://devlinks.in
                  </p>
                </div>

              </div>

              <div className="flex gap-5 p-5 rounded-2xl bg-base-200 hover:shadow-xl transition-all">

                <div className="w-14 h-14 rounded-full bg-accent text-accent-content flex items-center justify-center">
                  <Clock3 size={26} />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Support Hours
                  </h3>

                  <p className="text-base-content/70">
                    Monday - Friday
                  </p>

                  <p className="text-base-content/70">
                    9:00 AM - 6:00 PM (IST)
                  </p>

                </div>

              </div>

              <div className="flex gap-5 p-5 rounded-2xl bg-base-200 hover:shadow-xl transition-all">

                <div className="w-14 h-14 rounded-full bg-success text-success-content flex items-center justify-center">
                  <MapPin size={26} />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Location
                  </h3>

                  <p className="text-base-content/70">
                    India
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="card bg-base-200 shadow-2xl">

            <div className="card-body">

              <div className="flex items-center gap-3 mb-5">

                <MessageCircle
                  className="text-primary"
                  size={30}
                />

                <h2 className="card-title text-3xl">
                  Send us a Message
                </h2>

              </div>

              <div className="form-control mb-5">

                <label className="label">
                  <span className="label-text">
                    Full Name
                  </span>
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full"
                />

              </div>

              <div className="form-control mb-5">

                <label className="label">
                  <span className="label-text">
                    Email Address
                  </span>
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="input input-bordered w-full"
                />

              </div>

              <div className="form-control mb-5">

                <label className="label">
                  <span className="label-text">
                    Subject
                  </span>
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="input input-bordered w-full"
                />

              </div>

              <div className="form-control mb-6">

                <label className="label">
                  <span className="label-text">
                    Message
                  </span>
                </label>

                <textarea
                  rows="6"
                  className="textarea textarea-bordered"
                  placeholder="Write your message..."
                ></textarea>

              </div>

              <button className="btn btn-primary btn-lg w-full gap-2">

                <Send size={18} />

                Send Message

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Bottom CTA */}

      <section className="pb-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-3xl bg-gradient-to-r from-primary to-secondary text-white p-12 text-center shadow-2xl">

            <h2 className="text-4xl font-bold">
              Building the Future of Developer Networking
            </h2>

            <p className="mt-5 text-lg opacity-90 max-w-3xl mx-auto">
              At DevLinks, we're committed to creating a trusted community
              where developers connect, collaborate, and grow together.
              Your feedback helps us make the platform even better.
            </p>

            <button className="btn btn-neutral btn-lg mt-8">
              Explore DevLinks
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;