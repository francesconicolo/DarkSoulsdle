import React, { useState } from "react";

export default function rightAnswer({
  item,
  gioco,
}: {
  item: any;
  gioco: string;
}) {
  return (
    <div
      className={
        "fixed top-0 left-0 right-0 bottom-0 h-screen w-screen bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center "
      }
    >
      <div className="w-[350px] h-[300px] bg-stone-200 rounded-md flex flex-col  items-center">
        <h1 className="font-optimus text-4xl text-center pt-4">CORRETTO!</h1>
        <p className=" text-center font-optimus pt-2">
          La risposta di oggi e':
        </p>
        <img
          src={"/weapons" + gioco + "/" + item.id + ".png"}
          className="size-20 my-6"
          alt=""
        />
        <p className=" text-center font-optimus text-3xl">{item.name}</p>
      </div>
    </div>
  );
}
