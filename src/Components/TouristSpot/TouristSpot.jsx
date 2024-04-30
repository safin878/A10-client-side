import { Link } from "react-router-dom";
const TouristSpot = ({ loadspot }) => {
  const { image, description, location } = loadspot;

  return (
    <div>
      <Link to={`/country/${location}`}>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-110 transition">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{location}</h2>
            <p className="text-[10px]">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TouristSpot;
