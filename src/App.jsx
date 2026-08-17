import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const startTime = Date.now();
    const minimumLoaderTime = 2000;

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;

      const remainingTime = Math.max(
        0,
        minimumLoaderTime - elapsed
      );
      setTimeout(() => {
        setLoading(false);
      }, remainingTime);
    };
    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
    }
    return () => {
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {loading && <Loader />}
    </BrowserRouter>
  );
}