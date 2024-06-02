import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, useLocation } from "react-router-dom";

/* Import locomotive-scroll */
import LocomotiveScroll from "locomotive-scroll";

/* Locomotive scroll instance */
const locomotiveScroll = new LocomotiveScroll();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    locomotiveScroll.scrollTo("top", { immediate: true }); // Scroll to the top of the page
  }, [pathname]);

  return null;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
