import React from "react";

function ColorPicker(props) {
  
  return (
      <div id="color_picker_box">
        <div className="color_box" style={{ backgroundColor: `${props.hexaName  }` }}></div>
        <div className="color_name_box">
          <h5 className="color_name_hexa">{props.hexaName}</h5>
          <p className="color_name">{props.name}</p>
        </div>
      </div>
  );
}

export default ColorPicker;
