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
          {/* <div className={"flex  justify-center "}>
            <div className="bg-amber-300 w-20rem relative z-2 h-0.5 mt-6" />
          </div> */}
          <div>
            <div className="bg-[#A08C3F] w-[8.125rem] sm:w-[12.5rem] h-0.5 " />

            <div className="h-36 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="animate-spin h-16 w-16 fill-[#A08C3F] cursor-pointer hover:fill-[#F4D661]">
                <path d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z" />
              </svg>
            </div>
          </div>
        </div>
      );
    }
    return <div className={styles.container}>No Hay Datos</div>;
  };

  return <div>{renderAnswer(data)}</div>;
};

// Target.propTypes = {
// 	data: PropTypes.array,
// };
export default Target;
