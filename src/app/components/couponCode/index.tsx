"use client";

import { useEffect, useState } from "react";
import { FaTag } from "react-icons/fa";

const CouponCode = ({ handleCouponSubmit, couponData, setCouponData }: { handleCouponSubmit: any; couponData: any; setCouponData: any }) => {
  const [coupon, setCoupon] = useState(couponData || "");

  useEffect(() => {
    setCoupon(couponData || "");
  }, [couponData]);

  return (
    <div className="relative my-2">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FaTag className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={coupon}
        onChange={(e) => setCouponData(e.target.value)}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Enter coupon code"
      />
      <button
        onClick={handleCouponSubmit}
        type="submit"
        className="absolute inset-y-0 right-0 px-4 text-sm font-medium text-white bg-blue-600 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Apply
      </button>
    </div>
  );
};

export default CouponCode;
