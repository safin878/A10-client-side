import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const Updated = () => {
  const update = useLoaderData();
  const {
    _id,
    ImgUrl,
    SpotName,
    ShortDescription,
    Location,
    Country,
    AvarageCost,
    Seasonality,
    TravelTime,
    TotaVisitorsPerYear,
  } = update;
  const handeluptour = (e) => {
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
      TotaVisitorsPerYear
    );

    fetch(`https://server-side-alpha-one.vercel.app/mylistbyid/${_id}`, {
      method: "PuT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(AllInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "card Updated successful",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="container mx-auto">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update Tourist Spot:{SpotName}</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handeluptour} className="p-6 ">
            <div className="grid grid-cols-3 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">ImgUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="ImgUrl"
                  className="input input-bordered "
                  defaultValue={ImgUrl}
                  name="ImgUrl"
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
                  defaultValue={SpotName}
                  name="SpotName"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Country Name</span>
                </label>
                <select
                  name="Country"
                  defaultValue={Country}
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
                  defaultValue={Location}
                  name="Location"
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
                  defaultValue={ShortDescription}
                  name="ShortDescription"
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
                  defaultValue={AvarageCost}
                  name="AvarageCost"
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
                  defaultValue={Seasonality}
                  name="Seasonality"
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
                  defaultValue={TravelTime}
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
                  defaultValue={TotaVisitorsPerYear}
                />
              </div>
            </div>
            <div className="form-control mt-6 w-full">
              <button className="btn btn-primary w-full">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updated;
