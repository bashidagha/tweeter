import clsx from "clsx";
import React from "react";
import styles from './index.module.scss'

interface IProps {
  classes: string;
  children: any;
  rest: any;
}

export default function Button({ classes, children, ...rest }: IProps) {
  return (
    <button className={clsx(styles.button, classes)} {...rest}>
      {children}
    </button>
  );
}
