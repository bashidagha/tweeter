import Typo from "@/components/common/Typo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

export default function Header({ type = 1 }: { type?: number }) {
  return (
    <div className={styles.wrapper}>
      {type === 1 && (
        <>
          <Image
            src="/tweeter.svg"
            width="130"
            height="18"
            alt="tweeter"
            className={styles.logo}
          />
          <div>Profile</div>
        </>
      )}
    </div>
  );
}
