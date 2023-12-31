import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Jobs from "../Pages/Jobs/Jobs";
import Contacts from "../Pages/Contacts/Contacts";
import About from "../Pages/About/About";
import Favorite from "../Pages/Favorite/Favorite";
import Signup from "../Pages/Auth/Signup/Signup";
import Login from "../Pages/Auth/Login/Login";
import Error from "../Pages/Error/Error";

export const Routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
  },
]);
