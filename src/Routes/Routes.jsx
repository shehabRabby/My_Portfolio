import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Aboutme from "../Pages/About/Aboutme";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import Academcia from "../Pages/Education/Academcia";
import Achievement from "../Pages/Achievement/Achievement";
import ReadStory from "../Pages/About/ReadStory";

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
        path: "/readmy-story",
        Component: ReadStory,
      },
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "/academic",
        Component: Academcia,
      },
      {
        path: "/achievement",
        Component: Achievement,
      },
      {
        path: "/contact-me",
        Component: Contact,
      },
    ],
  },
]);
