import { X } from "lucide-react";

const LocationModel = ({ closeBtn }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
      <div className="h-[300px] rounded-2xl w-[400px] bg-gray-100 shadow-2xl">
        <div className="flex justify-between p-5">
          <h2 className="text-xl font-medium">Where are you today?</h2>
          <button onClick={closeBtn}>
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModel;
