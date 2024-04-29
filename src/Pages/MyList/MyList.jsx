import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import MyListCard from "../../Components/MyListCard/MyListCard";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [lists, setlists] = useState([]);
  useEffect(() => {
    fetch(`https://server-side-alpha-one.vercel.app/mylist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setlists(data));
  }, [user]);

  const [deleteui, setdeleteui] = useState(lists);
  console.log(deleteui);

  return (
    <div className=" p-4">
      <h1 className="text-4xl font-bold text-center my-4">
        My Added Tourist Spot
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {lists.map((list) => (
          <MyListCard
            key={list._id}
            list={list}
            deleteui={deleteui}
            setdeleteui={setdeleteui}
          ></MyListCard>
        ))}
      </div>
    </div>
  );
};

export default MyList;
