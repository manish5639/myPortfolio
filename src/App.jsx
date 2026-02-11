import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/home";
import bg from "./assets/bg.png";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bg})` }}
      />

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm -z-10" />

      <Nav />
      <Home />

    </div>
  );
};

export default App;
