import React from "react";

export default function ImagePreview({ imageSrc, handleClick }) {
  return (
    <div className="preview-container">
      <img
        className="image-preview"
        onClick={handleClick}
        id="preiewImage"
        src={imageSrc}
        alt=""
      />
    </div>
  );
}
