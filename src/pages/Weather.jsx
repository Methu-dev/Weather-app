import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router";

import {
  // Cloud,
  CloudFog,
  CloudRain,
  CloudSun,
  Droplets,
  MapPin,
  Snowflake,
  Sun,
  ThermometerSnowflake,
  ThermometerSun,
  Wind,
  ArrowLeft,
} from "lucide-react";

import { getWeather } from "../services/get-weather";

import WeatherLiveCard from "../components/WeatherLiveCard";

const Weather = () => {
  const value = useLocation();
  const navigate = useNavigate();

  const place = value.state?.location;

  const [weather, setWeather] = useState(null);

  // Recommendation icons
  const recommendationIcons = {
    snow: Snowflake,
    rain: CloudRain,
    fog: CloudFog,
    hot: ThermometerSun,
    cold: ThermometerSnowflake,
    warm: Sun,
    sunny: Sun,
    cloudy: CloudSun,
    pleasant: Sun,
  };

  // Recommendation colors
  const recommendationStyles = {
    snow: "bg-sky-50 border-sky-100 text-sky-600",
    rain: "bg-blue-50 border-blue-100 text-blue-600",
    fog: "bg-slate-100 border-slate-200 text-slate-600",
    hot: "bg-orange-50 border-orange-100 text-orange-600",
    cold: "bg-cyan-50 border-cyan-100 text-cyan-600",
    warm: "bg-yellow-50 border-yellow-100 text-yellow-600",
    sunny: "bg-amber-50 border-amber-100 text-amber-600",
    cloudy: "bg-indigo-50 border-indigo-100 text-indigo-600",
    pleasant: "bg-green-50 border-green-100 text-green-600",
  };

  // Fetch weather
  useEffect(() => {
    if (!place) return;

    const fetchWeather = async () => {
      try {
        const result = await getWeather(place);

        console.log("WEATHER DATA:", result);

        setWeather(result);
      } catch (error) {
        console.log("Weather Error:", error);
      }
    };

    fetchWeather();
  }, [place]);

  // Rain conditions
  const Rain = ["drizzle", "rain", "freezing_rain", "showers"];

  // Smart recommendation
  function getRecommendations(weather) {
    if (!weather) return null;

    const rainChance = weather.precipitationProbability ?? 0;

    // Snow
    if (weather.condition === "snow") {
      return {
        type: "snow",
        label: "Snow Alert",
        text: "It's snowing. Wear warm clothes and take it slow outside.",
      };
    }

    // Thunderstorm
    if (weather.condition === "thunderstorm") {
      return {
        type: "rain",
        label: "Storm Alert",
        text: "Thunderstorms are possible. Stay indoors if possible.",
      };
    }

    // Rain
    if (Rain.includes(weather.condition) || rainChance >= 60) {
      return {
        type: "rain",
        label: "Rain Alert",
        text: `There's a ${rainChance}% chance of rain. Don't forget your umbrella.`,
      };
    }

    // Fog
    if (weather.condition === "fog") {
      return {
        type: "fog",
        label: "Fog Alert",
        text: "It's foggy. Drive carefully and keep some distance from other vehicles.",
      };
    }

    // Hot
    if (weather.temperature >= 32) {
      return {
        type: "hot",
        label: "Hot Day",
        text: "It's quite hot today. Take a water bottle with you.",
      };
    }

    // Cold
    if (weather.temperature <= 15) {
      return {
        type: "cold",
        label: "Cold Day",
        text: "It's cold today. Wear warm clothes before heading out.",
      };
    }

    // Warm
    if (weather.temperature >= 28) {
      return {
        type: "warm",
        label: "Warm Day",
        text: "It's warm today. Take some water with you.",
      };
    }

    // Sunny
    if (weather.condition === "clear") {
      return {
        type: "sunny",
        label: "Sunny Day",
        text: "Sunny skies ahead. Take water and consider carrying sunglasses.",
      };
    }

    // Cloudy
    if (
      weather.condition === "partly_cloudy" ||
      weather.condition === "cloudy"
    ) {
      return {
        type: "cloudy",
        label: "Cloudy Day",
        text: "Mostly cloudy today. A light jacket might come in handy.",
      };
    }

    // Default
    return {
      type: "pleasant",
      label: "Perfect Day",
      text: "The weather looks comfortable today. Enjoy your day!",
    };
  }

  const recommendation = weather ? getRecommendations(weather) : null;

  const RecommendationIcon = recommendation
    ? recommendationIcons[recommendation.type]
    : null;

  return (
    <div className="px-3 py-4 sm:px-5 lg:px-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-5 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="grid gap-5 lg:grid-cols-2">
        {/* ================= LEFT SIDE ================= */}

        <div className="space-y-5">
          {/* Main Weather Card */}

          <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-xl sm:p-7">
            {/* Heading */}

            <div className="mb-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
                Today's Weather
              </p>

              <div className="mt-2 flex items-center gap-2">
                <MapPin className="text-purple-500" size={26} />

                <h1 className="break-words text-2xl font-bold text-purple-700 sm:text-3xl">
                  {place?.name}
                </h1>
              </div>
            </div>

            {/* Temperature */}

            <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-purple-50 to-white p-5 sm:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Current Temperature
                  </p>

                  <h2 className="mt-1 text-5xl font-extrabold text-purple-800 sm:text-7xl">
                    {weather?.temperature ?? "--"}°
                    <span className="text-2xl sm:text-3xl">C</span>
                  </h2>
                </div>

                <p className="text-xl font-bold text-blue-700 sm:text-3xl">
                  {weather?.description}
                </p>
              </div>
            </div>

            {/* Weather Stats */}

            <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {/* Feels Like */}

              <div className="rounded-3xl border border-orange-100 bg-orange-50 p-4 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100">
                    <ThermometerSun size={23} className="text-orange-500" />
                  </div>

                  <span className="text-xs font-bold text-orange-400">
                    TEMP
                  </span>
                </div>

                <p className="mt-4 text-2xl font-bold text-orange-700">
                  {weather?.feelsLike ?? "--"}°C
                </p>

                <p className="mt-1 text-sm font-medium text-orange-500">
                  Feels Like
                </p>
              </div>

              {/* Humidity */}

              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-4 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100">
                    <Droplets size={23} className="text-blue-500" />
                  </div>

                  <span className="text-xs font-bold text-blue-400">AIR</span>
                </div>

                <p className="mt-4 text-2xl font-bold text-blue-700">
                  {weather?.humidity ?? "--"}%
                </p>

                <p className="mt-1 text-sm font-medium text-blue-500">
                  Humidity
                </p>
              </div>

              {/* Rain Chance */}

              <div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-4 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100">
                    <CloudRain size={23} className="text-cyan-500" />
                  </div>

                  <span className="text-xs font-bold text-cyan-400">RAIN</span>
                </div>

                <p className="mt-4 text-2xl font-bold text-cyan-700">
                  {weather?.precipitationProbability ?? "--"}%
                </p>

                <p className="mt-1 text-sm font-medium text-cyan-500">
                  Rain Chance
                </p>
              </div>

              {/* Wind */}

              <div className="rounded-3xl border border-purple-100 bg-purple-50 p-4 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100">
                    <Wind size={23} className="text-purple-500" />
                  </div>

                  <span className="text-xs font-bold text-purple-400">
                    WIND
                  </span>
                </div>

                <p className="mt-4 text-2xl font-bold text-purple-700">
                  {weather?.windSpeed ?? "--"}
                </p>

                <p className="mt-1 text-sm font-medium text-purple-500">
                  Wind Speed
                </p>
              </div>
            </div>
          </div>

          {/* Smart Recommendation */}

          <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-xl sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
                  Smart
                </p>

                <h2 className="text-xl font-bold text-gray-800">
                  Recommendations
                </h2>
              </div>

              <div className="rounded-2xl bg-blue-50 p-3">
                <Sun className="text-blue-500" size={24} />
              </div>
            </div>

            {recommendation && (
              <div
                className={`mt-5 flex items-center gap-4 rounded-3xl border p-4 sm:p-5 ${
                  recommendationStyles[recommendation.type]
                }`}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
                  {RecommendationIcon && <RecommendationIcon size={28} />}
                </div>

                <div>
                  <h3 className="font-bold">{recommendation.label}</h3>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {recommendation.text}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <WeatherLiveCard weather={weather} place={place} />
      </div>
    </div>
  );
};

export default Weather;
