import Image from "next/image";
import styles from "./page.module.css";
import { UilAirplay } from "@iconscout/react-unicons";
import clsx from "clsx";
import Typo from "@/components/common/Typo";

export default function Login() {
  return (
    <div className={styles.main}>
      <div className={clsx(styles.wrapper, "card")}>
        <Image src="/tweeter.svg" width="130" height="18" alt="tweeter" />
        <Typo Component="h2" weight="700">
          Join thousands of learners from around the world
        </Typo>
        <Typo Component={"p"} variant="xl">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </Typo>
      </div>
    </div>
  );
}
