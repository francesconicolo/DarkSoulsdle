"use client";

import { useState } from "react";
import RightAnswer from "../rightAnswer";

export default function clientPart({
  data,
  newWeapon,
  prevWeapon,
}: {
  data: any;
  newWeapon: number;
  prevWeapon: number;
}) {
  const [filter, setFilter] = useState("");
  const [selectedWeapons, setSelectedWeapons] = useState<Weapon[]>([]);
  const [modal, setModal] = useState(false);
  type Weapon = {
    id: string;
    class: string; // La classe dell'arma, es. "Axe", "Fists"
    name: string; // Nome dell'arma
    reqStr: string | number; // Può essere un numero o "-" (nessun requisito)
    reqDex: string | number;
    reqInt: string | number;
    reqFth: string | number;
    scaStr: string | number;
    scaDex: string | number;
    scaInt: string | number;
    scaFth: string | number;
    physicalAtk: string | number; // Può essere un numero o "-"
    magicAtk: string | number;
    fireAtk: string | number;
    lightingAtk: string | number;
    darkAtk: string | number;
    total: string | number; // Totale dei danni
    Bleed: string | number;
    Poison: string | number;
    Frozen: string | number;
    magAdjust: string | number;
    weight: number; // Il peso è sempre numerico
  };

  const mapWeapons = (data: any): Weapon[] => {
    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch (error) {
        console.error("Il dato passato non è un oggetto JSON valido:", error);
        return [];
      }
    }
    const weapons: Weapon[] = [];
    // Itera su ogni classe di armi nel file JSON
    Object.keys(data).forEach((weaponClass) => {
      // Itera su ogni arma all'interno della classe
      data[weaponClass].forEach((weaponData: any) => {
        const name = Object.keys(weaponData)[0]; // Ottieni il nome dell'arma
        const weaponInfo = weaponData[name]; // Dati dell'arma

        // Crea un oggetto di tipo Weapon
        const weapon: Weapon = {
          id: weaponInfo.id,
          class: weaponClass, // Adatta la classe in base al tipo
          name,
          reqStr: weaponInfo.reqStr,
          reqDex: weaponInfo.reqDex,
          reqInt: weaponInfo.reqInt,
          reqFth: weaponInfo.reqFth,
          scaStr: weaponInfo.scaStr,
          scaDex: weaponInfo.scaDex,
          scaInt: weaponInfo.scaInt,
          scaFth: weaponInfo.scaFth,
          physicalAtk: weaponInfo.physicalAtk,
          magicAtk: weaponInfo.magicAtk,
          fireAtk: weaponInfo.fireAtk,
          lightingAtk: weaponInfo.lightingAtk,
          darkAtk: weaponInfo.darkAtk,
          total: weaponInfo.total,
          Bleed: weaponInfo.Bleed,
          Poison: weaponInfo.Poison,
          Frozen: weaponInfo.Frozen,
          magAdjust: weaponInfo.magAdjust,
          weight: weaponInfo.weight,
        };

        weapons.push(weapon);
      });
    });

    return weapons;
  };
  const [allWeapons, setAllWeapons] = useState<Weapon[]>(mapWeapons(data));
  const [correctAnswer, setCorrectAnswer] = useState<Weapon>(
    allWeapons[newWeapon]
  );
  console.log(allWeapons[25]);
  const [oldAnswer, setOldAnswer] = useState<Weapon>(allWeapons[prevWeapon]);

  const handleSelectWeapon = (weapon: Weapon) => {
    setAllWeapons((prev) => prev.filter((w) => w.name !== weapon.name));
    setSelectedWeapons((prev) => [weapon, ...prev]);
    setFilter("");
    setModal(weapon?.name == correctAnswer.name);
  };

  const filteredData = allWeapons
    ? allWeapons.filter((item: any) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  function correctBgClass(item: Weapon) {
    if (correctAnswer.class != item.class) {
      return "incorrect-bg";
    } else if (correctAnswer.class == item.class) {
      return "correct-bg";
    }
  }
  function correctBg(attributeValue: any, correctValue: any) {
    // 1. Se a == b, è vero
    if (attributeValue === correctValue) {
      return "correct-bg";
    }

    // 2. Se a != "-" e b == "-", è falso
    if (attributeValue !== "-" && correctValue === "-") {
      return "incorrect-bg";
    }
    if (attributeValue === "-" && correctValue !== "-") {
      return "incorrect-bg";
    }

    // 3. Se a != "-" e b != "-", è semi-vera
    if (attributeValue !== "-" && correctValue !== "-") {
      return "semicorrect-bg";
    }

    // Fallback se nessuna delle condizioni sopra è soddisfatta
    return "default-bg";
  }
  function correctBGWeight(item: Weapon) {
    if (Number(correctAnswer.weight) > Number(item.weight)) {
      return "up-bg";
    } else if (Number(correctAnswer.weight) < Number(item.weight)) {
      return "down-bg";
    } else if (correctAnswer.weight == item.weight) {
      return "correct-bg";
    }
  }
  function makeRow(item: any) {
    return (
      <div className="flex overflow-hidden " key={item.name}>
        <img
          src={"/weaponsDS3/" + item.id + ".png"}
          className={"row-item go-up animation-delay-50 "}
        ></img>

        <div
          className={
            "row-item go-up animation-delay-100 " +
            (item.class.includes("Greatswords") ? " !text-xs " : "!text-lg ") +
            correctBgClass(item)
          }
        >
          {item.class}
        </div>
        <div
          className={
            "row-item go-up animation-delay-200 " +
            correctBg(item.scaStr, correctAnswer.scaStr)
          }
        >
          {item.scaStr}
        </div>
        <div
          className={
            "row-item go-up animation-delay-300 " +
            correctBg(item.scaDex, correctAnswer.scaDex)
          }
        >
          {item.scaDex}
        </div>
        <div
          className={
            "row-item go-up animation-delay-400 " +
            correctBg(item.scaFth, correctAnswer.scaFth)
          }
        >
          {item.scaFth}
        </div>
        <div
          className={
            "row-item go-up animation-delay-500 " +
            correctBg(item.scaInt, correctAnswer.scaInt)
          }
        >
          {item.scaInt}
        </div>
        <div
          className={
            "row-item go-up animation-delay-600 " +
            correctBg(item.Bleed, correctAnswer.Bleed)
          }
        >
          {item.Bleed}
        </div>
        <div
          className={
            "row-item go-up animation-delay-700 " +
            correctBg(item.Poison, correctAnswer.Poison)
          }
        >
          {item.Poison}
        </div>
        <div
          className={
            "row-item go-up animation-delay-700 " +
            correctBg(item.Poison, correctAnswer.Frozen)
          }
        >
          {item.Frozen}
        </div>
        <div
          className={
            "row-item go-up animation-delay-1000 " +
            correctBg(item.magAdjust, correctAnswer.magAdjust)
          }
        >
          {item.magAdjust}
        </div>
        <div
          className={
            "row-item go-up animation-delay-1100 " + correctBGWeight(item)
          }
        >
          {item.weight}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      {modal ? (
        <div onClick={() => setModal(false)}>
          <RightAnswer item={correctAnswer}></RightAnswer>
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-col w-full h-full items-center justify-center ">
        <div className="flex flex-col items-center justify-center w-full pt-20">
          <h1 className="font-optimus text-white text-[4rem] text-center leading-[0.86]">
            DARK SOULS III
          </h1>
          <p className="font-optimus text-white text-[1rem] text-center ">
            -weapons edition-
          </p>
        </div>
        <div className="flex items-center justify-center w-full mt-4">
          <div className="flex flex-col justify-center items-center px-4 rounded-[30px] w-[240px] bg-black/40 relative">
            <input
              type="text"
              className={
                "bg-White/5 rounded-lg font-roboto outline-none pl-2 w-[330px] mx-2 text-2xl "
              }
              name=""
              placeholder="Cerca..."
              id=""
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              disabled={
                correctAnswer.name == selectedWeapons[0]?.name ? true : false
              }
            />
            <div
              className={
                " bg-white rounded-md w-[330px] flex flex-col my-2 overflow-y-scroll max-h-44 absolute top-[40px] z-20 " +
                (filter.length > 0 ? "visible" : "invisible")
              }
            >
              {filter.length > 0 &&
                filteredData.map((item: any) => (
                  <div
                    className="flex text-left w-full overflow-hidden whitespace-nowrap overflow-ellipsis min-h-12 max-h-12 py-1 hover:underline hover:cursor-pointer"
                    key={item.name}
                    onClick={() => handleSelectWeapon(item)}
                  >
                    <img
                      src={"/weaponsDS3/" + item.id + ".png"}
                      className="pl-2 "
                      alt=""
                    />
                    <div className="flex justify-center items-center font-optimus pl-7">
                      {item.name}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="w-screen overflow-x-auto flex xl:justify-center justify-start">
          <div className="min-w-[1330px] mt-10 flex flex-col items-center m-3">
            {/* Header */}
            <div className="overflow-x-auto overflow-y-scroll w-full">
              <div className="flex items-end shadow-stone-900 shadow-2xl ">
                <div className="title-grid"></div>
                <div className="title-grid">Class</div>
                <div className="text-white font-optimus text-center">
                  <div>Scaling</div>
                  <div className="flex shadow-lg">
                    <div className="title-grid">Str</div>
                    <div className="title-grid">Dex</div>
                    <div className="title-grid">Fth</div>
                    <div className="title-grid">Int</div>
                  </div>
                </div>
                <div className="title-grid">Bleed</div>
                <div className="title-grid">Poison</div>
                <div className="title-grid">Frozen</div>
                <div className="title-grid">Cata</div>
                <div className="title-grid">Weight</div>
              </div>
            </div>
            {/* Body */}
            <div className="overflow-x-auto overflow-y-scroll h-[440px] w-full">
              {selectedWeapons.length > 0 &&
                selectedWeapons.map((item: Weapon) => makeRow(item))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-10 ">
        <h1 className="text-white font-optimus flex justify-center items-center">
          L'arma di ieri era:{" "}
        </h1>
        <h1 className="text-green-600 text-3xl font-optimus">
          {oldAnswer.name}
        </h1>
      </div>
    </div>
  );
}
