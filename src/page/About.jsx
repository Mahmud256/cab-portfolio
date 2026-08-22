import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-300">
            About Our Company
          </p>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            About Community Action
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-green-100 sm:text-lg">
            Community Action In Bangladesh PLC একটি আধুনিক ও
            সম্ভাবনাময় প্রতিষ্ঠান, যার লক্ষ্য স্বচ্ছতা, দায়িত্বশীলতা
            এবং দীর্ঘমেয়াদি ব্যবসায়িক কার্যক্রমের মাধ্যমে একটি
            শক্তিশালী আর্থিক ভবিষ্যৎ গড়ে তোলা।
          </p>

        </div>
      </section>


      {/* ================= COMPANY OVERVIEW ================= */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-green-100">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80"
                alt="Business meeting"
                className="h-[450px] w-full object-cover"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-6 shadow-xl sm:right-6">
              <p className="text-3xl font-bold text-green-700">
                10+
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Years of Experience
              </p>
            </div>
          </div>


          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Building Opportunities,
              <span className="block text-green-700">
                Creating a Better Future
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Community Action In Bangladesh PLC একটি ব্যবসায়িক
              প্রতিষ্ঠান হিসেবে বিভিন্ন সম্ভাবনাময় কার্যক্রম ও
              প্রকল্পের মাধ্যমে দীর্ঘমেয়াদি মূল্য তৈরি করার লক্ষ্যে
              কাজ করছে।
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              আমাদের লক্ষ্য হলো একটি স্বচ্ছ, দায়িত্বশীল এবং
              পেশাদার পরিবেশ তৈরি করা, যেখানে সদস্য, বিনিয়োগকারী
              এবং সংশ্লিষ্ট সকল পক্ষ কোম্পানির কার্যক্রম সম্পর্কে
              পরিষ্কার ধারণা পেতে পারেন।
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>


      {/* ================= VISION & MISSION ================= */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Our Direction
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Vision & Mission
            </h2>

            <p className="mt-4 text-gray-600">
              আমাদের ভবিষ্যৎ পরিকল্পনা ও কার্যক্রমের মূল ভিত্তি
              হলো দায়িত্বশীলতা, স্বচ্ছতা এবং টেকসই উন্নয়ন।
            </p>
          </div>


          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* Vision */}
            <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl">
                👁️
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                বাংলাদেশে একটি বিশ্বস্ত, আধুনিক ও দায়িত্বশীল
                ব্যবসায়িক প্রতিষ্ঠান হিসেবে প্রতিষ্ঠিত হওয়া এবং
                দীর্ঘমেয়াদে টেকসই অর্থনৈতিক ও সামাজিক মূল্য তৈরি করা।
              </p>

            </div>


            {/* Mission */}
            <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl">
                🎯
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                স্বচ্ছ ব্যবসায়িক কার্যক্রম, দক্ষ ব্যবস্থাপনা,
                দায়িত্বশীল বিনিয়োগ এবং সম্ভাবনাময় প্রকল্পের মাধ্যমে
                সদস্য ও সংশ্লিষ্ট পক্ষের জন্য দীর্ঘমেয়াদি মূল্য তৈরি করা।
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CORE VALUES ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              What We Believe
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Value 1 */}
            <div className="rounded-2xl border border-gray-100 p-7 text-center transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                🔒
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Trust
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                আমাদের কার্যক্রমে বিশ্বাস ও নির্ভরযোগ্যতাকে
                সর্বোচ্চ গুরুত্ব দেওয়া।
              </p>

            </div>


            {/* Value 2 */}
            <div className="rounded-2xl border border-gray-100 p-7 text-center transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                👁️
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Transparency
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                তথ্য ও কার্যক্রমে স্বচ্ছতা এবং জবাবদিহিতা নিশ্চিত করা।
              </p>

            </div>


            {/* Value 3 */}
            <div className="rounded-2xl border border-gray-100 p-7 text-center transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                🚀
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Growth
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                টেকসই উন্নয়ন ও দীর্ঘমেয়াদি প্রবৃদ্ধির দিকে এগিয়ে যাওয়া।
              </p>

            </div>


            {/* Value 4 */}
            <div className="rounded-2xl border border-gray-100 p-7 text-center transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                🤝
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Responsibility
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                সদস্য, বিনিয়োগকারী ও সমাজের প্রতি দায়িত্বশীল থাকা।
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= COMPANY HISTORY ================= */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Our Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Company History
            </h2>
          </div>


          <div className="relative mt-12 border-l-2 border-green-200 pl-8">

            {/* Timeline 1 */}
            <div className="relative pb-10">
              <span className="absolute -left-[41px] flex h-5 w-5 rounded-full border-4 border-white bg-green-600" />

              <p className="text-sm font-semibold text-green-600">
                2020
              </p>

              <h3 className="mt-2 text-xl font-bold text-gray-900">
                Company Established
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                কোম্পানির যাত্রা শুরু হয় একটি সুসংগঠিত ও
                দীর্ঘমেয়াদি ব্যবসায়িক লক্ষ্য নিয়ে।
              </p>
            </div>


            {/* Timeline 2 */}
            <div className="relative pb-10">
              <span className="absolute -left-[41px] flex h-5 w-5 rounded-full border-4 border-white bg-green-600" />

              <p className="text-sm font-semibold text-green-600">
                2022
              </p>

              <h3 className="mt-2 text-xl font-bold text-gray-900">
                Business Expansion
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                নতুন ব্যবসায়িক কার্যক্রম ও সম্ভাবনাময় প্রকল্পের
                মাধ্যমে কার্যক্রম সম্প্রসারণ করা হয়।
              </p>
            </div>


            {/* Timeline 3 */}
            <div className="relative">
              <span className="absolute -left-[41px] flex h-5 w-5 rounded-full border-4 border-white bg-green-600" />

              <p className="text-sm font-semibold text-green-600">
                Present
              </p>

              <h3 className="mt-2 text-xl font-bold text-gray-900">
                Building the Future
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                আধুনিক প্রযুক্তি, দক্ষ ব্যবস্থাপনা এবং
                টেকসই ব্যবসায়িক কার্যক্রমের মাধ্যমে ভবিষ্যতের
                জন্য আরও শক্তিশালী প্রতিষ্ঠান গড়ে তোলার লক্ষ্য।
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-green-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's Build a Better Future Together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-100">
            আমাদের কার্যক্রম ও বিনিয়োগের সুযোগ সম্পর্কে আরও জানতে
            আজই আমাদের সাথে যোগাযোগ করুন।
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block rounded-lg bg-white px-7 py-3.5 font-semibold text-green-800 transition hover:bg-green-50"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
};

export default About;