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
      return <div className={styles.contTarget}>{targets}</div>;
    }
    return <div className={styles.container}>No Hay Datos</div>;
  };

  return <div>{renderAnswer(data)}</div>;
};

// Target.propTypes = {
// 	data: PropTypes.array,
// };
export default Target;
