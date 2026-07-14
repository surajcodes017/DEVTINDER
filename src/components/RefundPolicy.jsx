import {
  RefreshCcw,
  CreditCard,
  CalendarX2,
  Wallet,
  Mail,
  CircleCheckBig,
} from "lucide-react";

const RefundPolicy = () => {

  const lastUpdated = "July 2026";

  return (
    <div className="min-h-screen bg-base-100">

      {/* Hero */}

      <section className="hero py-20 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">

        <div className="hero-content text-center max-w-5xl">

          <div>

            <div className="badge badge-primary badge-lg mb-5">
              Refund & Cancellation Policy
            </div>

            <h1 className="text-5xl md:text-6xl font-bold">
              Refund &
              <span className="text-primary"> Cancellation</span>
            </h1>

            <p className="py-6 text-lg text-base-content/70 max-w-3xl mx-auto">
              We aim to provide a transparent subscription experience.
              Please read this policy carefully before purchasing a
              DevLinks Premium subscription.
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

              <RefreshCcw
                size={42}
                className="text-primary"
              />

              <h2 className="card-title">
                Transparent
              </h2>

              <p>
                Clear information about refunds and cancellations.
              </p>

            </div>
          </div>

          <div className="card bg-base-200 shadow-lg">
            <div className="card-body items-center text-center">

              <CreditCard
                size={42}
                className="text-secondary"
              />

              <h2 className="card-title">
                Secure Payments
              </h2>

              <p>
                All payments are processed securely through Razorpay.
              </p>

            </div>
          </div>

          <div className="card bg-base-200 shadow-lg">
            <div className="card-body items-center text-center">

              <CalendarX2
                size={42}
                className="text-warning"
              />

              <h2 className="card-title">
                Cancel Anytime
              </h2>

              <p>
                You may cancel future renewals at any time.
              </p>

            </div>
          </div>

          <div className="card bg-base-200 shadow-lg">
            <div className="card-body items-center text-center">

              <Wallet
                size={42}
                className="text-success"
              />

              <h2 className="card-title">
                Fair Policy
              </h2>

              <p>
                Refund requests are reviewed fairly and in accordance
                with this policy.
              </p>

            </div>
          </div>

        </div>

      </section>

      {/* Policy */}

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="space-y-6">

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" defaultChecked />

            <div className="collapse-title text-xl font-semibold">
              1. Premium Subscription
            </div>

            <div className="collapse-content">

              <p>
                DevLinks Premium provides access to additional features
                beyond the free version. Subscription pricing and billing
                details are displayed before payment.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              2. Cancellation Policy
            </div>

            <div className="collapse-content">

              <p>
                You may cancel your subscription at any time.
                Cancellation prevents future recurring charges.
                Your Premium benefits remain available until the
                current billing period expires.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              3. Refund Policy
            </div>

            <div className="collapse-content">

              <p>
                Subscription payments are generally non-refundable once
                the Premium features have been activated. However,
                if you believe you were charged incorrectly or
                experienced a billing issue, please contact our support
                team for review.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              4. Duplicate or Incorrect Charges
            </div>

            <div className="collapse-content">

              <p>
                If you are charged multiple times for the same
                subscription due to a technical issue, please contact us.
                After verification, eligible duplicate payments will be
                refunded.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              5. Failed Payments
            </div>

            <div className="collapse-content">

              <p>
                If your payment fails, your subscription will not be
                activated until a successful payment is received.
                No charges will apply for unsuccessful payment attempts.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              6. Processing Refunds
            </div>

            <div className="collapse-content">

              <p>
                Approved refunds are initiated to the original payment
                method. Processing time depends on your payment provider
                and bank.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              7. Changes to this Policy
            </div>

            <div className="collapse-content">

              <p>
                DevLinks reserves the right to update this Refund &
                Cancellation Policy at any time. Changes become effective
                immediately after being published on this page.
              </p>

            </div>

          </div>

          <div className="collapse collapse-arrow bg-base-200">

            <input type="checkbox" />

            <div className="collapse-title text-xl font-semibold">
              8. Contact Us
            </div>

            <div className="collapse-content">

              <div className="alert alert-info">

                <CircleCheckBig size={22} />

                <span>
                  If you have any questions regarding refunds,
                  cancellations, or billing, please contact us.
                </span>

              </div>

              <div className="flex items-center gap-3 mt-5">

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

export default RefundPolicy;