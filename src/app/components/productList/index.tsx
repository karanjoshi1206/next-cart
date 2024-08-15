import { TProduct } from "@/app/models/products";
import ProductCard from "../productCard";

const ProductList = async () => {
  const productList = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
  const { products } = await productList.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center my-2">
      {products.map((product: TProduct) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductList;
