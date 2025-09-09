"use client";
import React from "react";

// Styles

import styles from "./styles.module.css";
const GroupButtonFilter: React.FC = () => {
  return (
    <div className="flex ">
      <button className="h-9 cursor-pointer flex italic pr-1 pl-1 items-end bg-[#1E2939] border-t-8 border-b-2 border-l-1 border-r-1 border-[#C2963B] group hover:bg-gray-400 transition">
        Faker
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-3 mb-1 group  rounded-sm">
          <rect x="3" y="3" width="18" height="18" rx="2" className="fill-transparent group-hover:fill-[#95712F] transition-all duration-200" />
          <path
            d="M8 8L12 12M12 12L16 16M12 12L8 16M12 12L16 8M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-[#95712F] group-hover:stroke-gray-400 transition-all duration-200"
          />
        </svg>
      </button>
      <button className="h-9 cursor-pointer flex italic pr-1 pl-1 items-end bg-[#1E2939] border-t-8 border-b-2 border-l-1 border-r-1 border-[#C2963B] group hover:bg-gray-400 transition">
        Faker
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-3 mb-1 group  rounded-sm">
          <rect x="3" y="3" width="18" height="18" rx="2" className="fill-transparent group-hover:fill-[#95712F] transition-all duration-200" />
          <path
            d="M8 8L12 12M12 12L16 16M12 12L8 16M12 12L16 8M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-[#95712F] group-hover:stroke-gray-400 transition-all duration-200"
          />
        </svg>
      </button>

      <div className="relative">
        <div
          className={`absolute bg-red w-[99%] h-[36.2px] left-1 bottom-0`}
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 65% 0%, 0% 0%)",
            background: "#C2963B",
            boxShadow: "0 0 0 5px #1C252D",
          }}
        />
        <button
          className={`${styles.buttonTriangleSecond} cursor-pointer  pr-6 pl-1 h-9  bg-[#1E2939] italic border-l-1 border-b-2 border-t-8 border-r-2 border-[#C2963B] flex items-end group hover:bg-gray-400 transition`}>
          Support
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-3 mb-1 group  rounded-sm">
            <rect x="3" y="3" width="18" height="18" rx="2" className="fill-transparent group-hover:fill-[#95712F] transition-all duration-200" />
            <path
              d="M8 8L12 12M12 12L16 16M12 12L8 16M12 12L16 8M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-[#95712F] group-hover:stroke-gray-400 transition-all duration-200"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GroupButtonFilter;
