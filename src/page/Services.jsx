import { Link } from "react-router-dom";

const services = [
  {
    icon: "📊",
    title: "Investment Services",
    description:
      "বিভিন্ন ব্যবসায়িক ও প্রকল্পভিত্তিক বিনিয়োগের সুযোগ সম্পর্কে তথ্য প্রদান এবং বিনিয়োগ ব্যবস্থাপনায় সহায়তা।",
  },
  {
    icon: "💼",
    title: "Business Activities",
    description:
      "বিভিন্ন সম্ভাবনাময় ব্যবসায়িক কার্যক্রম ও প্রকল্পের মাধ্যমে দীর্ঘমেয়াদি মূল্য তৈরির উদ্যোগ।",
  },
  {
    icon: "🤝",
    title: "Member Benefits",
    description:
      "সদস্যদের জন্য প্রয়োজনীয় তথ্য, সাপোর্ট, আপডেট এবং প্রযোজ্য সুবিধা প্রদান।",
  },
  {
    icon: "📁",
    title: "Project Management",
    description:
      "চলমান ও সম্পন্ন প্রকল্পের তথ্য, অগ্রগতি এবং সংশ্লিষ্ট কার্যক্রম পর্যবেক্ষণে সহায়তা।",
  },
  {
    icon: "🔐",
    title: "KYC Verification",
    description:
      "প্রযোজ্য নিয়ম অনুযায়ী সদস্য ও বিনিয়োগকারীদের পরিচয় যাচাইয়ের জন্য KYC প্রক্রিয়া পরিচালনা।",
  },
  {
    icon: "📈",
    title: "Investment Tracking",
    description:
      "বিনিয়োগের তথ্য, স্ট্যাটাস এবং সংশ্লিষ্ট রেকর্ড সহজে পর্যবেক্ষণের সুবিধা।",
  },
];

const businessActivities = [
  {
    number: "01",
    title: "Investment & Finance",
    description:
      "কোম্পানির অনুমোদিত ব্যবসায়িক কার্যক্রম ও প্রকল্পের সঙ্গে সামঞ্জস্য রেখে বিনিয়োগ ব্যবস্থাপনা।",
  },
  {
    number: "02",
    title: "Project Development",
    description:
      "সম্ভাবনাময় প্রকল্প শনাক্তকরণ, পরিকল্পনা এবং প্রয়োজন অনুযায়ী প্রকল্প বাস্তবায়নে কাজ করা।",
  },
  {
    number: "03",
    title: "Business Development",
    description:
      "নতুন ব্যবসায়িক সুযোগ ও সম্ভাবনাময় খাত নিয়ে কাজ করে প্রতিষ্ঠানের দীর্ঘমেয়াদি উন্নয়ন নিশ্চিত করার চেষ্টা।",
  },
  {
    number: "04",
    title: "Member Support",
    description:
      "সদস্য ও বিনিয়োগকারীদের প্রয়োজনীয় তথ্য এবং সাপোর্ট প্রদানের জন্য একটি সংগঠিত ব্যবস্থা।",
  },
];

const Services = () => {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
            What We Do
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Products & Services
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-green-100 sm:text-lg">
            আমাদের ব্যবসায়িক কার্যক্রম, বিনিয়োগ সেবা এবং
            সদস্যদের জন্য প্রদত্ত বিভিন্ন সুবিধা সম্পর্কে জানুন।
          </p>

        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              What We Offer
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              আমাদের বিভিন্ন সেবা সদস্য ও বিনিয়োগকারীদের জন্য
              একটি সহজ, স্বচ্ছ এবং সংগঠিত অভিজ্ঞতা তৈরিতে সহায়তা করে।
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
              >

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl transition group-hover:bg-green-700 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="mt-5 inline-block text-sm font-semibold text-green-700 transition hover:text-green-900"
                >
                  Learn More →
                </Link>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= BUSINESS ACTIVITIES ================= */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left Content */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
                Our Activities
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Business Activities
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Community Action In Bangladesh PLC বিভিন্ন
                সম্ভাবনাময় ব্যবসায়িক কার্যক্রম ও প্রকল্পের মাধ্যমে
                দীর্ঘমেয়াদি ব্যবসায়িক মূল্য তৈরির লক্ষ্যে কাজ করে।
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                আমাদের কার্যক্রমের মূল লক্ষ্য হলো দায়িত্বশীল
                ব্যবস্থাপনা, সংগঠিত ব্যবসায়িক পরিকল্পনা এবং
                টেকসই উন্নয়নের মাধ্যমে প্রতিষ্ঠানের ভবিষ্যৎ
                সম্ভাবনা বৃদ্ধি করা।
              </p>

              <Link
                to="/projects"
                className="mt-7 inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Explore Projects
              </Link>

            </div>


            {/* Right Activities */}
            <div className="grid gap-5 sm:grid-cols-2">

              {businessActivities.map((activity) => (
                <div
                  key={activity.number}
                  className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <span className="text-sm font-bold text-green-600">
                    {activity.number}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-gray-900">
                    {activity.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {activity.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* ================= MEMBER BENEFITS ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Member Benefits
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Benefits for Our Members
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-gray-100 p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                📋
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Easy Information
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                প্রয়োজনীয় কোম্পানি ও প্রকল্পের তথ্য সহজে পাওয়া।
              </p>
            </div>


            <div className="rounded-2xl border border-gray-100 p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                🔔
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Regular Updates
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                গুরুত্বপূর্ণ খবর, নোটিশ ও প্রকল্পের আপডেট পাওয়া।
              </p>
            </div>


            <div className="rounded-2xl border border-gray-100 p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                💬
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Support
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                প্রয়োজন অনুযায়ী সদস্য ও বিনিয়োগকারীদের সহায়তা।
              </p>
            </div>


            <div className="rounded-2xl border border-gray-100 p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                📊
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Tracking
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                বিনিয়োগ ও সংশ্লিষ্ট তথ্য পর্যবেক্ষণের সুবিধা।
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= KYC ================= */}
      <section className="bg-green-950 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
              KYC Verification
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Know Your Customer
            </h2>

            <p className="mt-5 leading-8 text-green-100">
              KYC verification একটি গুরুত্বপূর্ণ প্রক্রিয়া, যার মাধ্যমে
              সদস্য বা বিনিয়োগকারীর পরিচয় যাচাই করা হয়। প্রযোজ্য
              নিয়ম ও কোম্পানির নীতিমালা অনুযায়ী প্রয়োজনীয় তথ্য ও
              ডকুমেন্ট সংগ্রহ করা হতে পারে।
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-green-800 transition hover:bg-green-50"
            >
              Get Support
            </Link>

          </div>


          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm">

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500/20 text-green-300">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Identity Verification
                  </h3>

                  <p className="text-sm text-green-200">
                    প্রয়োজনীয় পরিচয় তথ্য যাচাই
                  </p>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500/20 text-green-300">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Document Verification
                  </h3>

                  <p className="text-sm text-green-200">
                    প্রয়োজনীয় ডকুমেন্ট যাচাই
                  </p>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500/20 text-green-300">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Account Verification
                  </h3>

                  <p className="text-sm text-green-200">
                    অ্যাকাউন্ট তথ্য যাচাই
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Get Started
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Want to Know More?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            আমাদের ব্যবসায়িক কার্যক্রম, সেবা ও প্রকল্প সম্পর্কে
            বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/contact"
              className="rounded-xl bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800"
            >
              Contact Us
            </Link>

            <Link
              to="/projects"
              className="rounded-xl border border-green-700 px-7 py-3.5 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
            >
              View Projects
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Services;