/* eslint-disable react/prop-types */
import React from "react";

const Title = ({ className, width = "w-12 " }) => {
  return (
    <div
      className={`text-yellow text-2xl font-bold flex items-center gap-3 z-10 ${className}`}
    >
      <img src="/p2p-logo.png" className={`${width}`} alt="" />
      CRYPTOP2P.PHP
    </div>
  );
};

export default Title;
