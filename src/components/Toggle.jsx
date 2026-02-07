import "../index.css";
import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";

const Toggle = ({ handleChange, isChecked }) => {
  return (
    <>
      <button
        id="check"
        className="toggle"
        onClick={handleChange}
        checked={isChecked}
      >
        {isChecked ? <IoSunnyOutline /> : <GoMoon />}
      </button>
    </>
  );
};
export default Toggle;
