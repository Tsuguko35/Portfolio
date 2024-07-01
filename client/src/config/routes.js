import { About, LandingPage, Projects } from "../pages";
import Contact from "../pages/Contact";

const routes = [
  {
    path: "/",
    component: <LandingPage />,
  },
  {
    path: "/Home",
    component: <LandingPage />,
  },
  {
    path: "/Projects",
    component: <Projects />,
  },
  {
    path: "/About",
    component: <About />,
  },
  {
    path: "/Contact",
    component: <Contact />,
  },
];

export default routes;
