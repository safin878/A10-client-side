import { useLoaderData } from "react-router-dom";
import { LuArrowBigRight } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

import { AiTwotoneDollar } from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";
import { IoTimeSharp } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";

const ViewDetails = () => {
  const view = useLoaderData();
  const {
    ImgUrl,
    TravelTime,
    TotaVisitorsPerYear,
    SpotName,
    Seasonality,
    Location,
    Country,
    AvarageCost,
  } = view;
  console.log(view);
  return (
    <div>
      <div className="container mx-auto flex flex-col items-center  my-2 w-[500px]">
        <img src={ImgUrl} alt="" className="border rounded-xl" />
        <h1 className="text-6xl">Tourist Spot Details</h1>
        <div className="flex flex-col items-start justify-start my-3">
          <div className="flex items-center">
            <LuArrowBigRight />
            <p>
              <span className="font-semibold">Tourists_Spot_Name:</span>{" "}
              {SpotName}
            </p>
          </div>
          <div className="flex items-center">
            <TbWorld />
            <p>
              <span className="font-semibold">Country_Name:</span> {Country}
            </p>
          </div>
          <div className="flex items-center">
            <FaLocationDot />
            <p>
              <span className="font-semibold">Location:</span> {Location}
            </p>
          </div>
          <div className="flex items-center">
            <AiTwotoneDollar />
            <p>
              <span className="font-semibold">Avarage_Cost:</span> {AvarageCost}
            </p>
          </div>
          <div className="flex items-center">
            <TiWeatherCloudy />
            <p>
              <span className="font-semibold">Seasonality:</span> {Seasonality}
            </p>
          </div>
          <div className="flex items-center">
            <IoTimeSharp />
            <p>
              <span className="font-semibold">Travel_Time:</span> {TravelTime}
            </p>
          </div>
          <div className="flex items-center">
            <IoPeopleOutline />
            <p>
              <span className="font-semibold">Total_Visitor_PerYear:</span>{" "}
              {TotaVisitorsPerYear}
            </p>
          </div>
          {/* <div className="flex items-center justify-center">
            <FaRegCommentAlt />
            <p>
              <span className="font-semibold">Short_Description:</span>{" "}
              {ShortDescription}
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
