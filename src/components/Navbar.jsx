import React from "react";

export default function Navbar({ clearResume, loadResume }) {
  return (
    <nav className="navbar">
      <h1 className="navbar--heading">CV Builder</h1>
      <div className="navbar--btn-container">
        <button className="navbar--btn" onClick={clearResume}>
          Clear Resume
        </button>
        <button className="navbar--btn" onClick={loadResume}>
          Load Example
        </button>
      </div>
    </nav>
  );
}
