import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSun,
  Snowflake,
  Sun,
} from "lucide-react";

export const getWeatherTheme = (icon) => {
  switch (icon) {
    case "clear":
      return {
        background:
          "bg-gradient-to-br from-yellow-400 via-orange-400 to-amber-600",
        icon: Sun,
        label: "SUNNY WEATHER",
        effect: "sun",
      };

    case "clear_night":
      return {
        background:
          "bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950",
        icon: null,
        label: "CLEAR NIGHT",
        effect: "night",
      };

    case "partly_cloudy":
      return {
        background:
          "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600",
        icon: CloudSun,
        label: "PARTLY CLOUDY",
        effect: "cloud",
      };

    case "cloudy":
      return {
        background:
          "bg-gradient-to-br from-slate-500 via-gray-600 to-slate-800",
        icon: Cloud,
        label: "CLOUDY WEATHER",
        effect: "cloud",
      };

    case "fog":
      return {
        background:
          "bg-gradient-to-br from-gray-400 via-slate-500 to-gray-700",
        icon: CloudFog,
        label: "FOGGY WEATHER",
        effect: "fog",
      };

    case "rain":
      return {
        background:
          "bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-700",
        icon: CloudRain,
        label: "RAINY WEATHER",
        effect: "rain",
      };

    case "snow":
      return {
        background:
          "bg-gradient-to-br from-sky-400 via-cyan-500 to-blue-600",
        icon: Snowflake,
        label: "SNOWY WEATHER",
        effect: "snow",
      };

    case "storm":
      return {
        background:
          "bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950",
        icon: CloudLightning,
        label: "STORMY WEATHER",
        effect: "storm",
      };

    default:
      return {
        background:
          "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600",
        icon: Cloud,
        label: "LIVE WEATHER",
        effect: "cloud",
      };
  }
};