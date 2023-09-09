import React, { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Configs/routeConfigs";

function App() {
  return (
    <div className="">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        {routes.map((route, i) => (
          <Route key={i} path={route.link} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
