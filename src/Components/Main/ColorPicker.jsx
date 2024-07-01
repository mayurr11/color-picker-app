import React, { useState } from "react";
import "./ColorPicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import tinycolor from "tinycolor2";

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleClick = () => {
    navigator.clipboard.writeText(color);
  };

  const fontColor = tinycolor(color).isLight() ? "black" : "white";

  return (
    <div className="color-picker-container">
      <div
        className="color-picker"
        style={{ 
            background: color, 
            boxShadow: `0px 0px 25px ${color}`,
            color: fontColor 
        }}
      >
        <p className="color-name">{color}</p>
        <button className="copy-btn" onClick={handleClick}>
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
      <div className="input-container">
        <label htmlFor="color">Pick a Color:</label>
        <input
          type="color"
          id="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
