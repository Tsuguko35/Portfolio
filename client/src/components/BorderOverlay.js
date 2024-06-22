import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/borderOverlay.css";

// Icons
import * as faIcons from "react-icons/fa";

function BorderOverlay() {
  const location = useLocation();

  const [scrollDirection, setScrollDirection] = useState(null);

  const routeLocation = useMemo(() => {
    return window.location.pathname;
  }, [location]);
  console.log(routeLocation);

  useEffect(() => {
    let lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="pageBorder" className="pageBorder">
      <div className="border"></div>
      <div className="top-nav">
        <div className="nav-grid">
          <div className="left">
            <p>
              J
              <span className={`${scrollDirection === "down" ? "down" : "up"}`}>
                Carpio
              </span>
            </p>
          </div>
          <div
            className={`middle ${scrollDirection === "down" ? "down" : "up"}`}
          >
            <div className="nav-items">
              <Link
                to={"/Home"}
                className={
                  routeLocation === "/" || routeLocation === "/Home"
                    ? "active"
                    : ""
                }
              >
                Home
              </Link>
              <Link
                to={"/Projects"}
                className={routeLocation === "/Projects" ? "active" : ""}
              >
                Projects
              </Link>
              <Link
                to={"/About"}
                className={routeLocation === "/About" ? "active" : ""}
              >
                About
              </Link>
              <Link
                to={"/Contact"}
                className={routeLocation === "/Contact" ? "active" : ""}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
      <div className="bottom-nav">
        <div className="social-icons">
          <Link
            to={"https://www.facebook.com/tsuguko34/"}
            target="_blank"
            className="icon"
          >
            <faIcons.FaFacebookSquare />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/jazphercarpio"}
            target="_blank"
            className="icon"
          >
            <faIcons.FaLinkedin />
          </Link>
        </div>
        <span className="scroll-top">scroll to top</span>
      </div>
    </div>
  );
}

export default BorderOverlay;
