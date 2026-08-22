import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    id: 1,
    category: "Account",
    question: "কিভাবে একটি অ্যাকাউন্ট খুলবো?",
    answer:
      "অ্যাকাউন্ট খোলার জন্য আমাদের registration process সম্পন্ন করতে হবে। প্রয়োজনীয় ব্যক্তিগত তথ্য প্রদান এবং KYC verification সম্পন্ন হওয়ার পর আপনার অ্যাকাউন্ট সক্রিয় করা হবে।",
  },
  {
    id: 2,
    category: "Investment",
    question: "কিভাবে বিনিয়োগ করবো?",
    answer:
      "প্রথমে একটি উপযুক্ত Investment Plan নির্বাচন করুন। এরপর প্রয়োজনীয় তথ্য ও KYC verification সম্পন্ন করে নির্ধারিত প্রক্রিয়ার মাধ্যমে বিনিয়োগের আবেদন করতে পারবেন।",
  },
  {
    id: 3,
    category: "Investment",
    question: "ন্যূনতম কত টাকা বিনিয়োগ করতে হবে?",
    answer:
      "ন্যূনতম বিনিয়োগের পরিমাণ Investment Plan অনুযায়ী ভিন্ন হতে পারে। প্রতিটি প্ল্যানের বিস্তারিত তথ্য Investment Plans section-এ দেওয়া থাকবে।",
  },
  {
    id: 4,
    category: "Profit",
    question: "মুনাফা কিভাবে পাবো?",
    answer:
      "মুনাফা প্রদানের নিয়ম ও সময়কাল নির্বাচিত Investment Plan-এর শর্ত অনুযায়ী নির্ধারিত হবে। বিনিয়োগের আগে সংশ্লিষ্ট plan-এর terms ও conditions ভালোভাবে পড়ে নিন।",
  },
  {
    id: 5,
    category: "KYC",
    question: "KYC কেন প্রয়োজন?",
    answer:
      "KYC বা Know Your Customer verification ব্যবহারকারীর পরিচয় যাচাই এবং নিরাপদ ও দায়িত্বশীল আর্থিক কার্যক্রম নিশ্চিত করার একটি গুরুত্বপূর্ণ প্রক্রিয়া।",
  },
  {
    id: 6,
    category: "KYC",
    question: "KYC verification-এর জন্য কী কী প্রয়োজন?",
    answer:
      "KYC-এর জন্য সাধারণত পরিচয়পত্র এবং প্রয়োজনীয় ব্যক্তিগত তথ্য প্রয়োজন হতে পারে। সঠিক document requirements registration-এর সময় জানানো হবে।",
  },
  {
    id: 7,
    category: "Withdrawal",
    question: "কিভাবে টাকা উত্তোলন করবো?",
    answer:
      "আপনার account-এর withdrawal section থেকে নির্ধারিত প্রক্রিয়া অনুসরণ করে withdrawal request করা যাবে। প্রযোজ্য terms ও verification সম্পন্ন হওয়ার পর request process করা হবে।",
  },
  {
    id: 8,
    category: "Security",
    question: "আমার তথ্য কি নিরাপদ থাকবে?",
    answer:
      "আমরা ব্যবহারকারীর তথ্যের নিরাপত্তা ও privacy বজায় রাখার জন্য প্রয়োজনীয় নিরাপত্তা ব্যবস্থা গ্রহণ করার লক্ষ্য রাখি। বিস্তারিত তথ্যের জন্য Privacy Policy দেখুন।",
  },
  {
    id: 9,
    category: "Investment",
    question: "আমি কি আমার বিনিয়োগের status দেখতে পারবো?",
    answer:
      "হ্যাঁ। সদস্যদের জন্য account dashboard-এর মাধ্যমে বিনিয়োগ, transaction এবং সংশ্লিষ্ট তথ্য দেখার সুবিধা রাখা যেতে পারে।",
  },
  {
    id: 10,
    category: "General",
    question: "কোম্পানির সাথে কিভাবে যোগাযোগ করবো?",
    answer:
      "আপনি Contact Us page-এর মাধ্যমে আমাদের office address, phone number, email অথবা WhatsApp-এর মাধ্যমে যোগাযোগ করতে পারবেন।",
  },
  {
    id: 11,
    category: "General",
    question: "Investment করার আগে কী কী বিষয় জানা উচিত?",
    answer:
      "বিনিয়োগের আগে Investment Plan, duration, applicable terms, risks এবং অন্যান্য conditions ভালোভাবে বুঝে নেওয়া গুরুত্বপূর্ণ।",
  },
  {
    id: 12,
    category: "General",
    question: "আমি আরও তথ্য কোথায় পাবো?",
    answer:
      "আমাদের website-এর Investment Plans, Projects, About Us, News এবং Legal pages থেকে কোম্পানি ও কার্যক্রম সম্পর্কে আরও তথ্য জানতে পারবেন।",
  },
];

const categories = [
  "All",
  "General",
  "Account",
  "Investment",
  "Profit",
  "KYC",
  "Withdrawal",
  "Security",
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredFAQs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" ||
        faq.category === activeCategory;

      const searchText = search.toLowerCase();

      const matchesSearch =
        faq.question.toLowerCase().includes(searchText) ||
        faq.answer.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
            Help Center
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-green-100 sm:text-lg">
            আমাদের কোম্পানি, অ্যাকাউন্ট, বিনিয়োগ, KYC,
            মুনাফা এবং অন্যান্য বিষয় সম্পর্কে সাধারণ
            প্রশ্নগুলোর উত্তর এখানে খুঁজে পান।
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="relative">

              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setActiveId(null);
                }}
                placeholder="Search your question..."
                className="w-full rounded-2xl border-0 bg-white px-6 py-4 pl-12 text-sm text-gray-900 shadow-xl outline-none placeholder:text-gray-400 focus:ring-4 focus:ring-green-300/30"
              />

              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>

            </div>
          </div>

        </div>
      </section>


      {/* ================= CATEGORY FILTER ================= */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

          <div className="flex gap-3 overflow-x-auto pb-1">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveId(null);
                }}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-700"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>
      </section>


      {/* ================= FAQ SECTION ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Find Answers
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              How Can We Help You?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              আপনার প্রয়োজনীয় প্রশ্নটি খুঁজে পেতে search অথবা
              category filter ব্যবহার করুন।
            </p>

          </div>


          {/* FAQ List */}
          <div className="mt-12 space-y-4">

            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq) => {
                const isOpen = activeId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`overflow-hidden rounded-2xl border transition ${
                      isOpen
                        ? "border-green-200 bg-green-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >

                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(faq.id)}
                      className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                    >

                      <div className="flex items-start gap-4">

                        <span
                          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                            isOpen
                              ? "bg-green-700 text-white"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          ?
                        </span>

                        <div>
                          <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-green-600">
                            {faq.category}
                          </span>

                          <h3 className="font-semibold leading-6 text-gray-900">
                            {faq.question}
                          </h3>
                        </div>

                      </div>


                      {/* Arrow */}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ↓
                      </span>

                    </button>


                    {/* Answer */}
                    {isOpen && (
                      <div className="border-t border-green-100 px-6 pb-6 pt-5">

                        <div className="pl-11">
                          <p className="text-sm leading-7 text-gray-600">
                            {faq.answer}
                          </p>
                        </div>

                      </div>
                    )}

                  </div>
                );
              })
            ) : (
              /* No Result */
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-12 text-center">

                <div className="text-5xl">
                  🔎
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  No Questions Found
                </h3>

                <p className="mt-2 text-gray-500">
                  আপনার search বা selected category অনুযায়ী
                  কোনো প্রশ্ন পাওয়া যায়নি।
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                  className="mt-5 font-semibold text-green-700 hover:text-green-900"
                >
                  Clear Search & Filters
                </button>

              </div>
            )}

          </div>

        </div>
      </section>


      {/* ================= POPULAR QUESTIONS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Popular Topics
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              What Are You Looking For?
            </h2>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Account */}
            <button
              type="button"
              onClick={() => {
                setActiveCategory("Account");
                setSearch("");
                window.scrollTo({
                  top: 600,
                  behavior: "smooth",
                });
              }}
              className="group rounded-2xl bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                👤
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Account
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                অ্যাকাউন্ট খোলা ও ব্যবহার সম্পর্কিত প্রশ্ন।
              </p>

              <span className="mt-4 block text-sm font-semibold text-green-700">
                View Questions →
              </span>
            </button>


            {/* Investment */}
            <button
              type="button"
              onClick={() => {
                setActiveCategory("Investment");
                setSearch("");
                window.scrollTo({
                  top: 600,
                  behavior: "smooth",
                });
              }}
              className="group rounded-2xl bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                📈
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Investment
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                বিনিয়োগ ও Investment Plans সম্পর্কিত প্রশ্ন।
              </p>

              <span className="mt-4 block text-sm font-semibold text-green-700">
                View Questions →
              </span>
            </button>


            {/* KYC */}
            <button
              type="button"
              onClick={() => {
                setActiveCategory("KYC");
                setSearch("");
                window.scrollTo({
                  top: 600,
                  behavior: "smooth",
                });
              }}
              className="group rounded-2xl bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                🪪
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                KYC Verification
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                KYC ও document verification সম্পর্কিত প্রশ্ন।
              </p>

              <span className="mt-4 block text-sm font-semibold text-green-700">
                View Questions →
              </span>
            </button>


            {/* Withdrawal */}
            <button
              type="button"
              onClick={() => {
                setActiveCategory("Withdrawal");
                setSearch("");
                window.scrollTo({
                  top: 600,
                  behavior: "smooth",
                });
              }}
              className="group rounded-2xl bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                💳
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Withdrawal
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                টাকা উত্তোলন ও withdrawal process সম্পর্কিত প্রশ্ন।
              </p>

              <span className="mt-4 block text-sm font-semibold text-green-700">
                View Questions →
              </span>
            </button>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-green-950 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-800 text-3xl">
            💬
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Still Have Questions?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-100">
            আপনার প্রশ্নের উত্তর FAQ-তে না পেলে আমাদের
            customer support team-এর সাথে যোগাযোগ করুন।
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/contact"
              className="rounded-xl bg-white px-7 py-3.5 font-semibold text-green-900 transition hover:bg-green-50"
            >
              Contact Us
            </Link>

            <a
              href="https://wa.me/"
              className="rounded-xl border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp Us
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

export default FAQ;