import React from "react";
import MainPage from "../../components/ds1/mainPageWeapons";
import data from "../../../public/data/data.json";
export const runtime = "edge";
export default async function ds1Weapons() {
  const res = await fetch(
    `https://draftez.onrender.com/dailyWeaponDS1?cacheBuster=${Date.now()}`
  );
  const randomNumber = await res.json();

  return (
    <div>
      <MainPage
        data={data}
        newWeapon={randomNumber.message.oggi}
        prevWeapon={randomNumber.message.ieri}
      ></MainPage>
    </div>
  );
}
