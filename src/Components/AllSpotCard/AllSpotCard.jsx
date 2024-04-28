import { IoTime } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { HiCurrencyDollar } from "react-icons/hi";

import { TiWeatherCloudy } from "react-icons/ti";

const AllSpotCard = ({ allTourist }) => {
  const {
    ImgUrl,
    SpotName,
    TravelTime,
    TotaVisitorsPerYear,
    Seasonality,
    AvarageCost,
  } = allTourist;
  return (
    <div>
      <div className="card w-96 glass hover:scale-105 transition">
        <figure>
          <img src={ImgUrl} alt="car!" />
        </figure>
        <div className="card-body text-[13px]">
          <h2 className="card-title text-2xl">{SpotName}</h2>
          <div className="flex items-center gap-2 text-[10px]">
            <TiWeatherCloudy />

            <p>{Seasonality}</p>
          </div>
          <div className="flex gap-3">
            <div className="flex gap-2 items-center">
              <IoTime />
              <p>{TravelTime}</p>
            </div>

            <hr className="bg-red-700" />
            <div className="flex items-center gap-3">
              <BsPeopleFill />

              <p>{TotaVisitorsPerYear}</p>
            </div>
            <div className="flex items-center gap-3">
              <HiCurrencyDollar />

              <p>{AvarageCost}</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSpotCard;
