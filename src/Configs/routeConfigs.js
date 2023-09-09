import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

export const routes = [
  {
    title: "Home",
    link: "/",
    element: <Home />,
  },
  {
    title: "About",
    link: "/about",
    element: <About />,
  },
  {
    title: "Contact",
    link: "/contact",
    element: <Contact />,
  },
];
