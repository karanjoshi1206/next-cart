import { FaPercent } from "react-icons/fa";

type CouponCardProps = {
  code: string;
  discountPercentage: number;
  isSelected: boolean;
  onApply: (code: string) => void;
};
const CouponCard = ({ code, discountPercentage, onApply, isSelected }: CouponCardProps) => {
  return (
    <button
      onClick={() => onApply(code)}
      className={`flex items-center p-2 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        isSelected ? "bg-blue-100 border-blue-300" : "bg-white border-gray-200"
      }`}
    >
      <FaPercent className="w-4 h-4 text-green-500 mr-1" />
      <span className="text-xs mr-2 font-medium text-gray-700">{code}</span>
      <span className="ml-auto text-xs font-semibold text-green-600">{discountPercentage}% OFF</span>
    </button>
  );
};

export default CouponCard;
