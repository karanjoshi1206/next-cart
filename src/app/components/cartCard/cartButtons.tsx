"use client";

import useCart from "@/app/hooks/useCart";
import { TCartItem } from "@/app/models/cart";
import React from "react";

const CartButtons = ({ item }: { item: TCartItem }) => {
  const { incrementItemCount, decrementItemCount, removeFromCart } = useCart();

  const increaseQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    incrementItemCount(item.id);
  };

  const decreaseQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    decrementItemCount(item.id);
  };

  const removeItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    removeFromCart(item.id);
  };

  return (
    <div>
      <div className="flex flex-col items-center lg:ml-6 mt-4 lg:mt-0">
        <div className="flex items-center space-x-2">
          <button onClick={decreaseQuantity} className="bg-gray-200 text-gray-600 rounded-full px-3 py-1 hover:bg-gray-300 transition">
            -
          </button>
          <span className="text-gray-800">{item.quantity}</span>
          <button onClick={increaseQuantity} className="bg-gray-200 text-gray-600 rounded-full px-3 py-1 hover:bg-gray-300 transition">
            +
          </button>
        </div>
        <button onClick={removeItem} className="mt-4 text-sm text-white bg-red-500 hover:bg-red-600 rounded-full px-3 py-1 transition">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartButtons;
