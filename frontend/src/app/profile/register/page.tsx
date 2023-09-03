"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Typo from "@/components/common/Typo";
import Footer from "@/components/layout/Footer";
import {
  UilEnvelopeAlt,
  UilLock,
  UilGoogle,
  UilFacebook,
  UilTwitter,
  UilGithub,
} from "@iconscout/react-unicons";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./page.module.scss";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

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

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Email"
            startIcon={<UilEnvelopeAlt />}
            classes={styles.input}
            register={register}
          />
          <Input
            placeholder="Password"
            startIcon={<UilLock />}
            classes={styles.input}
            register={register}
          />
          <Button classes={styles.login_btn} type="submit">
            Start coding now
          </Button>
        </form>

        <Typo Component="p" variant="sm" classes={styles.text_mute}>
          or continue with these social profile
        </Typo>

        <div className={styles.social_icons}>
          <Link href={"google.com"}>
            <UilGoogle />
          </Link>
          <Link href={"google.com"}>
            <UilFacebook />
          </Link>
          <Link href={"google.com"}>
            <UilTwitter />
          </Link>
          <Link href={"google.com"}>
            <UilGithub />
          </Link>
        </div>

        <Typo Component="p" variant="sm" classes={styles.text_mute}>
          Adready a member? <Link href={"/profile/login"}>Login</Link>
        </Typo>
      </div>
      <Footer />
    </div>
  );
}
