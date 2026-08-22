import { Link } from "react-router-dom";

const ongoingProjects = [
  {
    id: 1,
    title: "Tourism Development Project",
    category: "Tourism",
    location: "Bangladesh",
    status: "Ongoing",
    description:
      "দেশের সম্ভাবনাময় পর্যটন খাতে আধুনিক ও টেকসই পর্যটন সুবিধা এবং ব্যবসায়িক সুযোগ তৈরির লক্ষ্যে পরিচালিত একটি চলমান প্রকল্প।",
    progress: 65,
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Real Estate Development Project",
    category: "Real Estate",
    location: "Bangladesh",
    status: "Ongoing",
    description:
      "আধুনিক আবাসিক ও বাণিজ্যিক স্থাপনা এবং পরিকল্পিত রিয়েল এস্টেট উন্নয়নের মাধ্যমে দীর্ঘমেয়াদি বিনিয়োগের সুযোগ তৈরির একটি চলমান প্রকল্প।",
    progress: 50,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Resort Development Project",
    category: "Resort & Hospitality",
    location: "Bangladesh",
    status: "Ongoing",
    description:
      "দেশের আকর্ষণীয় পর্যটন এলাকায় মানসম্মত রিসোর্ট ও হসপিটালিটি সুবিধা গড়ে তোলার লক্ষ্যে পরিচালিত একটি সম্ভাবনাময় প্রকল্প।",
    progress: 40,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
  },
];

const completedProjects = [
  {
    id: 4,
    title: "Go Action Bangladesh",
    category: "E-Commerce",
    location: "Bangladesh",
    status: "Completed",
    description:
      "Go Action Bangladesh একটি E-Commerce ভিত্তিক প্রকল্প, যেখানে অনলাইন প্ল্যাটফর্মের মাধ্যমে পণ্য ও সেবাকে গ্রাহকদের কাছে সহজে পৌঁছে দেওয়ার জন্য ডিজিটাল ব্যবসায়িক কার্যক্রম পরিচালিত হয়েছে।",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
    website: "https://goaction.bd/",
  },
];

const Projects = () => {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
            Our Work
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Our Projects
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-green-100 sm:text-lg">
            আমাদের চলমান ও সম্পন্ন প্রকল্পগুলো সম্পর্কে জানুন। Tourism,
            Real Estate, Resort, E-Commerce এবং অন্যান্য সম্ভাবনাময় খাতে আমরা
            দায়িত্বশীল ও দীর্ঘমেয়াদি ব্যবসায়িক কার্যক্রম পরিচালনা করছি।
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-200 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="py-8 text-center">
            <h3 className="text-3xl font-bold text-green-700">4+</h3>
            <p className="mt-1 text-sm text-gray-500">Major Projects</p>
          </div>

          <div className="py-8 text-center">
            <h3 className="text-3xl font-bold text-green-700">3+</h3>
            <p className="mt-1 text-sm text-gray-500">Ongoing Projects</p>
          </div>

          <div className="py-8 text-center">
            <h3 className="text-3xl font-bold text-green-700">1+</h3>
            <p className="mt-1 text-sm text-gray-500">Completed Projects</p>
          </div>

          <div className="py-8 text-center">
            <h3 className="text-3xl font-bold text-green-700">4+</h3>
            <p className="mt-1 text-sm text-gray-500">Business Sectors</p>
          </div>
        </div>
      </section>

      {/* ================= ONGOING PROJECTS ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
                Current Projects
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Ongoing Projects
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                বর্তমানে Tourism, Real Estate এবং Resort & Hospitality খাতে
                আমাদের বিভিন্ন প্রকল্প চলমান রয়েছে।
              </p>
            </div>
          </div>

          {/* Project Cards */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {ongoingProjects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute right-4 top-4 rounded-full bg-green-600 px-4 py-1.5 text-xs font-semibold text-white">
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-green-600">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.location}</span>
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>

                  {/* Progress */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-700">
                        Project Progress
                      </span>

                      <span className="font-bold text-green-700">
                        {project.progress}%
                      </span>
                    </div>

                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-green-600"
                        style={{
                          width: `${project.progress}%`,
                        }}
                      />
                    </div>
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="mt-6 block rounded-xl border border-green-700 px-5 py-3 text-center text-sm font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
                  >
                    View Project Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECT ================= */}
      <section className="bg-gray-50 py-20">
        <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Our Achievements
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Completed Projects
            </h2>
          </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
                alt="Go Action Bangladesh E-Commerce"
                className="h-[420px] w-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
                Go Action Bangladesh
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Go Action Bangladesh একটি E-Commerce প্রকল্প, যা অনলাইন
                ব্যবসা ও ডিজিটাল কমার্সের মাধ্যমে গ্রাহকদের জন্য সহজ,
                আধুনিক ও সুবিধাজনক কেনাকাটার অভিজ্ঞতা তৈরির উদ্দেশ্যে
                পরিচালিত হয়েছে।
              </p>

              {/* Highlights */}
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-xs text-gray-500">Project Type</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    E-Commerce
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-xs text-gray-500">Status</p>
                  <p className="mt-1 font-semibold text-green-700">
                    Completed
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    Bangladesh
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-xs text-gray-500">Focus</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    Digital Commerce
                  </p>
                </div>
              </div>

              {/* Website Button */}
              <a
                href="https://goaction.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Visit Go Action Bangladesh →
              </a>
            </div>
          </div>
        </div>
      </section>

     

      {/* ================= PROJECT PROCESS ================= */}
      <section className="bg-green-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              How We Manage Projects
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-200">
              পরিকল্পনা থেকে বাস্তবায়ন পর্যন্ত প্রতিটি প্রকল্পে আমরা
              সুসংগঠিত ও দায়িত্বশীল পদ্ধতি অনুসরণ করি।
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
                01
              </div>

              <h3 className="mt-5 font-bold text-white">Planning</h3>

              <p className="mt-2 text-sm leading-6 text-green-200">
                প্রকল্পের লক্ষ্য, সম্ভাবনা ও প্রয়োজনীয় পরিকল্পনা তৈরি করা।
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
                02
              </div>

              <h3 className="mt-5 font-bold text-white">Development</h3>

              <p className="mt-2 text-sm leading-6 text-green-200">
                পরিকল্পনা অনুযায়ী প্রকল্পের কার্যক্রম বাস্তবায়ন করা।
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
                03
              </div>

              <h3 className="mt-5 font-bold text-white">Monitoring</h3>

              <p className="mt-2 text-sm leading-6 text-green-200">
                প্রকল্পের অগ্রগতি নিয়মিত পর্যবেক্ষণ ও মূল্যায়ন করা।
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
                04
              </div>

              <h3 className="mt-5 font-bold text-white">Completion</h3>

              <p className="mt-2 text-sm leading-6 text-green-200">
                নির্ধারিত লক্ষ্য অনুযায়ী প্রকল্প সফলভাবে সম্পন্ন করা।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Interested in Our Projects?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            আমাদের Tourism, Real Estate, Resort, E-Commerce এবং অন্যান্য
            ব্যবসায়িক প্রকল্প সম্পর্কে আরও বিস্তারিত জানতে আমাদের সাথে
            যোগাযোগ করুন।
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/investment-plans"
              className="rounded-xl bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800"
            >
              Explore Investment Plans
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-green-700 px-7 py-3.5 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;