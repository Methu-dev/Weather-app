import { Moon, Star } from "lucide-react";

import { getWeatherTheme } from "../utills/weatherTheme";

const WeatherLiveCard = ({ weather, place }) => {
  const theme = getWeatherTheme(weather?.icon);

  const WeatherIcon = theme.icon;

  return (
    <div
      className={`relative min-h-[560px] overflow-hidden rounded-3xl p-6 text-white shadow-xl transition-all duration-700 sm:p-8 ${theme.background}`}
    >
      {/* Background Decoration */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10" />

      <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-white/10" />

      {/* Night Stars */}
      {theme.effect === "night" && (
        <>
          <Star className="absolute left-10 top-20 h-3 w-3 text-white/70" />
          <Star className="absolute right-20 top-28 h-4 w-4 text-white/80" />
          <Star className="absolute bottom-32 left-24 h-3 w-3 text-white/60" />
          <Star className="absolute right-12 top-44 h-2 w-2 text-white/70" />
        </>
      )}

      {/* Rain Effect */}
      {theme.effect === "rain" && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
          {Array.from({ length: 20 }).map((_, index) => (
            <span
              key={index}
              className="absolute h-8 w-px bg-white"
              style={{
                left: `${(index * 17) % 100}%`,
                top: `${(index * 13) % 100}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* Snow Effect */}
      {theme.effect === "snow" && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden text-white/70">
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              className="absolute text-xl"
              style={{
                left: `${(index * 19) % 100}%`,
                top: `${(index * 17) % 100}%`,
              }}
            >
              ❄
            </span>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold tracking-widest text-white/80">
              {theme.label}
            </p>

            <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
              <span>📍</span>
              <span>{place?.name || "Unknown Location"}</span>
            </div>
          </div>
        </div>

        {/* Weather Icon */}
        <div className="flex justify-center py-10">
          {theme.effect === "night" ? (
            <Moon
              size={120}
              strokeWidth={1.5}
              className="text-yellow-100 drop-shadow-2xl"
            />
          ) : (
            WeatherIcon && (
              <WeatherIcon
                size={120}
                strokeWidth={1.5}
                className="drop-shadow-2xl"
              />
            )
          )}
        </div>

        {/* Temperature */}
        <div className="text-center">
          <p className="text-7xl font-bold tracking-tight sm:text-8xl">
            {weather?.temperature ?? "--"}°
          </p>

          <p className="mt-3 text-xl font-semibold">
            {weather?.conditionLabel || "Loading..."}
          </p>

          <p className="mt-2 text-sm text-white/80">
            {weather?.description || "Weather information"}
          </p>
        </div>

        {/* Feels Like */}
        <div className="mt-12 rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
          <p className="text-sm text-white/70">Feels Like</p>

          <p className="mt-1 text-2xl font-semibold">
            {weather?.feelsLike ?? "--"}°
          </p>
        </div>

        {/* Weather Status */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
            <p className="text-xs text-white/70">Humidity</p>

            <p className="mt-1 text-lg font-semibold">
              {weather?.humidity ?? "--"}%
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
            <p className="text-xs text-white/70">Wind</p>

            <p className="mt-1 text-lg font-semibold">
              {weather?.windSpeed ?? "--"} km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherLiveCard;
