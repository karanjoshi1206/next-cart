"use client";
import useCart from "@/app/hooks/useCart";
import React from "react";
import CartCard from "../cartCard";

const CartList = () => {
  const { cartItems } = useCart();

  return (
    <div className="flex-grow pb-16">
      {cartItems.length === 0 && <div className="text-center text-lg text-gray-600 mt-6">No items in the cart.</div>}
      {cartItems.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
