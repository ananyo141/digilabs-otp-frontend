import cardImage from "../assets/card.png";
import Image from "next/image";
import Link from "next/link";
import { RxEyeNone } from "react-icons/rx";

import logo from "../assets/logo.png";
type Props = {};

const SignIn = (props: Props) => {
  return (
    <section className="p-4 flex items-center justify-center h-screen">
      <div className="flex gap-14 items-center justify-center">
        <div className="space-y-12">
          <Image src={logo} className="absolute w-8 h-8 top-8" alt="logo" />
          <h2 className="text-4xl font-semibold">
            Welcome to
            <br /> Systempackage
          </h2>
          <div className="rounded-md flex justify-between gap-5 bg-gray-100">
            <input
              type="text"
              placeholder="Username"
              className="p-2 rounded-2xl bg-inherit"
            />
            <select className="p-2 text-gray-500 rounded-md bg-white px-3 m-1">
              <option value="1">@heads.design</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <input
            type="password"
            placeholder="********"
            className="p-2 w-full rounded-md bg-gray-100"
          />
          <div className="relative inline">
            <RxEyeNone className="absolute top-1 opacity-75 right-5" />
          </div>
          <Link className="block" href="/verification">
            <button className="w-full text-xl h-16 font-bold tracking-wide rounded-md bg-blue-600 text-white">
              Next
            </button>
          </Link>
          <p className="font-bold text-blue-600 text-center">
            Forgot your password?
          </p>
          <p className="font-light">
            Not member? <span className="font-bold text-blue-600 cursor-pointer"> Create account</span>
          </p>
        </div>
        <Image src={cardImage} alt="Card Image" />
      </div>
    </section>
  );
};

export default SignIn;
