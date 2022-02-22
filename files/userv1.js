import styles from "../styles/Home.module.css";

export default function User(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Its User Page</h1>
        <h3>{props.name}</h3>
      </main>
    </div>
  );
}

export function getStaticProps (){
  console.log("Rendering User Page HTML Document");
   return {
     props: {
       name: "Azmul Hossain"
     }
   }
}