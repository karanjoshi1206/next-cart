import ProductCardLoader from "@/app/components/Loaders/ProductCard";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center my-2 p-2">
      {Array.from({ length: 10 }).map((_, index) => (
        <ProductCardLoader key={index} />
      ))}
    </div>
  );
};

export default Loading;
