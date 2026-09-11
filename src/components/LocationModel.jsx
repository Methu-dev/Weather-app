import { X } from "lucide-react";
import { useState } from "react";

const LocationModel = ({ closeBtn }) => {
  const [city, setCity] = useState("");

  const hendleSubmit = (e) => {
    e.preventDefault();
    const value = city.trim();
    setCity("");
    console.log(value);
  };

  const handleGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (positions) => {
        const { latitude, longitude } = positions.coords;
        console.log({ latitude, longitude });
      },
      (error) => {
        console.log(error);
      },
      {
        timeout: 10000,
      },
    );
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className="h-[300px] rounded-2xl w-[400px] bg-gray-100 shadow-2xl">
        <div className="flex justify-between p-5">
          <h2 className="text-xl font-medium">Where are you today?</h2>
          <button onClick={closeBtn}>
            <X />
          </button>
        </div>
        <div className="pt-5">
          <form onSubmit={hendleSubmit} className="px-4">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border rounded-2xl"
              placeholder="Enter your city"
            />

            <div className=" py-5">
              <button
                type="submit"
                className="w-full text-lg bg-blue-500 text-gray-100 rounded-4xl font-medium hover:scale-105 transition-all delay-400 px-5 cursor-pointer py-1"
                onClick={""}
              >
                Get Weather
              </button>
            </div>
          </form>
        </div>
        <div className="text-center">or</div>
        <div>
          <div className=" py-5 px-4">
            <button
              type="button"
              className="w-full text-lg bg-blue-500 text-gray-100 rounded-4xl font-medium hover:scale-105 transition-all delay-400 px-5 cursor-pointer py-1"
              onClick={handleGeoLocation}
            >
              Use My Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModel;
