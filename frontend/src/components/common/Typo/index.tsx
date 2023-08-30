import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

interface IProps {
  classes?: string;
  Component: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
  children: React.ReactNode;
  variant?: "sm" | "lg" | "xl" | "xll";
  weight?: "light" | "normal" | "bold";
}

export default function Typo({
  classes,
  Component,
  children,
  variant,
  weight,
}: IProps) {
  return (
    <Component
      className={clsx(
        classes,
        styles.typo,
        weight ? styles[`weight-${weight}`] : undefined,
        variant ? styles[`variant-${variant}`] : undefined
      )}
    >
      {children}
    </Component>
  );
}
