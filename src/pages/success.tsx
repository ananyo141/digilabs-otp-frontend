import Image from "next/image";
import logo from "../assets/logo.png";

import React from "react";

type Props = {};

const Success = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 h-screen w-screen items-center justify-center">
      <Image src={logo} alt="logo" className="w-10 h-10" />
      <p className="font-bold text-blue-600">Success!</p>
    </div>
  );
};

export default Success;
