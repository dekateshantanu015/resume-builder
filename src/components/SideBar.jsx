import React from "react";
import {
  FaUser,
  FaEllipsis,
  FaCircle,
  FaEye,
  FaBorderTopLeft,
} from "react-icons/fa6";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="layout-div">
        <div className="layout-btn-div">
          <button type="button" className="layout-btn">
            <FaUser />
          </button>
        </div>
        <button type="button" className="layout-opt-btn">
          <FaEllipsis />
        </button>
      </div>

      <div className="mode-btn-div">
        <button type="button" className="mode-btn">
          <FaBorderTopLeft></FaBorderTopLeft>
        </button>
      </div>
      <div className="prev-btn-div">
        <button type="button" className="prev-btn">
          <FaEye></FaEye>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
