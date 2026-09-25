import { useState } from "react";
import {
  ArrowRight,
  Cloud,
  CloudSun,
  Droplets,
  MapPin,
  Sparkles,
  Sun,
  Wind,
} from "lucide-react";
import LocationModel from "../components/LocationModel";

const Home = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="min-h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        {/* ================= HERO ================= */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT ================= */}
          <div className="text-center lg:text-left">
            {/* Small Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-blue-600 shadow-sm sm:text-sm">
              <Sparkles size={16} />
              Smart Weather Forecast
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl">
              Weather
              <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
                made simple.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:mt-6 sm:text-base md:text-lg lg:mx-0">
              Get real-time weather conditions, temperature, humidity and
              helpful recommendations for any location around the world.
            </p>

            {/* Button + Location */}
            <div className="mt-7 flex flex-col items-center gap-4 sm:mt-8 sm:flex-row lg:justify-start">
              <button
                type="button"
                onClick={() => setClick(true)}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 sm:w-auto sm:text-base"
              >
                Check Weather
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={17} className="text-blue-500" />
                Search any location
              </div>
            </div>
          </div>

          {/* ================= RIGHT WEATHER CARD ================= */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            {/* Background Glow */}
            <div className="absolute -inset-6 rounded-[3rem] bg-blue-300/30 blur-3xl" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-2xl shadow-blue-200/50 backdrop-blur-xl sm:p-7">
              {/* Decorative Circles */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-200/50" />

              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-100/70" />

              <div className="relative z-10">
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
                      Live Weather
                    </p>

                    <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                      Current conditions
                    </p>
                  </div>

                  <div className="rounded-2xl bg-blue-50 p-3 text-blue-500 shadow-sm sm:p-4">
                    <CloudSun size={28} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Weather Illustration */}
                <div className="relative flex justify-center py-8 sm:py-10">
                  <div className="absolute h-36 w-36 rounded-full bg-sky-200/50 blur-2xl sm:h-44 sm:w-44" />

                  <div className="relative rounded-full bg-gradient-to-br from-sky-100 to-blue-50 p-7 shadow-inner sm:p-9">
                    <CloudSun
                      size={90}
                      strokeWidth={1.3}
                      className="text-blue-500 drop-shadow-lg sm:h-[110px] sm:w-[110px]"
                    />
                  </div>
                </div>

                {/* Temperature */}
                <div className="text-center">
                  <p className="text-5xl font-extrabold tracking-tight text-slate-800 sm:text-6xl">
                    24°
                  </p>

                  <p className="mt-2 text-base font-semibold text-slate-600 sm:text-lg">
                    Perfect day ahead
                  </p>

                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                    Comfortable weather conditions
                  </p>
                </div>

                {/* Weather Stats */}
                <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
                  {/* Humidity */}
                  <div className="rounded-2xl border border-blue-50 bg-blue-50/70 p-3 text-center sm:p-4">
                    <Droplets size={20} className="mx-auto text-blue-500" />

                    <p className="mt-2 text-xs text-slate-400">Humidity</p>

                    <p className="mt-1 text-sm font-bold text-slate-700 sm:text-base">
                      65%
                    </p>
                  </div>

                  {/* Wind */}
                  <div className="rounded-2xl border border-sky-50 bg-sky-50/70 p-3 text-center sm:p-4">
                    <Wind size={20} className="mx-auto text-sky-500" />

                    <p className="mt-2 text-xs text-slate-400">Wind</p>

                    <p className="mt-1 text-sm font-bold text-slate-700 sm:text-base">
                      12 km/h
                    </p>
                  </div>

                  {/* Weather */}
                  <div className="rounded-2xl border border-amber-50 bg-amber-50/70 p-3 text-center sm:p-4">
                    <Sun size={20} className="mx-auto text-amber-500" />

                    <p className="mt-2 text-xs text-slate-400">Condition</p>

                    <p className="mt-1 text-sm font-bold text-slate-700 sm:text-base">
                      Clear
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="group rounded-2xl border border-blue-100 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100 sm:p-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-500 transition-transform duration-300 group-hover:scale-110">
              <Cloud size={24} />
            </div>

            <h3 className="mt-4 font-bold text-slate-800">Live Conditions</h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Get current weather conditions with live data.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group rounded-2xl border border-blue-100 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100 sm:p-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 transition-transform duration-300 group-hover:scale-110">
              <Sparkles size={24} />
            </div>

            <h3 className="mt-4 font-bold text-slate-800">Smart Insights</h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Get useful recommendations based on weather.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group rounded-2xl border border-blue-100 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100 sm:col-span-2 sm:p-6 lg:col-span-1">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-500 transition-transform duration-300 group-hover:scale-110">
              <MapPin size={24} />
            </div>

            <h3 className="mt-4 font-bold text-slate-800">Any Location</h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Search weather information for any location.
            </p>
          </div>
        </div>
      </div>

      {/* Location Modal */}
      {click && <LocationModel closeBtn={() => setClick(false)} />}
    </div>
  );
};

export default Home;
