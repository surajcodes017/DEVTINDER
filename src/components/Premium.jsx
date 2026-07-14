import axios from "axios";

import {
  Crown,
  Gem,
  Rocket,
  Check,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  X,
  Zap,
  BrainCircuit,
} from "lucide-react";
import { BASE_URL } from "../utils/constants";

const plans = [
  {
    id: "Explorer",
    name: "Explorer 🚀",
    icon: Rocket,
    price: "199",
    color: "from-slate-500 to-slate-700",
    button: "btn-outline",
    popular: false,

    features: [
      "Unlimited Connection Requests",
      "Priority Profile Visibility",
      "Verified Silver Badge",
      "See Profile Visitors",
      "Email Notifications",
      "Standard Support",
    ],
  },

  {
    id: "Pro",
    name: "Pro ⭐",
    icon: Crown,
    price: "499",
    color: "from-yellow-400 via-amber-500 to-orange-500",
    button: "btn-primary",
    popular: true,

    features: [
      "Everything in Silver",
      "AI Resume Review",
      "AI Interview Feedback",
      "Unlimited Profile Boosts",
      "Advanced Search Filters",
      "Priority Support",
    ],
  },

  {
    id: "Elite",
    name: "Elite AI 😎",
    icon: Gem,
    price: "999",
    color: "from-cyan-400 via-sky-500 to-indigo-600",
    button: "btn-secondary",
    popular: false,

    features: [
      "Everything in Gold",
      "AI Career Mentor",
      "Unlimited Mock Interviews",
      "Exclusive Community",
      "Early Feature Access",
      "Dedicated Support",
    ],
  },
];

const Premium = () => {

    const handleBuyClick = async(type) => {
        const order = await axios.post(BASE_URL+"/payment/create",
            {
                membershipType: type,
            },
            {
                withCredentials: true
            }  
        )
        const {amount,keyId,currency,orderId,notes,} = order.data;

        const options = {
        key: keyId, // Replace with your Razorpay key_id
        amount, // Amount is in currency subunits.
        currency,
        name: 'Dev Links',
        description: 'Connect to the devlopers',
        order_id: orderId, // This is the order_id created in the backend
        // callback_url: 'http://localhost:3000/payment-success', // Your success URL
        prefill: {
          name: notes.firstName+" "+notes.lastName,
          email: notes.emailId,
          contact: '8520871309'
        },
        theme: {
          color: '#F37254'
        },
      };


        const rzp = new window.Razorpay(options);
        rzp.open();


    };


    //It should open razorpay dailog box
    


  return (
    <div className="min-h-screen bg-[#09090B] text-white relative overflow-hidden">
        
      {/* Aurora */}

      <div className="absolute -top-52 -left-40 w-[650px] h-[650px] rounded-full bg-violet-700/20 blur-[150px]" />

      <div className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] rounded-full bg-cyan-500/20 blur-[170px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute top-32 left-16 w-40 h-40 rounded-full bg-violet-500/10 blur-3xl animate-pulse"></div>

      <div
        className="absolute top-[40%] right-24 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl"
        style={{
          animation: "floatY 8s ease-in-out infinite",
        }}
      ></div>

      <div
        className="absolute bottom-32 left-[30%] w-56 h-56 rounded-full bg-indigo-500/10 blur-3xl"
        style={{
          animation: "floatX 10s ease-in-out infinite",
        }}
      ></div>

      <div className="relative z-10">

        {/* Hero */}

        <section className="pt-24 pb-16 text-center">

          <div className="badge badge-primary badge-lg mb-5">
            DevLinks Premium
          </div>

          <h1 className="text-6xl font-extrabold leading-tight">

            Invest In Your

            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">

              {" "}
              Developer Career

            </span>

          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-400 leading-8">

            Unlock powerful networking tools, AI career features,
            interview preparation, profile boosts, and much more.

          </p>

        </section>

        {/* Cards */}

        <section className="max-w-7xl mx-auto px-6 pb-24">

          <div className="grid lg:grid-cols-3 gap-10">

            {plans.map((plan) => {

              const Icon = plan.icon;

              return (

                <div
                  key={plan.name}
                  className={`relative rounded-3xl
                  border border-white/10
                  backdrop-blur-xl
                  bg-white/5
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-4
                  hover:shadow-[0_0_60px_rgba(139,92,246,.35)]
                  ${
                    plan.popular
                      ? "scale-105 border-yellow-400/40"
                      : ""
                  }`}
                >

                  {plan.popular && (

                    <div
                      className="
                      absolute
                      -top-4
                      left-1/2
                      -translate-x-1/2
                      badge
                      badge-warning
                      badge-lg
                      px-5
                      py-4"
                    >
                      ⭐ Most Popular
                    </div>

                  )}

                  <div
                    className={`w-20 h-20 rounded-3xl
                    bg-gradient-to-br ${plan.color}
                    flex items-center justify-center mb-8`}
                  >
                    <Icon size={38} />
                  </div>

                  <h2 className="text-3xl font-bold">

                    {plan.name}

                  </h2>

                  <div className="mt-8 flex items-end">

                    <span className="text-6xl font-extrabold">

                      ₹{plan.price}

                    </span>

                    <span className="ml-3 mb-2 text-gray-400">

                      / month

                    </span>

                  </div>

                  <div className="divider divider-neutral my-8"></div>

                  <div className="space-y-5">

                    {plan.features.map((feature) => (

                      <div
                        key={feature}
                        className="flex items-center gap-4"
                      >

                        <Check
                          className="text-green-400"
                          size={20}
                        />

                        <span className="text-gray-300">

                          {feature}

                        </span>

                      </div>

                    ))}

                  </div>

                  <button
                    className={`btn ${plan.button} w-full mt-10 text-lg`}
                    onClick={() => handleBuyClick(plan.id)}
                  >

                    Upgrade Now

                    <ArrowRight size={18} />

                  </button>

                </div>

              );
            })}

          </div>

        </section>


        {/* ================= Feature Comparison ================= */}

<section className="max-w-7xl mx-auto px-6 pb-28">

  <div className="text-center mb-14">

    <div className="badge badge-secondary badge-lg mb-5">
      Compare Plans
    </div>

    <h2 className="text-5xl font-bold">
      Everything You Need To
      <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
        {" "}
        Grow Faster
      </span>
    </h2>

    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
      Compare all Premium plans and choose the one that best fits your
      developer journey.
    </p>

  </div>

  <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

    <table className="table table-lg">

      <thead>

        <tr className="text-lg">

          <th>Features</th>

          <th className="text-center text-slate-300">
            Silver
          </th>

          <th className="text-center text-yellow-400">
            Gold ⭐
          </th>

          <th className="text-center text-cyan-400">
            Diamond
          </th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td className="font-semibold">
            Unlimited Connection Requests
          </td>

          <td className="text-center">
            <Check className="text-green-400 mx-auto"/>
          </td>

          <td className="text-center">
            <Check className="text-green-400 mx-auto"/>
          </td>

          <td className="text-center">
            <Check className="text-green-400 mx-auto"/>
          </td>

        </tr>

        <tr>

          <td className="font-semibold">
            Priority Profile Visibility
          </td>

          <td className="text-center">
            <Check className="text-green-400 mx-auto"/>
          </td>

          <td className="text-center">
            <Check className="text-green-400 mx-auto"/>
          </td>

          <td className="text-center">
            <Check className="text-green-400 mx-auto"/>
          </td>

        </tr>

        <tr>

          <td className="font-semibold">
            AI Resume Review
          </td>

          <td className="text-center">
            <X className="text-red-400 mx-auto"/>
          </td>

          <td className="text-center">
            <Check className="text-green-400 mx-auto"/>
          </td>

          <td className="text-center">
            <Check className="text-green-400 mx-auto"/>
          </td>

        </tr>

        <tr>

          <td className="font-semibold">
            AI Interview Feedback
          </td>

          <td className="text-center">
            <X className="text-red-400 mx-auto"/>
          </td>

          <td className="text-center">
            <Check className="text-green-400 mx-auto"/>
          </td>

          <td className="text-center">
            <Check className="text-green-400 mx-auto"/>
          </td>

        </tr>

        <tr>

          <td className="font-semibold">
            Unlimited Profile Boost
          </td>

          <td className="text-center">
            <X className="text-red-400 mx-auto"/>
          </td>

          <td className="text-center">
            <Check className="text-green-400 mx-auto"/>
          </td>

          <td className="text-center">
            <Check className="text-green-400 mx-auto"/>
          </td>

        </tr>

        <tr>

          <td className="font-semibold">
            AI Career Mentor
          </td>

          <td className="text-center">
            <X className="text-red-400 mx-auto"/>
          </td>

          <td className="text-center">
            <X className="text-red-400 mx-auto"/>
          </td>

          <td className="text-center">
            <Check className="text-green-400 mx-auto"/>
          </td>

        </tr>

        <tr>

          <td className="font-semibold">
            Unlimited AI Mock Interviews
          </td>

          <td className="text-center">
            <X className="text-red-400 mx-auto"/>
          </td>

          <td className="text-center">
            <X className="text-red-400 mx-auto"/>
          </td>

          <td className="text-center">
            <Check className="text-green-400 mx-auto"/>
          </td>

        </tr>

        <tr>

          <td className="font-semibold">
            Dedicated Premium Support
          </td>

          <td className="text-center">
            Standard
          </td>

          <td className="text-center text-yellow-400">
            Priority
          </td>

          <td className="text-center text-cyan-400">
            24×7 VIP
          </td>

        </tr>

      </tbody>

    </table>

  </div>

</section>

<section className="max-w-7xl mx-auto px-6 pb-28">

  <div className="text-center mb-16">

    <h2 className="text-5xl font-bold">

      Why Upgrade?

    </h2>

    <p className="text-gray-400 mt-5">

      Premium helps you network smarter, prepare better,
      and grow your developer career faster.

    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    <div className="card bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition-all">

      <div className="card-body items-center text-center">

        <BrainCircuit className="text-violet-400" size={50}/>

        <h2 className="card-title">
          AI Career Tools
        </h2>

        <p>
          Resume reviews, interview feedback,
          mock interviews and career guidance.
        </p>

      </div>

    </div>

    <div className="card bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition-all">

      <div className="card-body items-center text-center">

        <Sparkles className="text-yellow-400" size={50}/>

        <h2 className="card-title">
          Profile Boost
        </h2>

        <p>
          Get discovered by more developers
          with premium visibility.
        </p>

      </div>

    </div>

    <div className="card bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition-all">

      <div className="card-body items-center text-center">

        <Zap className="text-cyan-400" size={50}/>

        <h2 className="card-title">
          Faster Networking
        </h2>

        <p>
          Unlimited requests and better matching
          help you connect faster.
        </p>

      </div>

    </div>

    <div className="card bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition-all">

      <div className="card-body items-center text-center">

        <ShieldCheck className="text-green-400" size={50}/>

        <h2 className="card-title">
          Trusted Community
        </h2>

        <p>
          Verified badges increase trust and
          improve your profile credibility.
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= Testimonials ================= */}

<section className="max-w-7xl mx-auto px-6 pb-28">

  <div className="text-center mb-16">

    <div className="badge badge-accent badge-lg mb-4">
      Loved by Developers
    </div>

    <h2 className="text-5xl font-bold">
      Trusted By
      <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
        {" "}
        Growing Developers
      </span>
    </h2>

    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
      Developers use DevLinks Premium to build meaningful connections,
      improve their careers, and unlock AI-powered features.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="card bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300">

      <div className="card-body">

        <div className="rating rating-sm mb-3">

          <input type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />
          <input type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />
          <input type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />
          <input type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />
          <input type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />

        </div>

        <p className="text-gray-300 leading-8">
          "DevLinks helped me meet amazing developers and collaborate
          on open-source projects. The AI resume review was a huge bonus."
        </p>

        <div className="mt-6">

          <h3 className="font-bold">
            Rahul Sharma
          </h3>

          <p className="text-gray-400 text-sm">
            Frontend Developer
          </p>

        </div>

      </div>

    </div>

    <div className="card bg-white/5 backdrop-blur-xl border border-yellow-400/20 hover:scale-105 transition-all duration-300">

      <div className="card-body">

        <div className="rating rating-sm mb-3">

          <input type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />
          <input type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />
          <input type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />
          <input type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />
          <input type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />

        </div>

        <p className="text-gray-300 leading-8">
          "Premium profile visibility helped me connect with experienced
          engineers. Worth every rupee."
        </p>

        <div className="mt-6">

          <h3 className="font-bold">
            Priya Verma
          </h3>

          <p className="text-gray-400 text-sm">
            Full Stack Engineer
          </p>

        </div>

      </div>

    </div>

    <div className="card bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition-all duration-300">

      <div className="card-body">

        <div className="rating rating-sm mb-3">

          <input type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />
          <input type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />
          <input type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />
          <input type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />
          <input type="radio" className="mask mask-star-2 bg-yellow-400" checked readOnly />

        </div>

        <p className="text-gray-300 leading-8">
          "The AI interview feedback helped me prepare better for
          technical interviews."
        </p>

        <div className="mt-6">

          <h3 className="font-bold">
            Arjun Patel
          </h3>

          <p className="text-gray-400 text-sm">
            Software Engineer
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= FAQ ================= */}

<section className="max-w-5xl mx-auto px-6 pb-28">

  <div className="text-center mb-14">

    <h2 className="text-5xl font-bold">
      Frequently Asked Questions
    </h2>

    <p className="text-gray-400 mt-6">
      Everything you need to know before upgrading.
    </p>

  </div>

  <div className="space-y-5">

    <div className="collapse collapse-plus bg-white/5 border border-white/10">

      <input type="checkbox" defaultChecked />

      <div className="collapse-title text-xl font-semibold">
        Can I cancel my subscription anytime?
      </div>

      <div className="collapse-content">

        <p className="text-gray-400">
          Yes. You can cancel your subscription anytime.
          Premium benefits remain active until your billing period ends.
        </p>

      </div>

    </div>

    <div className="collapse collapse-plus bg-white/5 border border-white/10">

      <input type="checkbox"/>

      <div className="collapse-title text-xl font-semibold">
        Which plan is most popular?
      </div>

      <div className="collapse-content">

        <p className="text-gray-400">
          Gold is our most popular plan because it offers AI tools,
          profile boosts, and interview preparation.
        </p>

      </div>

    </div>

    <div className="collapse collapse-plus bg-white/5 border border-white/10">

      <input type="checkbox"/>

      <div className="collapse-title text-xl font-semibold">
        Is payment secure?
      </div>

      <div className="collapse-content">

        <p className="text-gray-400">
          Yes. All payments are securely processed using Razorpay.
        </p>

      </div>

    </div>

    <div className="collapse collapse-plus bg-white/5 border border-white/10">

      <input type="checkbox"/>

      <div className="collapse-title text-xl font-semibold">
        Will more Premium features be added?
      </div>

      <div className="collapse-content">

        <p className="text-gray-400">
          Absolutely. Premium members receive early access to
          future AI-powered features and platform improvements.
        </p>

      </div>

    </div>

  </div>

</section>
{/* ================= CTA ================= */}

<section className="pb-32 px-6">

  <div className="max-w-5xl mx-auto">

    <div className="rounded-[40px] bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 p-16 text-center shadow-[0_0_80px_rgba(124,58,237,.4)]">

      <h2 className="text-5xl font-bold text-white">

        Ready To Level Up Your Developer Journey?

      </h2>

      <p className="mt-8 text-xl text-white/80 max-w-3xl mx-auto">

        Join thousands of developers building meaningful
        connections, improving their careers, and unlocking
        AI-powered networking with DevLinks Premium.

      </p>

      <button
        className="
        btn
        btn-neutral
        btn-lg
        mt-12
        text-lg
        hover:scale-105
        transition-all
        duration-300
        px-10
        "
      >

        Upgrade Today 🚀

      </button>

    </div>

  </div>

</section>

      </div>
    </div>
  );
};

export default Premium;