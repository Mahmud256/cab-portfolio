import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const newsData = [
  {
    id: 1,
    title: "Community Action In Bangladesh PLC Announces New Business Initiative",
    category: "Company News",
    date: "August 18, 2026",
    author: "CAB Management",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "কোম্পানির ভবিষ্যৎ ব্যবসায়িক কার্যক্রম ও সম্প্রসারণ পরিকল্পনা নিয়ে নতুন উদ্যোগ ঘোষণা করা হয়েছে।",
    featured: true,
  },
  {
    id: 2,
    title: "New Investment Opportunities Now Available",
    category: "Investment",
    date: "August 15, 2026",
    author: "Investment Team",
    image:
      "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "নতুন কিছু বিনিয়োগের সুযোগ ও সংশ্লিষ্ট তথ্য সম্পর্কে বিস্তারিত জানতে আমাদের Investment Plans section দেখুন।",
    featured: false,
  },
  {
    id: 3,
    title: "Important Notice for Members and Investors",
    category: "Notice",
    date: "August 12, 2026",
    author: "CAB Administration",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "সকল সদস্য ও বিনিয়োগকারীদের জন্য গুরুত্বপূর্ণ তথ্য ও নির্দেশনা প্রকাশ করা হয়েছে।",
    featured: false,
  },
  {
    id: 4,
    title: "KYC Verification Process Updated",
    category: "Announcement",
    date: "August 10, 2026",
    author: "Compliance Team",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "সদস্য ও বিনিয়োগকারীদের KYC verification প্রক্রিয়া আরও সহজ ও সংগঠিত করার জন্য কিছু পরিবর্তন আনা হয়েছে।",
    featured: false,
  },
  {
    id: 5,
    title: "New Community Development Project Begins",
    category: "Projects",
    date: "August 06, 2026",
    author: "Project Team",
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "কমিউনিটি উন্নয়নকে কেন্দ্র করে একটি নতুন প্রকল্পের কার্যক্রম শুরু হয়েছে।",
    featured: false,
  },
  {
    id: 6,
    title: "Management Team Holds Strategic Planning Meeting",
    category: "Event",
    date: "August 02, 2026",
    author: "CAB Management",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "কোম্পানির ভবিষ্যৎ পরিকল্পনা ও ব্যবসায়িক কার্যক্রম নিয়ে management team একটি গুরুত্বপূর্ণ সভা করেছে।",
    featured: false,
  },
];

const categories = [
  "All",
  "Company News",
  "Investment",
  "Notice",
  "Announcement",
  "Projects",
  "Event",
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredNews = useMemo(() => {
    return newsData.filter((news) => {
      const matchesCategory =
        activeCategory === "All" ||
        news.category === activeCategory;

      const searchText = search.toLowerCase();

      const matchesSearch =
        news.title.toLowerCase().includes(searchText) ||
        news.excerpt.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const featuredNews = newsData.find((news) => news.featured);

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
            Latest Updates
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            News & Updates
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-green-100 sm:text-lg">
            Community Action In Bangladesh PLC-এর সর্বশেষ
            সংবাদ, নোটিশ, ঘোষণা, ইভেন্ট এবং গুরুত্বপূর্ণ আপডেট
            এখানে দেখুন।
          </p>

        </div>
      </section>


      {/* ================= FEATURED NEWS ================= */}
      {featuredNews && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
                Featured
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Featured News
              </h2>
            </div>

            <div className="grid overflow-hidden rounded-3xl bg-gray-50 lg:grid-cols-2">

              {/* Image */}
              <div className="h-[320px] lg:h-[430px]">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 sm:p-12">

                <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-xs font-semibold text-green-700">
                  {featuredNews.category}
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                  {featuredNews.title}
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
                  {featuredNews.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
                  <span>📅 {featuredNews.date}</span>
                  <span>•</span>
                  <span>✍️ {featuredNews.author}</span>
                </div>

                <Link
                  to={`/news/${featuredNews.id}`}
                  className="mt-8 w-fit rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                >
                  Read Full News →
                </Link>

              </div>

            </div>

          </div>
        </section>
      )}


      {/* ================= NEWS LIST ================= */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
                Latest
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                All News & Updates
              </h2>
            </div>


            {/* Search */}
            <div className="relative w-full lg:w-80">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search news..."
                className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3 pl-11 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>

          </div>


          {/* Category Filter */}
          <div className="mt-8 flex gap-3 overflow-x-auto pb-2">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  activeCategory === category
                    ? "bg-green-700 text-white"
                    : "bg-white text-gray-600 hover:bg-green-100 hover:text-green-700"
                }`}
              >
                {category}
              </button>
            ))}

          </div>


          {/* News Cards */}
          {filteredNews.length > 0 ? (
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {filteredNews.map((news) => (
                <article
                  key={news.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">

                    <img
                      src={news.image}
                      alt={news.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-green-700 shadow-sm">
                      {news.category}
                    </span>

                  </div>


                  {/* Content */}
                  <div className="p-6">

                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>📅 {news.date}</span>
                    </div>

                    <h3 className="mt-3 line-clamp-2 text-xl font-bold leading-7 text-gray-900">
                      {news.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                      {news.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">

                      <span className="text-xs text-gray-500">
                        By {news.author}
                      </span>

                      <Link
                        to={`/news/${news.id}`}
                        className="text-sm font-semibold text-green-700 transition hover:text-green-900"
                      >
                        Read More →
                      </Link>

                    </div>

                  </div>

                </article>
              ))}

            </div>
          ) : (
            <div className="mt-10 rounded-2xl bg-white p-12 text-center">
              <div className="text-4xl">📰</div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                No News Found
              </h3>

              <p className="mt-2 text-gray-500">
                আপনার search বা category অনুযায়ী কোনো news পাওয়া যায়নি।
              </p>
            </div>
          )}

        </div>
      </section>


      {/* ================= NOTICE SECTION ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Important Notice */}
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xl">
                  ⚠️
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">
                    Important Notice
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-gray-900">
                    Stay Updated
                  </h2>

                  <p className="mt-4 leading-7 text-gray-700">
                    কোম্পানির গুরুত্বপূর্ণ নোটিশ, নিয়মাবলী,
                    বিনিয়োগ সংক্রান্ত তথ্য এবং অন্যান্য ঘোষণা
                    নিয়মিতভাবে এই section-এ প্রকাশ করা হবে।
                  </p>

                  <Link
                    to="/news"
                    className="mt-5 inline-block font-semibold text-green-700 hover:text-green-900"
                  >
                    View All Notices →
                  </Link>
                </div>

              </div>

            </div>


            {/* Newsletter */}
            <div className="rounded-3xl bg-green-950 p-8">

              <p className="text-sm font-semibold uppercase tracking-wider text-green-300">
                Stay Connected
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white">
                Get Latest Updates
              </h2>

              <p className="mt-4 leading-7 text-green-100">
                আমাদের সর্বশেষ news, announcements এবং
                গুরুত্বপূর্ণ updates সম্পর্কে জানতে আমাদের
                সাথে যোগাযোগ রাখুন।
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                <input
                  type="email"
                  placeholder="Your email address"
                  className="min-w-0 flex-1 rounded-xl border-0 px-5 py-3 text-sm text-gray-900 outline-none"
                />

                <button
                  type="button"
                  className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
                >
                  Subscribe
                </button>

              </div>

              <p className="mt-3 text-xs text-green-300">
                * Newsletter functionality can be connected with a backend
                later.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-green-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Want to Know More?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-100">
            কোম্পানির news, projects এবং investment opportunities
            সম্পর্কে আরও তথ্য জানতে আমাদের সাথে যোগাযোগ করুন।
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/contact"
              className="rounded-xl bg-white px-7 py-3.5 font-semibold text-green-800 transition hover:bg-green-50"
            >
              Contact Us
            </Link>

            <Link
              to="/investment-plans"
              className="rounded-xl border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Investment Plans
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default News;