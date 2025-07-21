"use client";
import React from "react";

// Styles
import Image from "next/image";
import jg from "@assets/icons/championPosition/Role=Jungle2.svg";
import adc from "@assets/icons/championPosition/Role=ADC2.svg";
import mid from "@assets/icons/championPosition/Role=Mid2.svg";
import support from "@assets/icons/championPosition/Role=Support1.svg";
import top from "@assets/icons/championPosition/Role=Top2.svg";

import styles from "./styles.module.css";

const GroupButton: React.FC = () => {
  return (
    <div className="flex ">
      <div className="relative">
        <div
          className="absolute z-auto bg-[#1C252D] w-14 h-11 right-1 bottom-0"
          style={{
            clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
            background: "#1C252D",
            boxShadow: "0 0 0 0 #1C252D",
          }}
        />
        <button
          // className={styles.borderCut}
          className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 font-semibold border-b-2 border-t-2 border-r-2 border-[#1C252D] hover:bg-gray-400 transition"
          style={{
            clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
            background: "#fff",
            boxShadow: "0 0 0 5px #1C252D",
          }}>
          <Image src={top} alt="Top" className="w-6 h-6" />
        </button>
      </div>
      <button className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 font-semibold border-2 border-[#1C252D] hover:bg-gray-400 transition">
        <Image src={jg} alt="Jg" className="w-6 h-6" />
      </button>
      <button className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 font-semibold border-2 border-[#1C252D] hover:bg-gray-400 transition">
        <Image src={mid} alt="Mid" className="w-6 h-6" />
      </button>
      <button className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 font-semibold border-2 border-[#1C252D] hover:bg-gray-400 transition">
        <Image src={support} alt="Support" className="w-6 h-6" />
      </button>
      <div className="relative">
        <div
          className="absolute bg-red w-14 h-11 left-1 bottom-0"
          style={{
            clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
            background: "#1C252D",
            boxShadow: "0 0 0 5px #1C252D",
          }}
        />
        <button
          className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 font-semibold border-b-2 border-t-2 border-r-2 border-[#1C252D] hover:bg-gray-400 transition"
          style={{
            clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
            background: "#fff",
            boxShadow: "0 0 0 5px #1C252D",
          }}>
          <Image src={adc} alt="Adc" className="w-6 h-6" />
        </button>{" "}
      </div>
    </div>
  );
};

export default GroupButton;
