"use client";
import useCart from "@/app/hooks/useCart";
import { TCartItem } from "@/app/models/cart";
import { useAppDispatch } from "@/app/store/hooks";
import { clearCart } from "@/app/store/slices/cartSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CouponCode from "../couponCode";
import { COUPON_CODES } from "@/app/constants/couponCodes";
import CouponCard from "../couponCard";

const CartSummary = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { cartItems } = useCart();

  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    router.push("/checkout");
  };

  if (cartItems.length === 0) {
    return <></>;
  }

  return (
    <>
      {/* overlay */}
      <div className={`fixed top-0 left-0 w-full h-[fitContent] bg-black bg-opacity-50 z-40 ${isBottomSheetVisible ? "block" : "hidden"}`} onClick={toggleBottomSheet}></div>
      <div className="hidden md:block w-full md:w-1/3 lg:w-1/4 bg-white p-4 rounded-lg shadow-lg">
        <CartSummaryContent cartItems={cartItems} handleCheckout={handleCheckout} />
      </div>

      {/* Cart Summary as Bottom Sheet on Mobile */}
      <div className={`fixed z-50 bottom-0 left-0 w-full bg-white p-4 rounded-t-lg shadow-lg transform transition-transform duration-300 ${isBottomSheetVisible ? "translate-y-0" : "translate-y-full"}`}>
        <CartSummaryContent cartItems={cartItems} handleCheckout={handleCheckout} />
      </div>

      {/* Button to toggle Bottom Sheet */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white shadow-lg">
        <button onClick={toggleBottomSheet} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
          View Cart Summary
        </button>
      </div>
    </>
  );
};

export default CartSummary;

const CartSummaryContent = ({ cartItems, handleCheckout }: { cartItems: TCartItem[]; handleCheckout: () => void }) => {
  const [couponData, setCouponData] = useState<any>(null);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item?.originalPrice * item.quantity, 0);
  };
  const calculateDiscount = () => {
    return cartItems.reduce((acc, item) => acc + (item.price * item.quantity * item.discountPercentage) / 100, 0) + couponDiscount;
  };
  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount();
  };

  const handleCouponSubmit = () => {
    console.log(
      "Coupon Applied",
      COUPON_CODES.find((c) => c.code === couponData),
      couponData
    );
    if (COUPON_CODES.find((c) => c.code === couponData)) {
      setCouponDiscount(COUPON_CODES.find((c) => c.code === couponData)?.discountPercentage || 0);
      setCouponError("");
    } else {
      setCouponError("Invalid Coupon Code");
      setCouponDiscount(0);
    }
  };
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <span className="text-gray-600">Subtotal</span>
        <span className="text-gray-800 font-medium">${calculateSubtotal().toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <span className="text-gray-600">Discount</span>
        <span className="text-green-600 font-medium">-${calculateDiscount().toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-lg font-semibold text-gray-800">${calculateTotal().toFixed(2)}</span>
      </div>
      {/* AREA TO ENTER COUPAN CODES */}
      <h3 className="my-2 font-bold">Apply Coupon Code</h3>
      <div className="flex gap-1 flex-wrap">
        {COUPON_CODES.map((coupon) => (
          <>
            <CouponCard
              key={coupon.code}
              code={coupon.code}
              discountPercentage={coupon.discountPercentage}
              onApply={(code) => {
                setCouponData(code);
              }}
              isSelected={couponData === coupon.code}
            />
          </>
        ))}
      </div>
      <CouponCode handleCouponSubmit={handleCouponSubmit} couponData={couponData} setCouponData={setCouponData} />
      {couponDiscount > 0 && <p className="text-green-600 font-semibold text-sm my-1">You got additional {couponDiscount}% discount</p>}
      {couponError && <p className="text-red-600 font-semibold text-sm my-1">{couponError}</p>}
      <button onClick={handleCheckout} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all  active:scale-95">
        Proceed to Checkout
      </button>
    </>
  );
};
