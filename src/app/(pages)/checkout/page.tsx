import CheckoutAnimation from "@/app/components/checkoutAnimation";

const Checkout = () => {
  return (
    <div className="h-[80vh] w-full flex justify-center items-center flex-col">
      <CheckoutAnimation />
      <h3>Checking out... You’re about to get your goodies!</h3>
    </div>
  );
};

export default Checkout;
