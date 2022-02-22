import styles from "../styles/Home.module.css";

export default function Ssr(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Its SSR Page</h1>
        <h3>{props.message}</h3>
      </main>
    </div>
  );
}

export function getServerSideProps (){
   return {
     props: {
       message: "Server Data"
     }
   }
}