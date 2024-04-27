import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGithub } from "react-icons/fa";
import auth from "../../firebase/firebase.init";
import { FcGoogle } from "react-icons/fc";
import { GithubAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { login, Googlelog, Gitglelog } = useContext(AuthContext);

  const providergit = new GithubAuthProvider();
  const provider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();

  const hog = (e) => {
    e.preventDefault();
    Googlelog(auth, provider)
      .then((result) => {
        // Signed in

        console.log("Login Successfully", result);

        Swal.fire({
          title: "success",
          text: "Google Login successful",
          icon: "success",
          confirmButtonText: "Ok",
        });

        navigate(location?.state ? location.state : "/");

        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hogit = (e) => {
    e.preventDefault();
    Gitglelog(auth, providergit)
      .then((result) => {
        // Signed in

        console.log("Login Successfully by GitHub", result);
        Swal.fire({
          title: "success",
          text: "Github Login successful",
          icon: "success",
          confirmButtonText: "Ok",
        });

        navigate(location?.state ? location.state : "/");

        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelonlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        // Signed in
        console.log(result.user);
        Swal.fire({
          title: "success",
          text: "Login successful",
          icon: "success",
          confirmButtonText: "Ok",
        });

        navigate(location?.state ? location.state : "/");

        // ...
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <div>
      <div></div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelonlog} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
          <div className="flex gap-5">
            <button onClick={hog} className="btn btn-outline">
              <span>
                <FcGoogle />
              </span>
              Google
            </button>
            <button onClick={hogit} className="btn btn-outline btn-primary">
              <span>
                <FaGithub />
              </span>
              Github
            </button>
          </div>
          <p>
            {" "}
            You Do not Have An Account Please{" "}
            <Link className="font-bold text-blue-700" to="/register">
              Regester!
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
