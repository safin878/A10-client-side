import { FaLocationDot } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyListCard = ({ list, deleteui, setdeleteui }) => {
  const { _id, ImgUrl, SpotName, ShortDescription, Location } = list;

  const handeldelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-side-alpha-one.vercel.app/mylist/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Card has been deleted.",
                icon: "success",
              });

              const remaining = deleteui.filter((delet) => delet._id !== _id);
              setdeleteui(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className=" bg-base-200 hover:scale-110 transition border rounded-lg ">
        <div className="flex gap-6 p-4">
          <img src={ImgUrl} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">{SpotName}</h1>
            <div className="flex items-center gap-2">
              <FaLocationDot></FaLocationDot>
              <p className="text-[7px] my-3">{Location}</p>
            </div>
            <p className="py-6 text-[10px]">{ShortDescription}</p>
            <div className="flex gap-3">
              <Link to={`/updated/${_id}`}>
                <div className="">
                  <button className="btn btn-primary flex items-center">
                    {" "}
                    <FaEdit />
                    Update
                  </button>
                </div>
              </Link>

              <div>
                <button
                  onClick={() => handeldelete(_id)}
                  className="btn btn-secondary hover:bg-red-500  text-white"
                >
                  <MdDelete /> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListCard;
