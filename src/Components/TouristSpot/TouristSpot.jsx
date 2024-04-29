// import { FaLocationDot } from "react-icons/fa6";

const TouristSpot = ({ loadspot }) => {
  const { image, description, location } = loadspot;
  console.log(loadspot);
  return (
    <div>
      {/* <div className="  bg-base-200 p-4  flex justify-end items-end gap-2">
        <div className=" flex flex-col lg:flex-row gap-3 ">
          <img src={image} className="max-w-80 rounded-lg shadow-2xl" />
          <div className=" card-body ">
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-xl my-3 flex  items-center">
              <FaLocationDot />
              <span> {location}</span>
            </p>
            <p className="py-4 text-xl -my-6">{description}</p>
          </div>
        </div>
        <button className="btn btn-primary ">View Details</button>
      </div> */}

      <div className="card w-96 bg-base-100 shadow-xl hover:scale-110 transition">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{location}</h2>
          <p className="text-[10px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TouristSpot;
