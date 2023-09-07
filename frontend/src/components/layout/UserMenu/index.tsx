"use client";
import Typo from "@/components/common/Typo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";
import { UilAngleDown } from "@iconscout/react-unicons";

export default function UserMenu() {
  let showMenu: boolean = false;

  return (
    <div className={styles.container}>
      <div className={styles.viewer}>
        <Image alt="profile" src="/farshid.jpg" width={32} height={32} />
        <Typo Component="span">Xanthe Neal</Typo>
        <UilAngleDown
          onClick={() => {
            showMenu = true;
            console.log("sdfsdf")
          }}
        />
      </div>
      {showMenu && <div className={styles.dropdown}>asdfsd</div>}
    </div>
  );
}
