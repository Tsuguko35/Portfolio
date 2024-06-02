import { Link, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./config";
import "./styles/styles.css";
import LoadingBar from "react-top-loading-bar";

import { BorderOverlay, Loading } from "./components";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();

  return (
    <div id="mainContainer" className="mainContainer">
      {/* Loading */}
      <Loading />

      {/* Page Border */}
      <BorderOverlay />

      {/* Main Content */}
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
