import {
  ShieldCheck,
  Database,
  Lock,
  Eye,
  UserCheck,
  Mail,
} from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "July 2026";

  return (
    <div className="min-h-screen bg-base-100">

      {/* Hero */}

      <section className="hero py-20 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">

        <div className="hero-content text-center max-w-5xl">

          <div>

            <div className="badge badge-primary badge-lg mb-5">
              Privacy Policy
            </div>

            <h1 className="text-5xl md:text-6xl font-bold">
              Your Privacy
              <span className="text-primary"> Matters</span>
            </h1>

            <p className="py-6 text-lg text-base-content/70 max-w-3xl mx-auto">
              At DevLinks, we are committed to protecting your personal
              information and being transparent about how we collect,
              use, and safeguard your data.
            </p>

            <div className="badge badge-outline badge-lg">
              Last Updated: {lastUpdated}
            </div>

          </div>

        </div>

      </section>

      {/* Highlights */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="card bg-base-200 shadow-lg">

            <div className="card-body items-center text-center">

              <ShieldCheck
                size={42}
                className="text-primary"
              />

              <h2 className="card-title">
                Secure
              </h2>

              <p>
                Your personal information is handled securely.
              </p>

            </div>

          </div>

          <div className="card bg-base-200 shadow-lg">

            <div className="card-body items-center text-center">

              <Lock
                size={42}
                className="text-secondary"
              />

              <h2 className="card-title">
                Protected
              </h2>

              <p>
                Industry-standard security measures help protect your data.
              </p>

            </div>

          </div>

          <div className="card bg-base-200 shadow-lg">

            <div className="card-body items-center text-center">

              <Eye
                size={42}
                className="text-accent"
              />

              <h2 className="card-title">
                Transparent
              </h2>

              <p>
                We clearly explain what information we collect and why.
              </p>

            </div>

          </div>

          <div className="card bg-base-200 shadow-lg">

            <div className="card-body items-center text-center">

              <UserCheck
                size={42}
                className="text-success"
              />

              <h2 className="card-title">
                Your Control
              </h2>

              <p>
                You can request updates or deletion of your personal data.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Policy */}

      <section className="max-w-5xl mx-auto px-6 pb-20">

        <div className="space-y-8">

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" defaultChecked />

            <div className="collapse-title text-xl font-semibold">
              1. Information We Collect
            </div>

            <div className="collapse-content">

              <ul className="list-disc ml-6 space-y-2">

                <li>Name and profile information.</li>

                <li>Email address used for account creation.</li>

                <li>Skills, interests, bio and profile details you provide.</li>

                <li>Connection requests and interactions within DevLinks.</li>

              </ul>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              2. How We Use Your Information
            </div>

            <div className="collapse-content">

              <ul className="list-disc ml-6 space-y-2">

                <li>To provide and improve DevLinks services.</li>

                <li>To help developers connect with each other.</li>

                <li>To send important account notifications.</li>

                <li>To provide customer support.</li>

                <li>To maintain platform security.</li>

              </ul>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              3. Data Security
            </div>

            <div className="collapse-content">

              <p>
                We use reasonable technical and organizational measures to
                protect user information from unauthorized access,
                disclosure or misuse.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              4. Sharing of Information
            </div>

            <div className="collapse-content">

              <p>
                DevLinks does not sell your personal information.
                We may share limited information with trusted service
                providers when necessary to operate the platform,
                process payments, or comply with applicable laws.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              5. Cookies
            </div>

            <div className="collapse-content">

              <p>
                DevLinks may use cookies and similar technologies to
                improve user experience, remember preferences,
                and enhance security.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              6. Your Rights
            </div>

            <div className="collapse-content">

              <ul className="list-disc ml-6 space-y-2">

                <li>Access your personal information.</li>

                <li>Request corrections to inaccurate information.</li>

                <li>Request deletion of your account where applicable.</li>

                <li>Contact us regarding privacy concerns.</li>

              </ul>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              7. Contact Us
            </div>

            <div className="collapse-content">

              <div className="flex items-center gap-3">

                <Mail className="text-primary" />

                <span>support@devlinks.in</span>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default PrivacyPolicy;