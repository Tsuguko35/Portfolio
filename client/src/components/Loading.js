import React, { useEffect } from "react";
import "../styles/loading.css";
import { useLocation } from "react-router-dom";

function Loading() {
  const location = useLocation();
  useEffect(() => {
    const div_Hide = document.querySelectorAll(".hide");
    div_Hide.forEach((div_Item) => {
      div_Item.classList.remove("hide");
    });
    const text = document.getElementById("loading-text");
    const loading = document.getElementById("loading");

    if (loading) {
      loading.classList.remove("active");
      setTimeout(() => {
        loading.classList.add("active");
      }, 1000);
    }
    if (text) {
      setTimeout(() => {
        text.classList.add("hide");
      }, 500);
    }
    // Function to add the hide class to a specific div by its id
    const hideDiv = (id) => {
      const div = document.querySelectorAll(id);

      if (div) {
        div.forEach((div_Item) => {
          div_Item.classList.remove("hide");
          div_Item.classList.add("hide");
        });
      }
    };

    // Loop to add hide class iteratively with delay
    setTimeout(() => {
      for (let i = 1; i <= 8; i++) {
        setTimeout(() => hideDiv(`.loading-${i}`), i * 50); // Adjust the delay as needed
      }
    }, 500);
  }, [location.pathname]);

  return (
    <div id="loading" className="loading">
      <p id="loading-text">Loading...</p>
      <div className="loading-backgorund">
        <div className="loading-1"></div>
        <div className="loading-2"></div>
        <div className="loading-3"></div>
        <div className="loading-4"></div>
        <div className="loading-5"></div>
        <div className="loading-6"></div>
        <div className="loading-7"></div>
        <div className="loading-8"></div>
        <div className="loading-7"></div>
        <div className="loading-6"></div>
        <div className="loading-5"></div>
        <div className="loading-4"></div>
        <div className="loading-3"></div>
        <div className="loading-2"></div>
        <div className="loading-1"></div>
      </div>
    </div>
  );
}

export default Loading;
