const AddTouristsSpot = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Tourist Spot</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="p-6 ">
              <div className="grid grid-cols-3 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">ImgUrl</span>
                  </label>
                  <input
                    type="email"
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
                  <input
                    type="text"
                    placeholder="Country Name"
                    className="input input-bordered"
                    name="CountryName"
                    required
                  />
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
                    required
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
                    required
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
