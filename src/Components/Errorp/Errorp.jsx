import { Link } from "react-router-dom";
const Errorp = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-96"
          src="https://i.postimg.cc/dVDmnJ7c/5203299.jpg"
          alt=""
        />
        <Link to="/">
          <button className="btn btn-primary">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Errorp;
