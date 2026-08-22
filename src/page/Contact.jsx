import { Link } from "react-router-dom";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend only
    alert("Thank you! Your message has been submitted.");
  };

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
            Get In Touch
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-green-100 sm:text-lg">
            Community Action In Bangladesh PLC সম্পর্কে জানতে,
            বিনিয়োগ সংক্রান্ত তথ্য পেতে অথবা যেকোনো প্রশ্নের জন্য
            আমাদের সাথে যোগাযোগ করুন।
          </p>

        </div>
      </section>


      {/* ================= CONTACT INFO ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* Address */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl">
                📍
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Office Address
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                House #00, Road #00
                <br />
                Dhaka, Bangladesh
              </p>

            </div>


            {/* Phone */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl">
                📞
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Phone
              </h3>

              <a
                href="tel:+8801000000000"
                className="mt-3 block text-sm text-gray-600 transition hover:text-green-700"
              >
                +880 1XXX-XXXXXX
              </a>

              <p className="mt-1 text-xs text-gray-400">
                Sat - Thu, 9:00 AM - 6:00 PM
              </p>

            </div>


            {/* Email */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl">
                ✉️
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Email
              </h3>

              <a
                href="mailto:info@example.com"
                className="mt-3 block break-all text-sm text-gray-600 transition hover:text-green-700"
              >
                info@example.com
              </a>

              <p className="mt-1 text-xs text-gray-400">
                We usually reply within 24 hours.
              </p>

            </div>


            {/* WhatsApp */}
            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-2xl">
                💬
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                WhatsApp
              </h3>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-sm text-gray-600 transition hover:text-green-700"
              >
                Chat With Us
              </a>

              <p className="mt-1 text-xs text-gray-400">
                Available during office hours.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CONTACT FORM + OFFICE INFO ================= */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-5">

            {/* ================= FORM ================= */}
            <div className="rounded-3xl bg-white p-8 shadow-sm lg:col-span-3 sm:p-10">

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
                  Send Us a Message
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                  How Can We Help?
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  নিচের form পূরণ করে আপনার প্রশ্ন বা message
                  আমাদের কাছে পাঠাতে পারেন।
                </p>
              </div>


              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >

                {/* Name + Phone */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="+880 1XXX-XXXXXX"
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                </div>


                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>


                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Subject
                  </label>

                  <select
                    id="subject"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>

                    <option value="investment">
                      Investment Information
                    </option>

                    <option value="account">
                      Account Related
                    </option>

                    <option value="kyc">
                      KYC Verification
                    </option>

                    <option value="project">
                      Project Information
                    </option>

                    <option value="general">
                      General Inquiry
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>


                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Write your message..."
                    required
                    className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>


                {/* Checkbox */}
                <label className="flex cursor-pointer items-start gap-3">

                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-green-700 focus:ring-green-600"
                  />

                  <span className="text-xs leading-5 text-gray-500">
                    I agree to the Terms & Conditions and Privacy Policy.
                  </span>

                </label>


                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-green-700 px-6 py-3.5 font-semibold text-white transition hover:bg-green-800 sm:w-auto"
                >
                  Send Message →
                </button>

              </form>

            </div>


            {/* ================= OFFICE INFO ================= */}
            <div className="lg:col-span-2">

              <div className="rounded-3xl bg-green-950 p-8 text-white sm:p-10">

                <p className="text-sm font-semibold uppercase tracking-widest text-green-300">
                  Office Information
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  Visit Our Office
                </h2>

                <p className="mt-4 text-sm leading-7 text-green-100">
                  আপনার প্রয়োজনীয় তথ্য বা সহযোগিতার জন্য
                  নির্ধারিত office hours-এর মধ্যে আমাদের
                  অফিসে যোগাযোগ করতে পারেন।
                </p>


                {/* Details */}
                <div className="mt-8 space-y-6">

                  {/* Address */}
                  <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-800">
                      📍
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Office Address
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-green-200">
                        House #00, Road #00
                        <br />
                        Dhaka, Bangladesh
                      </p>
                    </div>

                  </div>


                  {/* Phone */}
                  <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-800">
                      📞
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Phone Number
                      </h3>

                      <a
                        href="tel:+8801000000000"
                        className="mt-1 block text-sm text-green-200 hover:text-white"
                      >
                        +880 1XXX-XXXXXX
                      </a>
                    </div>

                  </div>


                  {/* Email */}
                  <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-800">
                      ✉️
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Email Address
                      </h3>

                      <a
                        href="mailto:info@example.com"
                        className="mt-1 block break-all text-sm text-green-200 hover:text-white"
                      >
                        info@example.com
                      </a>
                    </div>

                  </div>


                  {/* Hours */}
                  <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-800">
                      🕒
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        Office Hours
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-green-200">
                        Saturday - Thursday
                        <br />
                        9:00 AM - 6:00 PM
                      </p>
                    </div>

                  </div>

                </div>


                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white transition hover:bg-green-500"
                >
                  💬 Chat on WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= GOOGLE MAP ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-10 text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Find Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Location
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              আমাদের অফিসের location দেখতে Google Maps ব্যবহার করুন।
            </p>

          </div>


          {/* Google Map Placeholder */}
          <div className="relative h-[400px] overflow-hidden rounded-3xl border border-gray-200 bg-gray-100">

            <iframe
              title="Community Action In Bangladesh PLC Location"
              src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>
      </section>


      {/* ================= FAQ CTA ================= */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
            ❓
          </div>

          <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Have a Common Question?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            যোগাযোগ করার আগে আমাদের Frequently Asked Questions
            section দেখে আপনার প্রশ্নের উত্তর খুঁজে দেখতে পারেন।
          </p>

          <Link
            to="/faq"
            className="mt-8 inline-block rounded-xl bg-green-700 px-7 py-3.5 font-semibold text-white transition hover:bg-green-800"
          >
            Visit FAQ →
          </Link>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="bg-green-800 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            We Are Here to Help
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-100">
            আপনার যেকোনো প্রশ্ন, পরামর্শ বা প্রয়োজনীয় তথ্যের জন্য
            আমাদের team-এর সাথে যোগাযোগ করুন।
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="tel:+8801000000000"
              className="rounded-xl bg-white px-7 py-3.5 font-semibold text-green-800 transition hover:bg-green-50"
            >
              📞 Call Us
            </a>

            <a
              href="mailto:info@example.com"
              className="rounded-xl border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              ✉️ Send Email
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Contact;