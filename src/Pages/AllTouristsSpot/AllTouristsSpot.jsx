import { useLoaderData } from "react-router-dom";
import AllSpotCard from "../../Components/AllSpotCard/AllSpotCard";

const AllTouristsSpot = () => {
  const AllTourists = useLoaderData();
  return (
    <div className="container mx-auto p-12">
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-6 ">
        {AllTourists.map((allTourist) => (
          <AllSpotCard
            key={allTourist._id}
            allTourist={allTourist}
          ></AllSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
