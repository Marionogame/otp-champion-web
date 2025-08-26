import React from "react";

import { map, isEmpty } from "lodash";
import Image from "next/image";
import katarina from "@assets/katarina.jpg";
import all from "@assets/icons/championPosition/all.svg";
import styles from "./styles.module.css";
const CardVideoList = ({ data }) => {
  const renderAnswer = (array) => {
    if (!isEmpty(array)) {
      const targets = map(array, () => {
        return (
          <div className={styles.card}>
            <div className="w-140 p-3 items-center bg-white border border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="flex justify_between w-full shadow-sm ">
                <Image src={katarina} className="h-35 w-60" alt="katarina" />
                <div className="flex flex-col justify-between p-4 leading-normal w-full ">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">torneo</h5>
                  <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fase</h6>
                  <div className="flex justify-between w-full">
                    <h1 className="mb-3 font-normal text-gray-700 dark:text-gray-400">Invocador</h1>
                    <div className="flex items-center">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Top</h5>{" "}
                      <Image src={all} alt="All" className="w-6 h-6 ml-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span>
              <div className="flex justify-between items-center h-14">
                <Image src={katarina} height={40} width={60} alt="katarina" className="mr-1.5 ml-1.5 h-13 w-15" />

                <Image src={katarina} height={40} width={60} alt="katarina" className="mr-1.5 ml-1.5 h-13 w-15" />

                <Image src={katarina} height={40} width={60} alt="katarina" className="mr-1.5 ml-1.5 h-13 w-15" />

                <Image src={katarina} height={40} width={60} alt="katarina" className="mr-1.5 ml-1.5 h-13 w-15" />

                <Image src={katarina} height={40} width={60} alt="katarina" className="mr-1.5 ml-1.5 h-13 w-15" />

                <Image src={katarina} height={40} width={60} alt="katarina" className="mr-1.5 ml-1.5 h-13 w-15" />
                <div className="w-32 flex justify-center items-center"> 43:20 min</div>
              </div>
            </span>
          </div>
        );
      });
      return (
        <div className="w-full flex justify-center flex-wrap">
          {targets}

          {/* <div>
            <div
              role="status"
              class="cursor-pointer w-[8.125rem] sm:w-[12.5rem] p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
              <div class="flex items-center justify-center h-46.5 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                <div class="animate-bounce  dark:bg-slate-800 p-2 w-15 h-15 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-[#d6bc85]"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              </div>

              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-42 mb-4 "></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            </div>
            <div className="bg-[#A08C3F] w-[8.125rem] sm:w-[12.5rem] h-0.5 " />
          </div> */}
        </div>
      );
    }
    return <div>No Hay Datos</div>;
  };

  return (
    <div>
      {renderAnswer(data)}
      <div className="flex items-center justify-center mt-4">
        <div className="bg-[#4d81ac] w-[8.125rem] sm:w-[70%] h-0.5 flex" />
      </div>
    </div>
  );
};

// Target.propTypes = {
// 	data: PropTypes.array,
// };
export default CardVideoList;
