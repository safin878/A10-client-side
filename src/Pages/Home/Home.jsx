import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import TouristSpot from "../../Components/TouristSpot/TouristSpot";
import { useEffect, useState } from "react";
import Country from "../../Components/Countries/Country";
import Choose from "../../Components/Choose/Choose";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Home = () => {
  const lodedata = useLoaderData();
  const [cdata, setcdata] = useState([]);
  console.log(lodedata);

  useEffect(() => {
    fetch("https://server-side-alpha-one.vercel.app/addtour")
      .then((res) => res.json())
      .then((data) => setcdata(data));
  }, []);

  const [typeEffect] = useTypewriter({
    words: ["Explore", "Fun", "Enjoy"],
    loop: {},
  });
  return (
    <div className="conatiner mx-auto p-6">
      <Banner></Banner>

      <div className="container mx-auto flex flex-col justify-center items-center my-3">
        <h1 className="text-6xl font-bold">
          Tourists Spots {""}
          <span style={{ fontWeight: "bold", color: "blue" }}>
            {typeEffect}
          </span>
          <Cursor />
        </h1>
        <br />

        <div className="container w-[800px] grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {cdata.map((dat) => (
            <Country key={dat._id} dat={dat}></Country>
          ))}
        </div>

        <h1 className="text-6xl font-bold">Countries</h1>
        <br />
        <div className="my-3 grid grid-cols-2 md:grid-cols-3 gap-12">
          {lodedata.map((loadspot) => (
            <TouristSpot key={loadspot._id} loadspot={loadspot}></TouristSpot>
          ))}
        </div>
        <h1 className="text-6xl font-bold my-4">Choose Tour & Travel Types</h1>
        <Choose></Choose>

        <h1 className="text-6xl font-bold my-4">Traveler Testimonials</h1>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
