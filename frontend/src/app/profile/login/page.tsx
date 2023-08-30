import Typo from "@/components/common/Typo";
import Footer from "@/components/layout/Footer";
import clsx from "clsx";
import Image from "next/image";
import styles from "./page.module.scss";

export default function Login() {
  return (
    <div className={styles.main}>
      <div className={clsx(styles.wrapper, "card")}>
        <Image
          src="/tweeter.svg"
          width="130"
          height="18"
          alt="tweeter"
          className={styles.logo}
        />
        <Typo Component="h2" weight="700">
          Join thousands of learners from around the world
        </Typo>
        <Typo Component={"p"}>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </Typo>
      </div>
      <Footer/>
    </div>
  );
}
