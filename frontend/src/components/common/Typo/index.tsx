import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

interface IProps {
  classes?: string;
  Component: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
  children: React.ReactNode;
  variant?: "xsm" | "sm" | "normal" | "lg" | "xl" | "xll";
  weight?: "300" | "400" | "500" | "600" | "700";
}

export default function Typo({
  classes,
  Component,
  children,
  variant = "normal",
  weight = "500",
}: IProps) {
  return (
    <Component
      className={clsx(
        classes,
        styles.typo,
        styles[`weight-${weight}`],
        styles[`variant-${variant}`] 
      )}
    >
      {children}
    </Component>
  );
}
