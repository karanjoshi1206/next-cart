"use client";
import { useAppSelector } from "@/app/store/hooks";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

const CartButton = () => {
  const total = useAppSelector((state) => state.cart.items.length);

  return (
    <div>
      <Link href="/cart">
        <span className="relative text-gray-600 hover:text-gray-800 transition">
          <CiShoppingCart color="black" size={30} />

          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">{total}</span>
        </span>
      </Link>
    </div>
  );
};

export default CartButton;
