import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addItem, decrementQuantity, incrementQuantity, removeItem } from "../store/slices/cartSlice";
import { TCartItem } from "../models/cart";

const useCart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const addToCart = (product: TCartItem) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  const removeFromCart = (productId: number) => {
    dispatch(removeItem(productId));
  };

  const incrementItemCount = (productId: number) => {
    dispatch(incrementQuantity(productId));
  };

  const decrementItemCount = (productId: number) => {
    dispatch(decrementQuantity(productId));
  };

  return { addToCart, removeFromCart, incrementItemCount, decrementItemCount, cartItems };
};

export default useCart;
