import React, { useState } from "react";
import bg from "./assets/bg.png";
import Home from "./pages/Home";
import About from "./pages/About";
import FloatingMenu from "./components/Nav";

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <>
      {/* 🔥 FIXED GLOBAL BACKGROUND */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: -10,
        }}
      />

      {/* Optional dark overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.7)",
          zIndex: -9,
        }}
      />

      <FloatingMenu setPage={setPage} />

      {page === "home" && <Home />}
      {page === "about" && <About />}
    </>
  );
};

export default App;
