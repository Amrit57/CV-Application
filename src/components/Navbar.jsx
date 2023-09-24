import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
        <h1 className="navbar--heading">
            CV Builder
        </h1>
      <div className="navbar--btn-container">
        <button className="navbar--btn" type="button">
          Clear Resume
        </button>
        <button className="navbar--btn" type="button">
         Download
        </button>
      </div>
    </nav>
  );
}
