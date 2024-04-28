import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const view = useLoaderData();
  console.log(view);
  return (
    <div>
      <h1>i am view details{view._id}</h1>
    </div>
  );
};

export default ViewDetails;
