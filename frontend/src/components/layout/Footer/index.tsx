import Typo from "@/components/common/Typo";
import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";

export default function Footer({ type = 1 }: { type?: number }) {
  return (
    <div className={styles.wrapper}>
      {type === 1 ? (
        <>
          <Typo Component="p" variant="sm">
            created by&nbsp;
            <Link href={"https://github.com/bashidagha"}>bashidagha</Link>
          </Typo>
          <Typo Component="p" variant="sm">
            <Link href={"https://devchallenges.io/"}>devChallenges.io</Link>
          </Typo>
        </>
      ) : (
        <Typo Component="p" variant="sm">
          created by
          <Link href={"https://github.com/bashidagha"}>bashidagha</Link> -
          devChallenges.io
        </Typo>
      )}
    </div>
  );
}
