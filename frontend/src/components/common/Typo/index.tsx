import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

interface IProps {
  classes: string;
  Component: any;
  children: any;
}

export default function Typo({ classes, Component, children }: IProps) {
  return (
    <Component className={clsx(classes, styles.typo)}>{children}</Component>
  );
}
