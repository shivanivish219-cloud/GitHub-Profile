// src/Routes/AppRouter.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Search from "../Pages/Search/Search";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Repositories from "../Pages/Repositories/Repositories";
import Gists from "../Pages/Gists/Gists";
import Followers from "../Pages/Followers/Followers";
import Following from "../Pages/Following/Following";
// import UserCard from "../Components/UserCard/UserCard";
import Navbar from "../Components/Navbar/Navbar";
// import UserCard from "../UserCard/UserCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      // {
      //   path: "/users/:usercard",
      //   element: <UserCard />,
      // },
      {
        // path: "repo",
        path: "users/:username",
        element: <UserProfile />,
      },
      {
        path: "users/:username/repos",
        element: <Repositories />,
      },
      {
        path: "users/:username/gists",
        element: <Gists />,
      },
      {
        path: "users/:username/followers",
        element: <Followers />,
      },
      {
        path: "users/:username/following",
        element: <Following />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
