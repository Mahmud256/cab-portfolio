import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-emerald-800">
      
      {/* Background Decoration */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">

        {/* Left Content */}
        <div className="text-center lg:text-left">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-green-100 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-300" />
            Smart Investment • Better Future
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Build Your
            <span className="block text-green-300">
              Financial Future
            </span>
            With Confidence
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-green-100 sm:text-lg lg:mx-0">
            নিরাপদ ও স্বচ্ছ বিনিয়োগের মাধ্যমে আর্থিক সমৃদ্ধির পথে এগিয়ে যান।
            আজই আমাদের সাথে যুক্ত হোন এবং আপনার বিনিয়োগকে সঠিকভাবে পরিচালনা করুন।
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

            <Link
              to="/investment-plans"
              className="rounded-lg bg-white px-7 py-3.5 font-semibold text-green-800 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-50"
            >
              Explore Investment
            </Link>

            <Link
              to="/about"
              className="rounded-lg border border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20"
            >
              Learn More
            </Link>

          </div>

          {/* Trust Information */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">

            <div>
              <h3 className="text-2xl font-bold text-white">
                1K+
              </h3>
              <p className="mt-1 text-xs text-green-200 sm:text-sm">
                Members
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                50+
              </h3>
              <p className="mt-1 text-xs text-green-200 sm:text-sm">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                10+
              </h3>
              <p className="mt-1 text-xs text-green-200 sm:text-sm">
                Years Experience
              </p>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="relative hidden lg:block">

          {/* Main Card */}
          <div className="relative mx-auto max-w-md">

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">

              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-200">
                    Investment Overview
                  </p>

                  <h2 className="mt-1 text-3xl font-bold text-white">
                    ৳ 25,00,000
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/20 text-2xl">
                  📈
                </div>
              </div>

              {/* Chart */}
              <div className="mt-8 flex h-40 items-end gap-3 rounded-xl bg-black/10 p-5">

                <div className="h-[35%] w-full rounded-t-md bg-green-300/50" />
                <div className="h-[48%] w-full rounded-t-md bg-green-300/60" />
                <div className="h-[42%] w-full rounded-t-md bg-green-300/60" />
                <div className="h-[65%] w-full rounded-t-md bg-green-300/70" />
                <div className="h-[58%] w-full rounded-t-md bg-green-300/80" />
                <div className="h-[80%] w-full rounded-t-md bg-green-300/90" />
                <div className="h-full w-full rounded-t-md bg-green-300" />

              </div>

              {/* Statistics */}
              <div className="mt-6 grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-xs text-green-200">
                    Active Investment
                  </p>

                  <p className="mt-1 text-lg font-bold text-white">
                    ৳ 18,50,000
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-xs text-green-200">
                    Total Return
                  </p>

                  <p className="mt-1 text-lg font-bold text-green-300">
                    +18.5%
                  </p>
                </div>

              </div>

            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-8 rounded-2xl bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  ✓
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Investment Status
                  </p>

                  <p className="font-semibold text-green-700">
                    Active & Secure
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;