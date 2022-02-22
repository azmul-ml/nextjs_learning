import styles from "../styles/Home.module.css";

export default function Ssr() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Its SSR Page</h1>
      </main>
    </div>
  );
}
