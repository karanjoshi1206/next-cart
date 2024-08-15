import CartList from "@/app/components/cartList";
import CartSummary from "@/app/components/cartSummary";

const Cart = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 p-2">
      <CartList />
      <CartSummary />
    </div>
  );
};

export default Cart;
