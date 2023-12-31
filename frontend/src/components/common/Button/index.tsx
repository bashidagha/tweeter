import clsx from "clsx";
import React from "react";
import styles from "./index.module.scss";

interface IProps {
  classes?: string;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "normal" | "sm" | "lg";
  rest?: any;
}

export default function Button({
  classes,
  children,
  startIcon,
  endIcon,
  variant = "normal",
  ...rest
}: IProps) {
  return (
    <button
      className={clsx(styles.button, classes, `btn-${variant}`)}
      {...rest}
    >
      {startIcon && (
        <span className={styles.startIconContainer}>{startIcon}</span>
      )}
      {children}
    </button>
  );
}
