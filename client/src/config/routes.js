import { About, LandingPage, Projects } from "../pages";

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
];

export default routes;
