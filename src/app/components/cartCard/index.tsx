import { TCartItem } from "@/app/models/cart";
import Image from "next/image";
import React from "react";
import CartButtons from "./cartButtons";

const CartCard = ({ item }: { item: TCartItem }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center p-4 bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full max-w-6xl mx-auto mb-2">
      {/* Product Image */}
      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-md flex-shrink-0">
        <Image src={item.images[0]} alt={item.title} width={128} height={128} className="w-full h-full object-cover" />
      </div>

      {/* Product Details */}
      <div className="lg:ml-6 flex-grow mt-4 lg:mt-0">
        <div className="flex gap-2 items-center">
          <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
          <div className="text-xs text-green-500 font-semibold">({item.discountPercentage}% OFF)</div>
        </div>
        <p className="text-sm text-gray-600 mt-1">Quantity: {item.quantity}</p>
        <div className="flex items-center mt-2">
          <span className="text-lg font-bold text-gray-800">${item.price.toFixed(2)}</span>
          <span className="text-sm text-gray-500 line-through ml-2">${(item.price + item.price * (item.discountPercentage / 100)).toFixed(2)}</span>
        </div>
      </div>

      <CartButtons item={item} />
    </div>
  );
};

export default CartCard;
