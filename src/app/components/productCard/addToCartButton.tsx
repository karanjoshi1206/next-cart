"use client";
import useCart from "@/app/hooks/useCart";
import useToast from "@/app/hooks/useToast";
import { TProduct } from "@/app/models/products";

const AddToCartButton = ({ product }: { product: TProduct }) => {
  const { toastSuccess } = useToast();
  const { addToCart, incrementItemCount, decrementItemCount, cartItems } = useCart();
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addToCart({ ...product, quantity: 1 ,originalPrice:+(product.price + product.price * (product.discountPercentage / 100)).toFixed(2)});
    toastSuccess("Product added to cart");
  };

  const increaseQuantity = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    incrementItemCount(product.id);
  };

  const decreaseQuantity = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    decrementItemCount(product.id);
  };

  // check if the product is already in the cart
  const isProductInCart = cartItems.some((item) => item.id === product.id);
  const quantity = isProductInCart ? cartItems.find((item) => item.id === product.id)?.quantity : 0;

  return (
    <button onClick={handleAddToCart} className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-600 transition-colors overflow-hidden">
      {isProductInCart ? (
        <div className="flex justify-center items-center space-x-4">
          <div onClick={decreaseQuantity} className="bg-gray-200 text-gray-600 rounded-full px-3 py-1 cursor-pointer hover:bg-gray-300 transition">
            -
          </div>
          <span className="text-white">{quantity}</span>
          <div onClick={increaseQuantity} className="bg-gray-200 text-gray-600 rounded-full px-3 py-1 cursor-pointer hover:bg-gray-300 transition">
            +
          </div>
        </div>
      ) : (
        <div className="px-3 py-1 ">Add to cart</div>
      )}
    </button>
  );
};

export default AddToCartButton;
