import { Link } from "react-router-dom";

const investmentPlans = [
  {
    id: 1,
    name: "Starter Plan",
    description: "নতুন বিনিয়োগকারীদের জন্য একটি সহজ ও নমনীয় পরিকল্পনা।",
    minInvestment: "৳10,000",
    maxInvestment: "৳49,999",
    duration: "6 Months",
    profit: "According to company policy",
    features: [
      "Flexible investment option",
      "Investment tracking",
      "Regular updates",
      "Dedicated support",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Growth Plan",
    description: "মাঝারি মেয়াদের বিনিয়োগের জন্য একটি উন্নত পরিকল্পনা।",
    minInvestment: "৳50,000",
    maxInvestment: "৳2,49,999",
    duration: "12 Months",
    profit: "According to company policy",
    features: [
      "Higher investment limit",
      "Investment tracking",
      "Regular reports",
      "Priority support",
      "Project updates",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Premium Plan",
    description: "বড় বিনিয়োগের জন্য বিশেষভাবে তৈরি একটি পরিকল্পনা।",
    minInvestment: "৳2,50,000",
    maxInvestment: "৳10,00,000+",
    duration: "24 Months",
    profit: "According to company policy",
    features: [
      "Premium investment option",
      "Detailed investment reports",
      "Priority support",
      "Project insights",
      "Dedicated assistance",
    ],
    popular: false,
  },
];

const InvestmentPlans = () => {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
            Investment Opportunities
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Investment Plans
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-green-100 sm:text-lg">
            আপনার প্রয়োজন ও বিনিয়োগের সক্ষমতা অনুযায়ী উপযুক্ত
            Investment Plan নির্বাচন করুন এবং আমাদের বিভিন্ন
            ব্যবসায়িক সুযোগ সম্পর্কে বিস্তারিত জানুন।
          </p>

        </div>
      </section>


      {/* ================= PLANS ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Choose Your Plan
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Find the Right Investment Plan
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              বিভিন্ন investment range এবং duration অনুযায়ী
              আপনার জন্য উপযুক্ত পরিকল্পনা নির্বাচন করুন।
            </p>

          </div>


          {/* Plan Cards */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3">

            {investmentPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  plan.popular
                    ? "border-green-600 shadow-lg"
                    : "border-gray-200"
                }`}
              >

                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}


                {/* Plan Header */}
                <div className="text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                    💼
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>

                  <p className="mt-3 min-h-[56px] text-sm leading-6 text-gray-500">
                    {plan.description}
                  </p>

                </div>


                {/* Investment Range */}
                <div className="mt-8 rounded-2xl bg-gray-50 p-5">

                  <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <span className="text-sm text-gray-500">
                      Minimum
                    </span>

                    <span className="font-bold text-gray-900">
                      {plan.minInvestment}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm text-gray-500">
                      Maximum
                    </span>

                    <span className="font-bold text-gray-900">
                      {plan.maxInvestment}
                    </span>
                  </div>

                </div>


                {/* Duration */}
                <div className="mt-5 flex items-center justify-between rounded-xl border border-gray-100 p-4">

                  <div>
                    <p className="text-xs text-gray-500">
                      Duration
                    </p>

                    <p className="mt-1 font-semibold text-gray-900">
                      {plan.duration}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-500">
                      Profit
                    </p>

                    <p className="mt-1 text-sm font-semibold text-green-700">
                      {plan.profit}
                    </p>
                  </div>

                </div>


                {/* Features */}
                <div className="mt-7 flex-1">

                  <h4 className="font-semibold text-gray-900">
                    Plan Features
                  </h4>

                  <ul className="mt-4 space-y-3">

                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-700">
                          ✓
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}

                  </ul>

                </div>


                {/* Button */}
                <Link
                  to={`/investment-plans/${plan.id}`}
                  className={`mt-8 block rounded-xl px-6 py-3.5 text-center font-semibold transition ${
                    plan.popular
                      ? "bg-green-700 text-white hover:bg-green-800"
                      : "border border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                  }`}
                >
                  View Plan Details
                </Link>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              How It Works
            </h2>

          </div>


          <div className="mt-12 grid gap-8 md:grid-cols-4">

            {/* Step 1 */}
            <div className="text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
                01
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Create Account
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                প্রথমে আপনার account তৈরি করুন।
              </p>

            </div>


            {/* Step 2 */}
            <div className="text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
                02
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Complete KYC
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                প্রয়োজনীয় তথ্য ও KYC verification সম্পন্ন করুন।
              </p>

            </div>


            {/* Step 3 */}
            <div className="text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
                03
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Choose a Plan
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                আপনার জন্য উপযুক্ত investment plan নির্বাচন করুন।
              </p>

            </div>


            {/* Step 4 */}
            <div className="text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
                04
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Start Investing
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                প্রযোজ্য প্রক্রিয়া অনুসরণ করে investment শুরু করুন।
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= RISK DISCLOSURE ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 sm:p-10">

            <div className="flex flex-col gap-5 sm:flex-row">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xl">
                ⚠️
              </div>

              <div>

                <h2 className="text-2xl font-bold text-gray-900">
                  Risk Disclosure
                </h2>

                <p className="mt-4 leading-7 text-gray-700">
                  যেকোনো বিনিয়োগের সঙ্গে ঝুঁকি থাকতে পারে। কোনো
                  নির্দিষ্ট মুনাফা বা রিটার্ন নিশ্চিত হিসেবে বিবেচনা
                  করা উচিত নয়। বিনিয়োগের পূর্বে সংশ্লিষ্ট পরিকল্পনার
                  শর্তাবলী, ঝুঁকি এবং প্রযোজ্য তথ্য ভালোভাবে যাচাই করুন।
                </p>

                <p className="mt-3 leading-7 text-gray-700">
                  Investment amount, duration, return/profit information
                  এবং অন্যান্য শর্ত কোম্পানির অনুমোদিত ও প্রকৃত
                  তথ্য অনুযায়ী প্রদর্শন করতে হবে।
                </p>

                <Link
                  to="/risk-disclosure"
                  className="mt-5 inline-block font-semibold text-green-700 hover:text-green-800"
                >
                  Read Full Risk Disclosure →
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-green-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Explore Your Options?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-100">
            আপনার প্রয়োজন অনুযায়ী investment plan সম্পর্কে আরও
            বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/contact"
              className="rounded-xl bg-white px-7 py-3.5 font-semibold text-green-800 transition hover:bg-green-50"
            >
              Contact Us
            </Link>

            <Link
              to="/faq"
              className="rounded-xl border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              View FAQ
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default InvestmentPlans;