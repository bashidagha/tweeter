import styles from "./layout.module.scss";
import "./layout.scss";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container}>{children}</div>;
}
