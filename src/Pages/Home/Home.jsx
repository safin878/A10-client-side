import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import TouristSpot from "../../Components/TouristSpot/TouristSpot";
import { useEffect, useState } from "react";
import Country from "../../Components/Countries/Country";

const Home = () => {
  const lodedata = useLoaderData();
  const [cdata, setcdata] = useState([]);
  console.log(lodedata);

  useEffect(() => {
    fetch("https://server-side-alpha-one.vercel.app/addtour")
      .then((res) => res.json())
      .then((data) => setcdata(data));
  }, []);
  return (
    <div className="conatiner mx-auto ">
      <Banner></Banner>

      <div className="container mx-auto flex flex-col justify-center items-center my-3">
        <h1 className="text-6xl font-bold">Tourists Spots</h1>
        <br />

        <div className="container w-[800px] grid grid-cols-3 gap-6 p-6">
          {cdata.map((dat) => (
            <Country key={dat._id} dat={dat}></Country>
          ))}
        </div>

        <h1 className="text-6xl font-bold">Countries</h1>
        <br />
        <div className="my-3 grid grid-cols-3 gap-12">
          {lodedata.map((loadspot) => (
            <TouristSpot key={loadspot._id} loadspot={loadspot}></TouristSpot>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
