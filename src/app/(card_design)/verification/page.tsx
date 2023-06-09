"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Props = {};

const Verification = (props: Props) => {
  const [time, setTime] = useState(9);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time > 0 ? time - 1 : 9);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="w-[435px] space-y-12">
      <h2 className="text-3xl font-semibold">
        Enter the verification code to continue
      </h2>
      <p className="font-light leading-tight opacity-80 text-gray-800">
        We sent to{" "}
        <span className="text-blue-900 font-semibold">
          hellousers@heads.design
        </span>
        . If you don't see it, check your spam.
      </p>
      <div className="flex gap-3">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <input
              key={i}
              className="w-11 overflow-clip border border-blue-800 active:shadow-2xl active:shadow-blue-900 drop-shadow-lg h-12 rounded-xl p-2"
            />
          ))}
      </div>
      <div className="flex justify-between">
        <Link href="/signin" className="text-blue-600 font-bold">
          Back
        </Link>
        <Link href="/success" className="block">
          <button className="font-bold text-md text-gray-400">
            Resend 00:0{time}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Verification;
