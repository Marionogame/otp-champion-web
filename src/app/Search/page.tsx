// @ts-nocheck:
"use client";
import { useState } from "react";
import Image from "next/image";

import { Grid, Divider, Header } from "semantic-ui-react";
// Components
import InputOtp from "../Components/InputOtp";
import Target from "../Components/target";
import optionSearch from "../Components/InputOtpa/staticData";
import optChampion from "@assets/otpchampion2.png";
import logo from "@assets/logo.png";
import styles from "./styles.module.css";

import jg from "@assets/icons/championPosition/Role=Jungle2.svg";
import adc from "@assets/icons/championPosition/Role=ADC2.svg";
import mid from "@assets/icons/championPosition/Role=Mid2.svg";
import support from "@assets/icons/championPosition/Role=Support1.svg";
import top from "@assets/icons/championPosition/Role=Top2.svg";
const Search = () => {
  const [field, setField] = useState("LAN");
  const [search, setSearch] = useState("");

  return (
    <div className={styles.containerHome}>
      <div className={styles.videoBackground}>
        <video
          src="/assets/video.mp4"
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}>
          <track kind="captions" />
        </video>
      </div>
      <div className={styles.hero2} />
      <div className={styles.hero}>
        <div className={styles.contSearch}>
          <Image
            src={logo}
            alt="Logo OTP Champion"
            width={400} // 34.5rem ≈ 552px
            height={200} // 17.2rem ≈ 275px
            // className="rounded w-[20.5rem] h-[11rem] sm:mt-[3rem] sm:w-[34.5rem] sm:h-[17.2rem] object-cover"
            priority
            quality={100}
          />{" "}
        </div>
        <div className={styles.inputContainer}>
          <div className="w-[23.6rem] bg-amber-800 mt-4 flex items-center justify-center sm:w-[30rem]">
            <InputOtp
              className={styles.input}
              big
              name="searchString"
              placeholder="Buscar"
              value={search}
              onChange={(e) => {
                return setSearch(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <Grid className={styles.grid}>
        <Grid.Column className={styles.column}>
          <div className={styles.contRow}>
            <div className="no-underline text-white font-bold block sm:mr-[50px] w-1/2 border-r-[30px] border-r-transparent border-b-[30px] [border-bottom-style:ridge] [border-bottom-color:rgba(244,214,97,1)] h-0 [line-height:50px]" />
            <Divider horizontal>
              <Header as="h4">
                <div className={styles.rowContainer}>
                  <div className={styles.row}>
                    <span color="blue" className={styles.titleLabel}>
                      CAMPEONES
                    </span>
                  </div>
                </div>
              </Header>
            </Divider>
            <div className="no-underline text-white font-bold block w-1/2 sm:ml-[50px] border-l-[30px] border-l-transparent border-b-[30px] [border-bottom-style:ridge] [border-bottom-color:#9e1407] h-0 [line-height:50px]" />
          </div>
        </Grid.Column>
      </Grid>

      <Grid className={styles.grid2}>
        <Grid.Column width={16}>
          <div className="flex justify-center sm:justify-end sm:mr-20 mt-5">
            <button
              className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 font-semibold border-2 border-[#1C252D] hover:bg-gray-400 transition"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
                bolder: "#1C252D",
              }}>
              <Image src={top} alt="Top" className="w-6 h-6" />
            </button>
            <button className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 font-semibold border-2 border-[#1C252D] hover:bg-gray-400 transition">
              <Image src={jg} alt="Jg" className="w-6 h-6" />
            </button>
            <button className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 font-semibold border-2 border-[#1C252D] hover:bg-gray-400 transition">
              <Image src={mid} alt="Mid" className="w-6 h-6" />
            </button>
            <button className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 font-semibold border-2 border-[#1C252D] hover:bg-gray-400 transition">
              <Image src={support} alt="Support" className="w-6 h-6" />
            </button>
            <button
              className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-800 font-semibold border-2 border-[#1C252D] hover:bg-gray-400 transition"
              style={{
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
                bolder: "#1C252D",
              }}>
              <Image src={adc} alt="Adc" className="w-6 h-6" />
            </button>
          </div>
          <div className={"flex justify-center "}>
            <div className="bg-amber-300 w-[80%] relative z-2 h-0.5 mt-6" />
          </div>

          <div className={"flex justify-center"}>
            <div className={"mt-5 sm:w-[80%] flex"}>
              <Target
                data={[
                  { name: "yorick", views: "456" },
                  { name: "yorick", views: "456" },
                  { name: "yorick", views: "456" },
                  { name: "yorick", views: "456" },
                  { name: "yorick", views: "456" },
                  { name: "yorick", views: "456" },
                  { name: "yorick", views: "456" },
                  { name: "yorick", views: "456" },
                  { name: "yorick", views: "456" },
                  { name: "yorick", views: "456" },
                  { name: "yorick", views: "456" },
                  { name: "yorick", views: "456" },
                ]}
              />
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Search;
