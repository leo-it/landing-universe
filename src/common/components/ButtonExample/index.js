import React from "react";

const ButtonOrange = ({bgColor, title}) => {
  return (
    <button className={`${bgColor} px-4 py-2 rounded text-white hover:bg-orange-600 transition-colors shadow-xl shadow-orange-200/80`}>
    {title}
    </button>
  );
};

export default ButtonOrange;
