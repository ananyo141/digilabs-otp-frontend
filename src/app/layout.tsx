import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "SystemPackage",
  description: "Generated by create next app",
  viewport: "width=device-width, initial-scale=1",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}