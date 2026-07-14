import {
  FileText,
  ShieldCheck,
  Scale,
  AlertTriangle,
  Ban,
  Mail,
} from "lucide-react";

const TermsAndConditions = () => {

  const lastUpdated = "July 2026";

  return (
    <div className="min-h-screen bg-base-100">

      {/* Hero */}

      <section className="hero py-20 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">

        <div className="hero-content text-center max-w-5xl">

          <div>

            <div className="badge badge-primary badge-lg mb-5">
              Terms & Conditions
            </div>

            <h1 className="text-5xl md:text-6xl font-bold">
              Terms of
              <span className="text-primary"> Use</span>
            </h1>

            <p className="py-6 text-lg text-base-content/70 max-w-3xl mx-auto">
              These Terms & Conditions govern your use of DevLinks.
              By creating an account or using our platform, you agree
              to these terms.
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

              <FileText
                className="text-primary"
                size={42}
              />

              <h2 className="card-title">
                Clear Terms
              </h2>

              <p>
                Easy-to-understand rules for using DevLinks.
              </p>

            </div>
          </div>

          <div className="card bg-base-200 shadow-lg">
            <div className="card-body items-center text-center">

              <ShieldCheck
                className="text-success"
                size={42}
              />

              <h2 className="card-title">
                Safe Community
              </h2>

              <p>
                Help us maintain a respectful and secure platform.
              </p>

            </div>
          </div>

          <div className="card bg-base-200 shadow-lg">
            <div className="card-body items-center text-center">

              <Scale
                className="text-secondary"
                size={42}
              />

              <h2 className="card-title">
                Fair Usage
              </h2>

              <p>
                Use DevLinks responsibly and ethically.
              </p>

            </div>
          </div>

          <div className="card bg-base-200 shadow-lg">
            <div className="card-body items-center text-center">

              <AlertTriangle
                className="text-warning"
                size={42}
              />

              <h2 className="card-title">
                Policy Compliance
              </h2>

              <p>
                Violations may lead to account suspension.
              </p>

            </div>
          </div>

        </div>

      </section>

      {/* Terms */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="space-y-6">

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" defaultChecked />

            <div className="collapse-title text-xl font-semibold">
              1. Acceptance of Terms
            </div>

            <div className="collapse-content">

              <p>
                By accessing or using DevLinks, you agree to comply with
                these Terms & Conditions. If you do not agree with any
                part of these terms, please discontinue using the platform.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              2. User Accounts
            </div>

            <div className="collapse-content">

              <ul className="list-disc ml-6 space-y-2">

                <li>You are responsible for maintaining your account credentials.</li>

                <li>Provide accurate profile information.</li>

                <li>You are responsible for all activity under your account.</li>

              </ul>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              3. Acceptable Use
            </div>

            <div className="collapse-content">

              <ul className="list-disc ml-6 space-y-2">

                <li>No harassment, hate speech or abusive behavior.</li>

                <li>No impersonation of another individual.</li>

                <li>No illegal activities using DevLinks.</li>

                <li>No spam or unsolicited promotional content.</li>

              </ul>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              4. Connections & Content
            </div>

            <div className="collapse-content">

              <p>
                Users are responsible for the information they share,
                including profile details, connection requests, and any
                content posted on the platform.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              5. Premium Services
            </div>

            <div className="collapse-content">

              <p>
                Premium subscriptions provide additional features.
                Subscription pricing, billing, and renewal information
                will be displayed before purchase.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              6. Suspension or Termination
            </div>

            <div className="collapse-content">

              <p>
                DevLinks reserves the right to suspend or terminate
                accounts that violate these Terms, misuse the platform,
                or engage in activities harmful to other users.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              7. Limitation of Liability
            </div>

            <div className="collapse-content">

              <p>
                DevLinks is provided on an "as-is" basis. While we strive
                to maintain reliable services, we do not guarantee
                uninterrupted availability or error-free operation.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              8. Changes to Terms
            </div>

            <div className="collapse-content">

              <p>
                We may update these Terms from time to time.
                Continued use of DevLinks after updates constitutes
                acceptance of the revised Terms.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              9. Prohibited Activities
            </div>

            <div className="collapse-content">

              <div className="alert alert-warning">

                <Ban size={20} />

                <span>
                  Creating fake accounts, scraping data, distributing
                  malware, attempting unauthorized access, or abusing
                  platform functionality is strictly prohibited.
                </span>

              </div>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              10. Contact Us
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

export default TermsAndConditions;