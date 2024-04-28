import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import TouristSpot from "../../Components/TouristSpot/TouristSpot";
const Home = () => {
  const lodedata = useLoaderData();
  console.log(lodedata);
  return (
    <div>
      <Banner></Banner>

      <div className="container mx-auto flex flex-col justify-center items-center my-3">
        <h1 className="text-6xl font-bold">Countries</h1>
        <br />
        <div className="my-3 grid grid-cols-3 gap-3">
          {lodedata.map((loadspot) => (
            <TouristSpot key={loadspot._id} loadspot={loadspot}></TouristSpot>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
