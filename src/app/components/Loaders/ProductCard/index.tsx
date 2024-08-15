const ProductCardLoader = () => {
  return (
    <div className="relative w-full sm:w-96 p-6 bg-white border border-gray-200 rounded-3xl shadow-lg animate-pulse">
      {/* Circular Image Skeleton */}
      <div className="flex justify-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 bg-gray-200"></div>
      </div>

      {/* Floating Badge Skeleton */}
      <div className="absolute top-4 left-4 bg-gray-200 w-16 h-6 rounded-full"></div>

      {/* Content Skeleton */}
      <div className="mt-8 text-center">
        <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto mt-2"></div>
      </div>

      {/* Pricing Skeleton */}
      <div className="mt-4 flex justify-center items-end space-x-2">
        <div className="h-6 bg-gray-200 rounded w-16"></div>
        <div className="h-4 bg-gray-200 rounded w-12"></div>
      </div>

      {/* Button Skeleton */}
      <div className="p-4">
        <div className="h-10 bg-gray-200 rounded-full w-full"></div>
      </div>
    </div>
  );
};

export default ProductCardLoader;
