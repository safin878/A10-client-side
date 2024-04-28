import { IoTime } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { HiCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";
import { TiWeatherCloudy } from "react-icons/ti";
const Country = ({ dat }) => {
  const {
    _id,
    ImgUrl,
    SpotName,
    TravelTime,
    TotaVisitorsPerYear,
    Seasonality,
    AvarageCost,
  } = dat;
  console.log(dat);
  return (
    <div className="w-96 hover:scale-110 transition">
      <div className="card w-96 glass">
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
          <Link to={`/view/${_id}`}>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Details</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Country;
