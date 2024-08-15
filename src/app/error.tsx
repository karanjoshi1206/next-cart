"use client";

import Image from "next/image";
import errorAnimation from "../../public/error.gif";
const Error = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <Image src={errorAnimation} alt="Error" />
      Oops Something went wrong in our cart!!
    </div>
  );
};

export default Error;
