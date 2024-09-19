import React from "react";
import MainPage from "../../components/ds3/mainPageWeapons";
import data from "../../../public/data/dataWeaponDS3.json";
export const runtime = "edge";
export default async function ds1Weapons() {
  const res = await fetch(
    `https://draftez.onrender.com/dailyNumbers?cacheBuster=${Date.now()}`
  );
  const randomNumber = await res.json();

  return (
    <div className="background-home-ds3">
      <MainPage
        data={data}
        newWeapon={randomNumber.message.ds3.weapon.oggi}
        prevWeapon={randomNumber.message.ds3.weapon.ieri}
      ></MainPage>
    </div>
  );
}
