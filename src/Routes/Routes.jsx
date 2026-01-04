import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Aboutme from "../Pages/About/Aboutme";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about-me",
        Component: Aboutme,
      },
      {
        path: "/contact-me",
        Component: Contact,
      },
    ],
  },
]);
