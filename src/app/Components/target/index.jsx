import React from "react";
/* import { Image Button, Icon, Label } from "semantic-ui-react"; */
// import PropTypes from "prop-types";
import Image from "next/image";
import { map, isEmpty } from "lodash";
// Styles
import katarina from "@assets/katarina.jpg";
import styles from "./styles.module.css";
import lolSearch from "@assets/lolSearch.png";

const Target = ({ data }) => {
  const renderAnswer = (array) => {
    if (!isEmpty(array)) {
      const targets = map(array, () => {
        return (
          <div className={styles.card}>
            <Image src={katarina} alt="katarina" priority quality={100} sizes="100vw" style={{ objectFit: "cover" }} />

            <span>Akali</span>
          </div>
        );
      });
      return (
        <div className={styles.contTarget}>
          {targets}

          <div>
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
            {/* 
   
            <div className="h-36 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="animate-spin h-16 w-16 fill-[#A08C3F] cursor-pointer hover:fill-[#F4D661]">
                <path d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z" />
              </svg>
            </div>


             */}
          </div>
        </div>
      );
    }
    return <div className={styles.container}>No Hay Datos</div>;
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
export default Target;
