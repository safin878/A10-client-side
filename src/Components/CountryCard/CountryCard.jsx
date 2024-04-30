import { useLoaderData } from "react-router-dom";
import CountrySpot from "../CountrySpot/CountrySpot";

const CountryCard = () => {
  const lodedcard = useLoaderData();
  console.log(lodedcard);
  return (
    <div className="container mx-auto flex flex-col justify-center items-center my-4">
      <h1 className="text-center">
        Most Popular Tourist Spot{" "}
        <span className="text-blue-500">{lodedcard[0].Country}</span>
      </h1>
      <div className="grid my-4 grid-cols-3 gap-6 container mx-auto">
        {lodedcard.map((load) => (
          <CountrySpot key={load._id} load={load}></CountrySpot>
        ))}
      </div>
    </div>
  );
};

export default CountryCard;
