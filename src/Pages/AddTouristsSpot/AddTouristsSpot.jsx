import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/Authprovider";

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);
  const handeladdtour = (e) => {
    e.preventDefault();
    const form = e.target;
    const ImgUrl = form.ImgUrl.value;
    const SpotName = form.SpotName.value;
    const Country = form.Country.value;
    const Location = form.Location.value;
    const ShortDescription = form.ShortDescription.value;
    const AvarageCost = form.AvarageCost.value;
    const Seasonality = form.Seasonality.value;
    const TravelTime = form.TravelTime.value;
    const TotaVisitorsPerYear = form.TotaVisitorsPerYear.value;
    const email = form.email.value;
    const UserName = form.UserName.value;

    const AllInfo = {
      ImgUrl,
      SpotName,
      Country,
      Location,
      ShortDescription,
      AvarageCost,
      Seasonality,
      TravelTime,
      TotaVisitorsPerYear,
      email,
      UserName,
    };
    console.log(
      ImgUrl,
      SpotName,
      Country,
      Location,
      ShortDescription,
      AvarageCost,
      Seasonality,
      TravelTime,
      TotaVisitorsPerYear,
      email,
      UserName
    );

    fetch("https://server-side-alpha-one.vercel.app/addtour", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(AllInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "success",
            text: "Added successful",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Tourist Spot</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handeladdtour} className="p-6 ">
              <div className="grid grid-cols-3 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">ImgUrl</span>
                  </label>
                  <input
                    type="text"
                    placeholder="ImgUrl"
                    className="input input-bordered "
                    name="ImgUrl"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-sm">Spot Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Tourist Spot Name"
                    className="input input-bordered"
                    name="SpotName"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Country Name</span>
                  </label>
                  <select
                    name="Country"
                    className="select select-primary w-full max-w-xs"
                  >
                    <option disabled selected>
                      Select Your Country
                    </option>
                    <option>Bangladesh</option>
                    <option>Thailand</option>
                    <option>Indonesia</option>
                    <option>Malaysia</option>
                    <option>Vietnam</option>
                    <option>Cambodia</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Location"
                    className="input input-bordered"
                    name="Location"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Short Description"
                    className="input input-bordered"
                    name="ShortDescription"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Avarage Cost</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Avarage Cost"
                    className="input input-bordered"
                    name="AvarageCost"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Seasonality</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Seasonality"
                    className="input input-bordered"
                    name="Seasonality"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Travel Time</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Travel Time"
                    className="input input-bordered"
                    name="TravelTime"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">VisitorsPerYear</span>
                  </label>
                  <input
                    type="text"
                    placeholder="TotaVisitorsPerYear"
                    className="input input-bordered"
                    name="TotaVisitorsPerYear"
                    required
                  />
                </div>

                <div className="form-control col-span-3">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="User Email"
                    className="input input-bordered"
                    name="email"
                    defaultValue={user.email}
                    disabled
                  />
                </div>
                <div className="form-control col-span-3">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="User Name"
                    className="input input-bordered"
                    name="UserName"
                    defaultValue={user.displayName}
                    disabled
                  />
                </div>
              </div>
              <div className="form-control mt-6 w-full">
                <button className="btn btn-primary w-full">Add Place</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
