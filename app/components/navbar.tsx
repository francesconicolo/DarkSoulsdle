"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const [Open, setOpen] = useState(false);
  const [menuDS1, setmenuDS1] = useState(false);
  const [menuDS3, setmenuDS3] = useState(false);
  const [menuMixed, setmenuMixed] = useState(false);

  return (
    <div>
      <div
        className={
          "flex justify-start items-end p-3 z-50 absolute transition-all " +
          (Open ? "left-[260px]" : " left-1")
        }
      >
        <img
          src={Open ? "/icon/fullFlask.webp" : "/icon/emptyFlask.webp"}
          className="text-white text-right h-16 z-50 hover:cursor-pointer"
          onClick={() => setOpen(!Open)}
          alt="menu"
        />
      </div>
      <div
        className={
          "transition-all overflow-hidden h-full z-10 fixed w-[350px] left-[-350px] bg-black top-0 bottom-0 " +
          (Open ? " translate-x-[350px]" : " translate-x-[-350px]")
        }
      >
        <img
          src="/backgrounds/darksign.webp"
          className={
            "absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 brightness-[0.25] "
          }
          alt=""
        />
        <div
          className={
            "w-full h-full flex flex-col justify-center items-center pt-10"
          }
        >
          <div
            className="text-white text-4xl font-optimus my-2 hover:cursor-pointer "
            onClick={() => setmenuDS1(!menuDS1)}
          >
            Dark Souls 1
          </div>
          <div
            className={
              "overflow-hidden transition-all " + (menuDS1 ? "h-10" : " h-0")
            }
          >
            <Link
              href="/darksouls/weapons"
              className="text-white font-optimus text-xl"
            >
              Weapons
            </Link>
          </div>
          <div
            className="text-white text-4xl font-optimus my-2 hover:cursor-pointer "
            onClick={() => setmenuDS3(!menuDS3)}
          >
            {" "}
            Dark Souls 3
          </div>
          <div
            className={
              "overflow-hidden transition-all " + (menuDS3 ? "h-10" : " h-0")
            }
          >
            <Link
              href="/darksouls3/weapons"
              className="text-white font-optimus text-xl"
            >
              Weapons
            </Link>
          </div>
          <div
            className="text-white text-4xl font-optimus my-2 hover:cursor-pointer "
            onClick={() => setmenuMixed(!menuMixed)}
          >
            MIXED
          </div>
          <div
            className={
              "overflow-hidden transition-all " + (menuMixed ? "h-10" : " h-0")
            }
          >
            <div className="text-white font-optimus text-xl hover:cursor-help">
              Weapons
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
