import clsx from "clsx";
import React from "react";
import styles from "./index.module.scss";

interface IProps {
  classes?: string;
  rest?: any;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  placeholder?: string;
  variant?: "normal" | "sm" | "lg";
  defaultValue?: string;
}

export default function Input({
  classes,
  startIcon,
  endIcon,
  placeholder,
  variant = "normal",
  defaultValue,
  ...rest
}: IProps) {
  return (
    <div className={clsx(styles.input, classes, `variant-${variant}`)}>
      {startIcon && (
        <span className={styles.startIconContainer}>{startIcon}</span>
      )}
      <input placeholder={placeholder} {...rest} />
    </div>
  );
}
