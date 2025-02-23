import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-gradient-to-r from-gray-700 to-gray-900 p-5 rounded-2xl shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
