import { useState } from "react";
import LocationModel from "../components/LocationModel";

const Home = () => {
  const [click, setClick] = useState(false);
  console.log(click);
  return (
    <div>
      <div>
        <h1 className="text-6xl text-blue-200 font-extrabold">
          NextLevel <span className="text-blue-400">Weather</span>
        </h1>
        <p className="text-center text-gray-300 py-3 text-md">
          Check your weather today in next level
        </p>
      </div>

      <div className="justify-center flex">
        <button
          type="button"
          className="text-lg bg-blue-500 text-gray-100 rounded-4xl font-medium hover:scale-105 transition-all delay-400 px-5 cursor-pointer py-1"
          onClick={() => setClick(true)}
        >
          Click Weather
        </button>
      </div>
      {click && <LocationModel closeBtn={() => setClick(false)} />}
    </div>
  );
};

export default Home;
