import Link from "next/link";
import CartButton from "./cartButton";

const Header = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-gray-800">NextCart</span>
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href="/">
            <span className="text-gray-600 hover:text-gray-800 transition">Products</span>
          </Link>
          <CartButton />
        </div>
      </div>
    </nav>
  );
};

export default Header;
