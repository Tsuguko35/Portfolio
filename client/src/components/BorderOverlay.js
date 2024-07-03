import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/borderOverlay.css";

import { Squeeze as Hamburger } from "hamburger-react";

// Icons
import * as faIcons from "react-icons/fa";
import { GetWindowWidth } from "../utils";
import { routes } from "../config";

function BorderOverlay() {
  const location = useLocation();
  const windowWidth = GetWindowWidth();

  const [scrollDirection, setScrollDirection] = useState(null);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navOpen]);

  const routeLocation = useMemo(() => {
    return window.location.pathname;
  }, [location]);

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
      {windowWidth < 768 && (
        <nav className={`mobile-nav ${navOpen ? "open" : ""}`}>
          <div className="wrapper">
            <div className="nav-items mobile">
              <Link
                to={"/Home"}
                className={
                  routeLocation === "/" ||
                  routeLocation === "/Home" ||
                  !routes.some((route) =>
                    route.path.includes(location.pathname)
                  )
                    ? "active"
                    : ""
                }
                onClick={() => setNavOpen(false)}
              >
                Home
              </Link>
              <Link
                to={"/Projects"}
                className={routeLocation === "/Projects" ? "active" : ""}
                onClick={() => setNavOpen(false)}
              >
                Projects
              </Link>
              <Link
                to={"/About"}
                className={routeLocation === "/About" ? "active" : ""}
                onClick={() => setNavOpen(false)}
              >
                About
              </Link>
              <Link
                to={"/Contact"}
                className={routeLocation === "/Contact" ? "active" : ""}
                onClick={() => setNavOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      )}
      <div
        className={`top-nav ${
          windowWidth < 768 && navOpen ? "mobile-open" : ""
        }`}
      >
        <div
          className={`nav-grid ${scrollDirection === "down" ? "down" : "up"} ${
            navOpen ? "mobile-open" : ""
          }`}
        >
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
                  routeLocation === "/" ||
                  routeLocation === "/Home" ||
                  !routes.some((route) =>
                    route.path.includes(location.pathname)
                  )
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
          <div className="right">
            <Hamburger
              toggled={navOpen}
              toggle={setNavOpen}
              label="Show Nav"
              hideOutline={true}
              color="#d9d9d9"
            />
          </div>
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
        {/* <span className="scroll-top">scroll to top</span> */}
      </div>
    </div>
  );
}

export default BorderOverlay;
