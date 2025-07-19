import React from "react";
import Image from "next/image";

import InputOtp from "../InputOtp";
import logo from "@assets/logo.png";

import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.constNavbar}>
      <nav className={styles.constMenu}>
        <div className="sm:max-w-[82%] mx-auto px-4 flex items-center justify-between h-full">
          <div className="flex items-center space-x-4">
            <Image src={logo} alt="logo" width={40} height={40} className="rounded-lg shadow-md" />
          </div>
          <div className="hidden sm:block">{/* <InputOtp big={false} /> */}</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
