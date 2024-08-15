import { TProduct } from "@/app/models/products";
import Image from "next/image";
import AddToCartButton from "./addToCartButton";

type TProductCardProps = {
  product: TProduct;
};

const ProductCard = ({ product }: TProductCardProps) => {
  return (
    <div className="relative p-6 bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform ">
      {/* Circular Image */}
      <div className="flex justify-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
          <Image src={product.images[0]} alt={product.title} width={128} height={128} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">{product.discountPercentage}% OFF</div>

      {/* Content */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      </div>

      {/* Pricing */}
      <div className="mt-4 flex justify-center items-end space-x-2">
        <span className="text-xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
        <span className="text-sm text-gray-500 line-through">${(product.price + product.price * (product.discountPercentage / 100)).toFixed(2)}</span>
      </div>
      <div className="p-4">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
