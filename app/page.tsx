import Link from "next/link";
import React from "react";
export const runtime = "edge";

export default function Home() {
  return (
    <div className="bg-black -z-20">
      <img
        src="/backgrounds/darksign.webp"
        className="absolute scale-125  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 brightness-50 "
        alt=""
      />
      <div className="flex flex-col justify-center items-center h-screen w-screen  ">
        <div className="text-white text-4xl font-optimus my-2 z-50 hover:cursor-pointer">
          Dark Souls 1
        </div>
        <div className={"overflow-hidden transition-all z-50"}>
          <Link
            href="/darksouls/weapons"
            className="text-white font-optimus text-xl"
          >
            Weapons
          </Link>
        </div>
        <div className="text-white text-4xl font-optimus my-2 z-50 hover:cursor-pointer">
          {" "}
          Dark Souls 3
        </div>
        <div className={"overflow-hidden transition-all z-50 "}>
          <Link
            href="/darksouls3/weapons"
            className="text-white font-optimus text-xl"
          >
            Weapons
          </Link>
        </div>
        <div className="text-white text-4xl font-optimus my-2 z-50 hover:cursor-pointer">
          MIXED
        </div>
        <div className={"overflow-hidden transition-all z-50"}>
          <div className="text-white font-optimus text-xl hover:cursor-help z-50">
            Weapons
          </div>
        </div>
      </div>
    </div>
  );
}
