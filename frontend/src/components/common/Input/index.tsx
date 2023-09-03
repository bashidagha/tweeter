import clsx from "clsx";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import styles from "./index.module.scss";

interface IProps {
  classes?: string;
  rest?: any;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  placeholder?: string;
  variant?: "normal" | "sm" | "lg";
  defaultValue?: string;
  register?: any;
}

export default function Input({
  classes,
  startIcon,
  endIcon,
  placeholder,
  variant = "normal",
  defaultValue,
  register,
}: IProps) {
  return (
    <div className={clsx(styles.input, classes, `variant-${variant}`)}>
      {startIcon && (
        <span className={styles.startIconContainer}>{startIcon}</span>
      )}
      <input placeholder={placeholder} {...register} />
    </div>
  );
}
