import React, { Component } from "react";

//stateless Fucntional Component

// snipet - sfc
const navBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">{props.totalCounters}</span>
    </nav>
  );
};

export default navBar;
