import Root from "../Root/Root";
import { createBrowserRouter } from "react-router-dom";
import AllTouristsSpot from "../Pages/AllTouristsSpot/AllTouristsSpot";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTouristsSpotAddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import MyList from "../Pages/MyList/MyList";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://server-side-alpha-one.vercel.app/alltourists"),
      },
      {
        path: "/alltourists",
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addtour",
        element: (
          <PrivateRoute>
            {" "}
            <AddTouristsSpotAddTouristsSpot></AddTouristsSpotAddTouristsSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/mylist",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
