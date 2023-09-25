import React from "react";

export default function Navbar({ clearResume, loadResume }) {
  return (
    <nav className="navbar">
      <div>
        <h1 className="navbar--heading">CV Builder</h1>
        <span>By </span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Amrit57/CV-Application"
        >
          Amrit Lama Syangbo
        </a>
      </div>
      <div className="navbar--tab-container">
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
