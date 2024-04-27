import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userCreate } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  const handelonReg = (e) => {
    // e.preventDefault();
    const { name, email, photo, password } = e;

    console.log(name, email, photo, password);
    userCreate(email, password)
      .then((result) => {
        // Signed in
        console.log(result.user);
        Swal.fire({
          title: "success",
          text: "Registration successful",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(location?.state ? location.state : "/");

        const userreg = { name, email, photo, password };
        fetch(
          "https://server-side-67k6rwg3o-safins-projects-cd50fb79.vercel.app/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userreg),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        //Update Profile

        updateProfile(result.user, {
          displayName: `${name}`,
          photoURL: `${photo}`,
        })
          .then(() => {
            // Profile updated!
            console.log("Profile Updated Successfully");
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <div>
      <div className="hero min-h-screen  container mx-auto">
        <div className="hero-content w-full flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handelonReg)} className="w-96 p-6">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  type="text"
                  placeholder="Write Your Name"
                  className="input input-bordered"
                  name="name"
                />
                <div>
                  {errors.name && (
                    <p className="text-red-600">{errors.name.message}</p>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />

                <div>
                  {errors.email && (
                    <p className="text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  {...register("photo", {
                    required: {
                      value: true,
                      message: "Photo Url is required",
                    },
                  })}
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  name="photo"
                />
                <div>
                  {errors.photo && (
                    <p className="text-red-600">{errors.photo.message}</p>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])/,
                      message:
                        "Password must contain one uppercase letter and one lowercase letter",
                    },
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>

          <p>
            {" "}
            You Have An Account Please{" "}
            <Link className="font-bold text-blue-700" to="/login">
              Login!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
