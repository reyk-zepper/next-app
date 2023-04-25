import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.main}>{children}</div>
    </>
  );
}
