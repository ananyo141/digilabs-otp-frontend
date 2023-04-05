import Image from "next/image";

import cardImage from "@src/assets/card.png";
import logo from "@src/assets/logo.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center">
      <section className="container max-w-6xl mx-auto">
        {/* Root section that is a centered container */}
        {/* Header with logo and create account link */}
        <div className="flex justify-between items-center">
          <Image src={logo} className="w-8 h-8" alt="logo" />
          <p>
            Not member?{" "}
            <span className="font-bold text-blue-600 cursor-pointer">
              Create account
            </span>
          </p>
        </div>
        {/* Header ended */}
        {/* Card Container */}
        <div className="flex items-center justify-between gap-4">
          <div>
            {children}
            <p>
              Not member?{" "}
              <span className="font-bold text-blue-600 cursor-pointer">
                Create account
              </span>
            </p>
          </div>
          <Image src={cardImage} className="w-1/2" alt="Card Image" />
        </div>
        {/* Card Container ended */}
      </section>
    </div>
  );
}
