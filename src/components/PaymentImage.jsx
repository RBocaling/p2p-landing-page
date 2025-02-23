import React from "react";

const PaymentImage = () => {
  return (
    <div className="flex items-center absolute top-0 left-0">
      <img
        src="/mobileOrder.png"
        alt="billing"
        className="w-[40%] relative z-[2] translate-x-20 -rotate-12"
      />
      <img
        src="/mobileBuy.png"
        alt="billing"
        className="w-[45%] relative z-[5] "
      />
    </div>
  );
};

export default PaymentImage;
