import cardImage from "@src/assets/card.png";
import Image from "next/image";
import Link from "next/link";
import { RxEyeNone } from "react-icons/rx";

import logo from "@src/assets/logo.png";
type Props = {};

const SignIn = (props: Props) => {
  return (
    <div>
      <h2 className="text-4xl font-semibold">
        Welcome to
        <br /> Systempackage
      </h2>
      <div className="rounded-lg flex justify-between gap-5 bg-gray-100">
        <input
          type="text"
          placeholder="Username"
          className="p-2 rounded-lg bg-inherit"
        />
        <select className="p-2 text-gray-500 rounded-lg bg-white px-3 m-1">
          <option value="1">@heads.design</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <input
        type="password"
        placeholder="********"
        className="p-3 w-full rounded-lg bg-gray-100"
      />
      <div className="relative inline">
        <RxEyeNone className="absolute top-1 opacity-75 right-5" />
      </div>
      <Link className="block" href="/verification">
        <button className="w-full text-xl h-16 font-bold tracking-wide rounded-lg bg-blue-600 text-white">
          Next
        </button>
      </Link>
      <p className="font-bold text-blue-600 text-center">
        Forgot your password?
      </p>
    </div>
  );
};

export default SignIn;
