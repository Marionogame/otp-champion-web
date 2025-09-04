"use client";
import React from "react";

// Styles
import Image from "next/image";
import jg from "@assets/icons/championPosition/Role=Jungle2.svg";
import adc from "@assets/icons/championPosition/Role=ADC2.svg";
import mid from "@assets/icons/championPosition/Role=Mid2.svg";
import support from "@assets/icons/championPosition/Role=Support1.svg";
import top from "@assets/icons/championPosition/Role=Top2.svg";
import all from "@assets/icons/championPosition/all.svg";
import styles from "./styles.module.css";
const tiny = true;
const GroupButton: React.FC = () => {
  return (
    <div className="flex ">
      <div className="relative">
        <div
          className={`absolute z-auto bg-[#1C252D] ${tiny ? "w-[64px] h-[36.2px] right-1 " : "w-[67px] h-11 right-1 bottom-0"} `}
          style={{
            clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
            background: "#1C252D",
            boxShadow: "0 0 0 0 #1C252D",
          }}
        />
        <button
          className={`${styles.buttonTriangleFirst} cursor-pointer px-4 py-2 text-gray-800 font-semibold border-b-2 border-t-2 border-r-1 border-[#1C252D]`}>
          <Image src={all} alt="All" className={tiny ? "w-5 h-4 ml-3" : `w-6 h-6 ml-3`} />
        </button>
      </div>
      <button
        className={`${
          tiny ? "py-1 h-9" : "py-2 h-11"
        }  cursor-pointer px-4  bg-gray-200 text-gray-800 font-semibold border-t-2 border-b-2 border-l-1 border-r-1 border-[#1C252D] hover:bg-gray-400 transition`}>
        <Image src={top} alt="Top" className={tiny ? "w-5 h-4" : "w-6 h-6"} />
      </button>
      <button
        className={`${
          tiny ? "py-1 h-9" : "py-2 h-11"
        } cursor-pointer px-4  bg-gray-200 text-gray-800 font-semibold border-t-2 border-b-2 border-l-1 border-r-1 border-[#1C252D] hover:bg-gray-400 transition`}>
        <Image src={jg} alt="Jg" className={tiny ? "w-5 h-5" : "w-6 h-6"} />
      </button>
      <button
        className={`${
          tiny ? "py-1 h-9" : "py-2 h-11"
        } cursor-pointer px-4 bg-gray-200 text-gray-800 font-semibold border-t-2 border-b-2 border-l-1 border-r-1 border-[#1C252D] hover:bg-gray-400 transition`}>
        <Image src={mid} alt="Mid" className={tiny ? "w-5 h-4" : "w-6 h-6"} />
      </button>
      <button
        className={`${
          tiny ? "py-1 h-9" : "py-2 h-11"
        }  cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 font-semibold border-t-2 border-b-2 border-l-1 border-r-2 border-[#1C252D] hover:bg-gray-400 transition`}>
        <Image src={support} alt="Support" className={tiny ? "w-5 h-5" : "w-6 h-6"} />
      </button>
      <div className="relative">
        <div
          className={`absolute bg-red ${tiny ? "w-15 h-[36.2px] left-1 bottom-0" : "w-16 h-11 left-1 bottom-0"}`}
          style={{
            clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
            background: "#1C252D",
            boxShadow: "0 0 0 5px #1C252D",
          }}
        />
        <button
          className={`${styles.buttonTriangleSecond} cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 font-semibold border-b-2 border-t-2 border-r-2 border-[#1C252D] hover:bg-gray-400 transition`}>
          <Image src={adc} alt="Adc" className={tiny ? "w-5 h-4 mr-2" : `w-6 h-6 mr-2`} />
        </button>
      </div>
    </div>
  );
};

export default GroupButton;
