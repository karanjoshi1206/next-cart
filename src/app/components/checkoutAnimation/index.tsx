import animationData from "../../../../public/checkout.gif";
import Image from "next/image";

const CheckoutAnimation = () => {
  return <Image src={animationData} alt="checkout" objectFit="cover" height={100} width={100} />;
};

export default CheckoutAnimation;
