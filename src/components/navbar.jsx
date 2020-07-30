import React from "react";

//stateless Fucntional Component

// snipet - sfc
const navBar = ({ totalCounters }) => {
  console.log("Navbar rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">{totalCounters}</span>
    </nav>
  );
};

export default navBar;
