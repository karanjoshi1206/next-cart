import toast from "react-hot-toast";

const useToast = () => {
  const toastSuccess = (message: string) => {
    toast.success(message, {
      duration: 3000,
      position: "bottom-center"
    });
  };

  const toastError = (message: string) => {
    toast.error(message, {
      duration: 3000,
      position: "bottom-center"
    });
  };

  return { toastSuccess, toastError };
};

export default useToast;
