import { FaTripadvisor } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdLocationCity } from "react-icons/md";
import { FaCampground } from "react-icons/fa";

const Choose = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-2  md:flex gap-4">
          <div className="card-body items-center text-center w-96 bg-white shadow-xl hover:scale-110 transition border rounded-lg">
            <FaTripadvisor className="text-5xl" />
            <h2 className="card-title">Adventures</h2>
            <p className="text-[8px]">20 Destination</p>
          </div>
          <div className="card-body items-center text-center w-96 bg-white shadow-xl hover:scale-110 transition border rounded-lg">
            <MdOutlineTravelExplore className="text-5xl" />
            <h2 className="card-title">Exploring</h2>
            <p className="text-[8px]">25 Destination</p>
          </div>
          <div className="card-body items-center text-center w-96 bg-white shadow-xl hover:scale-110 transition border rounded-lg">
            <MdLocationCity className="text-5xl" />
            <h2 className="card-title">City Tour </h2>
            <p className="text-[8px]">15 Destination</p>
          </div>
          <div className="card-body items-center text-center w-96 bg-white shadow-xl hover:scale-110 transition border rounded-lg">
            <FaCampground className="text-5xl" />
            <h2 className="card-title">Camping</h2>
            <p className="text-[8px]">35 Destination</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
