import { Link, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./config";
import "./styles/styles.css";
import LoadingBar from "react-top-loading-bar";

import { BorderOverlay } from "./components";
import { useEffect, useState } from "react";

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoadingProgress(0); // Reset loading progress when route changes
    };

    const handleRouteChangeComplete = () => {
      setLoadingProgress(100); // Set loading progress to 100 when route changes complete
      setTimeout(() => {
        setLoadingProgress(0); // Reset loading progress after a short delay
      }, 500); // Adjust delay time as needed
    };

    const removeRouteChangeListeners = () => {
      window.removeEventListener("routeChangeStart", handleRouteChangeStart);
      window.removeEventListener(
        "routeChangeComplete",
        handleRouteChangeComplete
      );
    };

    window.addEventListener("routeChangeStart", handleRouteChangeStart);
    window.addEventListener("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      removeRouteChangeListeners(); // Cleanup event listeners on component unmount
    };
  }, []);

  return (
    <div id="mainContainer" className="mainContainer">
      {/* Loading Bar */}
      <LoadingBar
        color="#FFA500"
        progress={loadingProgress}
        onLoaderFinished={() => setLoadingProgress(0)}
      />

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
