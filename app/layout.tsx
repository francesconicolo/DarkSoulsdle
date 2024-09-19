import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
export const runtime = "edge";
const optimus = localFont({
  src: [
    {
      path: "./utils/font/OptimusPrincepsSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-optimus",
});

export const metadata: Metadata = {
  title: "DarkSoulsdle",
  description: "Created and designed by Francesco Nicolo' ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${optimus.variable} antialiased `}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
