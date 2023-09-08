import React from "react";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
