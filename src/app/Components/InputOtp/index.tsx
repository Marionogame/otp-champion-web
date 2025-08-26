"use client";
import React, { useState } from "react";

// Libraries

import { map } from "lodash";

// Styles
import staticData from "./staticData";
import Image from "next/image";
import euw from "@assets/icons/regions/euw.svg";
import lan from "@assets/icons/regions/lan.svg";
import na from "@assets/icons/regions/na.svg";
import all from "@assets/icons/regions/earth.svg";
import las from "@assets/icons/regions/las.svg";
import yorick from "@assets/yorick.jpg";
import fondoColina from "@assets/fondo8.webp";
interface InputProps {
  big: boolean;
}
const data = [
  { key: 1, text: "Ahri" },
  { key: 2, text: "Yasuo" },
  { key: 3, text: "Lux" },
  { key: 4, text: "Jinx" },
  { key: 5, text: "Ezreal" },
  { key: 6, text: "Katarina" },
  { key: 7, text: "Garen" },
  { key: 8, text: "Darius" },
  { key: 9, text: "Lee Sin" },
  { key: 10, text: "Thresh" },
  { key: 11, text: "Vayne" },
  { key: 12, text: "Yorick" },
];

const InputOtp: React.FC<InputProps> = ({ big }) => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(staticData[0]);
  const optionRegionRender = () => {
    const optionSearch = map(staticData, (item) => {
      let iconMap = null;

      switch (item.text) {
        case "EUW":
          iconMap = euw;
          break;
        case "LAN":
          iconMap = lan;
          break;
        case "LAS":
          iconMap = las;
          break;
        case "NA":
          iconMap = na;
          break;
        default:
          iconMap = all;
      }

      return (
        <li
          key={item.key}
          className="px-4 py-2 w-full flex items-center justify-between cursor-pointer hover:text-white  hover:bg-[linear-gradient(346deg,_rgba(255,252,189,1)_0%,_rgba(251,226,129,1)_7%,_rgba(217,183,109,1)_14%,_rgba(140,109,45,1)_40%,_rgba(244,214,97,1)_75%,_rgba(167,141,79,1)_100%)] transition"
          onClick={() => {
            setSelected(item);
            setOpen(false);
          }}>
          <span> {item.text}</span>
          {/* <svg
            className="w-4 h-4 text-gray-800 ml-3 dark:text-dark"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 10">
            <path d={item.map} />
          </svg> */}
          <Image src={iconMap} alt="logo" width={40} height={40} className="rounded-lg shadow-md" />
        </li>
      );
    });

    return optionSearch;
  };
  const optionChampionRender = () => {
    const optionSearch = map(data, (item) => {
      return (
        <li
          key={item.key}
          className="m-5 text-center"
          onClick={() => {
            // setSelected(item);
            setOpen(false);
          }}>
          <Image src={yorick} alt="logo" className="rounded-full shadow-md w-18 h-18 object-cover border-2 border-yellow-200" />
          <span className="text-zinc-50"> {item.text}</span>
          <div className="border-yellow-200 border-2 rounded-2xl mt-1" />
        </li>
      );
    });

    return optionSearch;
  };

  return (
    <div className={`w-full`}>
      <div className={`flex w-full`}>
        <div className={`relative w-24`}>
          <div
            className="absolute top-0 right-0 w-0 h-0"
            style={{
              borderRight: "30px solid white",
              borderBottom: "20px solid transparent",
            }}
          />

          <button
            // className={`w-full flex items-center text-white font-bold border-gray-300 px-4 py-2.5 text-base text-left bg-[linear-gradient(346deg,_rgba(255,252,189,1)_0%,_rgba(251,226,129,1)_7%,_rgba(217,183,109,1)_14%,_rgba(140,109,45,1)_40%,_rgba(244,214,97,1)_75%,_rgba(167,141,79,1)_100%)]`}
            className={`w-full flex items-center text-white font-bold border-gray-300 px-4 py-2.5 text-base text-left bg-gold-gradient`}
            style={big ? {} : { fontSize: "0.75rem", padding: "0.25rem 0.5rem" }}
            onClick={() => setOpen(!open)}>
            <span>{selected.text}</span>

            <svg
              className={`ml-3 w-4 h-4 text-gray-800 dark:text-white`}
              style={big ? {} : { width: "16px", height: "16px" }}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 10">
              <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
            </svg>
          </button>
          {/* {open && <ul className="absolute z-10 w-35 mt-1 rounded-lg text-black border border-gray-300 bg-white shadow-lg">{optionRegionRender()}</ul>} */}
        </div>

        <div className="relative w-full">
          <div
            className="absolute bottom-0 right-0 w-0 h-0"
            style={{
              width: "30px",
              height: "20px",
              background:
                "linear-gradient(346deg, rgba(255,252,189,1) 0%, rgba(251,226,129,1) 7%, rgba(217,183,109,1) 14%, rgba(140,109,45,1) 40%, rgba(244,214,97,1) 75%, rgba(167,141,79,1) 100%)",
              clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
            }}
          />

          <input
            type="text"
            className={`w-full border-gray-300 bg-white px-4 py-2.5 text-gray-700 focus:border-blue-500 focus:outline-none`}
            style={big ? {} : { fontSize: "0.75rem", padding: "0.25rem 0.5rem" }}
            placeholder="Buscar..."
          />
        </div>
      </div>

      {open && (
        <div className="relative mt-1 w-full bg-gold-gradient" style={{ height: "24rem" }}>
          <ul
            className={`flex flex-wrap overflow-y-auto justify-around z-10 h-112  mb-1 mr-1 ml-1 bt-1  border-t-4 border-t-amber-50 shadow-lg
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"`}
            style={{
              backgroundImage: `url(${fondoColina.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "23.8rem",
              width: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}>
            {optionChampionRender()}
          </ul>{" "}
        </div>
      )}
    </div>
  );
};

export default InputOtp;
