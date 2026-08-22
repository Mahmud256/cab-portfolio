import { Link } from "react-router-dom";

const boardMembers = [
  {
    name: "Mr. Abdul Karim",
    position: "Chairman",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    description:
      "কোম্পানির সামগ্রিক নেতৃত্ব, নীতিনির্ধারণ এবং দীর্ঘমেয়াদি কৌশল নির্ধারণে গুরুত্বপূর্ণ ভূমিকা পালন করেন।",
  },
  {
    name: "Mr. Rahman Ahmed",
    position: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    description:
      "কোম্পানির দৈনন্দিন কার্যক্রম, ব্যবসায়িক পরিকল্পনা এবং কৌশলগত উন্নয়ন পরিচালনা করেন।",
  },
  {
    name: "Ms. Nusrat Jahan",
    position: "Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    description:
      "ব্যবস্থাপনা ও ব্যবসায়িক কার্যক্রমে কৌশলগত পরিকল্পনা এবং সিদ্ধান্ত গ্রহণে সহযোগিতা করেন।",
  },
];

const advisors = [
  {
    name: "Mr. Mahfuz Ahmed",
    position: "Business Advisor",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ms. Sadia Islam",
    position: "Financial Advisor",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Mr. Tanvir Hasan",
    position: "Legal Advisor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  },
];

const managementTeam = [
  {
    name: "Mr. Imran Hossain",
    position: "Chief Operating Officer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ms. Farzana Akter",
    position: "Head of Finance",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Mr. Saiful Islam",
    position: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ms. Rafia Rahman",
    position: "HR & Administration",
    image:
      "https://images.unsplash.com/photo-1584999734482-0361aecad844?auto=format&fit=crop&w=500&q=80",
  },
];

const TeamMemberCard = ({ member, large = false }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className={large ? "h-80 overflow-hidden" : "h-64 overflow-hidden"}>
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900">
          {member.name}
        </h3>

        <p className="mt-2 font-semibold text-green-700">
          {member.position}
        </p>

        {member.description && (
          <p className="mt-4 text-sm leading-6 text-gray-600">
            {member.description}
          </p>
        )}

        {/* Social Icons */}
        <div className="mt-5 flex justify-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600 transition hover:bg-green-700 hover:text-white"
          >
            f
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600 transition hover:bg-green-700 hover:text-white"
          >
            in
          </a>

          <a
            href="#"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-600 transition hover:bg-green-700 hover:text-white"
          >
            @
          </a>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
            Leadership & Management
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Meet Our Team
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-green-100 sm:text-lg">
            দক্ষ নেতৃত্ব, অভিজ্ঞ ব্যবস্থাপনা এবং দায়িত্বশীল
            পেশাদারদের সমন্বয়ে আমাদের টিম কোম্পানির লক্ষ্য ও
            ভবিষ্যৎ পরিকল্পনা বাস্তবায়নে কাজ করছে।
          </p>

        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Our Leadership
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            People Behind Our Vision
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Community Action In Bangladesh PLC-এর নেতৃত্ব ও
            ব্যবস্থাপনা টিম কোম্পানির ব্যবসায়িক কার্যক্রম,
            প্রকল্প ব্যবস্থাপনা এবং ভবিষ্যৎ উন্নয়ন পরিকল্পনা
            বাস্তবায়নে গুরুত্বপূর্ণ ভূমিকা পালন করে।
          </p>

        </div>
      </section>


      {/* ================= BOARD OF DIRECTORS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Leadership
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Board of Directors
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              কোম্পানির নীতিনির্ধারণ ও কৌশলগত পরিচালনায় দায়িত্বপ্রাপ্ত
              নেতৃত্ব।
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
            {boardMembers.map((member) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                large
              />
            ))}
          </div>

        </div>
      </section>


      {/* ================= ADVISORS ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Professional Guidance
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Advisors
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              বিভিন্ন গুরুত্বপূর্ণ বিষয়ে পেশাদার পরামর্শ ও
              নির্দেশনা প্রদানে আমাদের advisors গুরুত্বপূর্ণ ভূমিকা রাখেন।
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {advisors.map((member) => (
              <TeamMemberCard
                key={member.name}
                member={member}
              />
            ))}
          </div>

        </div>
      </section>


      {/* ================= MANAGEMENT TEAM ================= */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Management
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Management Team
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              কোম্পানির দৈনন্দিন কার্যক্রম ও বিভিন্ন বিভাগ পরিচালনায়
              আমাদের management team কাজ করে।
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {managementTeam.map((member) => (
              <TeamMemberCard
                key={member.name}
                member={member}
              />
            ))}
          </div>

        </div>
      </section>


      {/* ================= OUR VALUES ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              How We Work
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Leadership Principles
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            {/* Transparency */}
            <div className="rounded-2xl border border-gray-100 p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                👁️
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Transparency
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                কার্যক্রমে স্বচ্ছতা ও জবাবদিহিতা বজায় রাখা।
              </p>
            </div>

            {/* Integrity */}
            <div className="rounded-2xl border border-gray-100 p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                🛡️
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Integrity
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                দায়িত্বশীলতা ও নৈতিকতার সঙ্গে কাজ করা।
              </p>
            </div>

            {/* Teamwork */}
            <div className="rounded-2xl border border-gray-100 p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                🤝
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Teamwork
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                পারস্পরিক সহযোগিতা ও সম্মিলিত প্রচেষ্টাকে গুরুত্ব দেওয়া।
              </p>
            </div>

            {/* Excellence */}
            <div className="rounded-2xl border border-gray-100 p-7 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                ⭐
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Excellence
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                কাজের মান ও দক্ষতার ধারাবাহিক উন্নয়নে মনোযোগ দেওয়া।
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-green-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Have Questions About Our Team?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-100">
            আমাদের নেতৃত্ব, ব্যবস্থাপনা বা কোম্পানির কার্যক্রম
            সম্পর্কে আরও জানতে আমাদের সাথে যোগাযোগ করুন।
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-green-800 transition hover:bg-green-50"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </main>
  );
};

export default Team;