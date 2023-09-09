import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

export const routes = [
  {
    title: "Home",
    link: "/",
    element: <Home />,
    icon: <i class="fas fa-home    "></i>,
  },
  {
    title: "About",
    link: "/about",
    element: <About />,
    icon: <i class="fa fa-list" aria-hidden="true"></i>,
  },
  {
    title: "Contact",
    link: "/contact",
    element: <Contact />,
    icon: <i class="fa fa-address-book" aria-hidden="true"></i>,
  },
];
