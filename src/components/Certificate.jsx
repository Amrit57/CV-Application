import { useState } from "react";

export default function Certificate({ handleChange, multipleImageRef }) {
  return (
    <div>
      <div className="section-title">
        <h2>Certificates & References</h2>
      </div>
      <div>
        <input
          type="file"
          ref={multipleImageRef}
          multiple
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
