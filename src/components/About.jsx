import {
  Users,
  Rocket,
  BrainCircuit,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">

      {/* Hero Section */}
      <div className="hero py-20 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
        <div className="hero-content text-center max-w-4xl">
          <div>
            <div className="badge badge-primary badge-lg mb-5">
              About DevLinks
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Where Developers
              <span className="text-primary"> Connect</span>,
              <br />
              Collaborate &
              <span className="text-secondary"> Grow</span>
            </h1>

            <p className="py-8 text-lg text-gray-500 max-w-3xl mx-auto">
              DevLinks is a platform built exclusively for developers to
              discover talented people, build meaningful connections,
              collaborate on projects, and grow together in their software
              engineering journey.
            </p>

            <button className="btn btn-primary btn-lg gap-2">
              Join DevLinks
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mission */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            Our Mission
          </h2>

          <p className="mt-5 text-gray-500 max-w-3xl mx-auto text-lg">
            We believe great opportunities begin with meaningful developer
            connections. DevLinks helps developers meet like-minded people,
            exchange ideas, collaborate on innovative projects, prepare for
            interviews, and build lasting professional relationships.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all">
            <div className="card-body items-center text-center">
              <Users className="text-primary" size={45} />
              <h2 className="card-title mt-3">
                Connect
              </h2>
              <p>
                Find developers with similar interests, technologies, and goals.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all">
            <div className="card-body items-center text-center">
              <Rocket className="text-secondary" size={45} />
              <h2 className="card-title mt-3">
                Collaborate
              </h2>
              <p>
                Build projects together and learn from real-world development.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all">
            <div className="card-body items-center text-center">
              <BrainCircuit className="text-accent" size={45} />
              <h2 className="card-title mt-3">
                Learn
              </h2>
              <p>
                Improve your skills by interacting with experienced developers
                and sharing knowledge.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all">
            <div className="card-body items-center text-center">
              <ShieldCheck className="text-success" size={45} />
              <h2 className="card-title mt-3">
                Trusted Community
              </h2>
              <p>
                Build authentic professional relationships in a safe and
                developer-focused community.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Why DevLinks */}

      <section className="bg-base-200 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <h2 className="text-4xl font-bold mb-8">
                Why DevLinks?
              </h2>

              <div className="space-y-6">

                <div className="flex gap-4">
                  <div className="badge badge-primary badge-lg mt-1">1</div>

                  <div>
                    <h3 className="font-semibold text-xl">
                      Developer-first platform
                    </h3>

                    <p className="text-gray-500">
                      Built specifically for software engineers, students,
                      freelancers, and tech enthusiasts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="badge badge-secondary badge-lg mt-1">2</div>

                  <div>
                    <h3 className="font-semibold text-xl">
                      Build Meaningful Connections
                    </h3>

                    <p className="text-gray-500">
                      Discover people based on skills, interests, and
                      technologies—not random profiles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="badge badge-accent badge-lg mt-1">3</div>

                  <div>
                    <h3 className="font-semibold text-xl">
                      Grow Together
                    </h3>

                    <p className="text-gray-500">
                      Collaborate on side projects, prepare for interviews, and
                      learn continuously with an engaged developer community.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            <div className="stats shadow bg-base-100 w-full">

              <div className="stat">
                <div className="stat-title">
                  Community
                </div>

                <div className="stat-value text-primary">
                  Growing
                </div>

                <div className="stat-desc">
                  Built for developers worldwide
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">
                  Goal
                </div>

                <div className="stat-value text-secondary">
                  Connect
                </div>

                <div className="stat-desc">
                  Learn • Build • Network
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Ready to Build Your Developer Network?
          </h2>

          <p className="text-gray-500 text-lg mt-6">
            Whether you're a student, an experienced software engineer, or
            someone beginning their coding journey, DevLinks helps you discover
            opportunities through meaningful developer connections.
          </p>

          <button className="btn btn-primary btn-lg mt-10">
            Start Connecting
          </button>

        </div>

      </section>

    </div>
  );
};

export default About;