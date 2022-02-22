import styles from "../styles/Home.module.css";

export default function Ssr(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Its SSR Page</h1>
        {props.users.map((user) => (
          <h3 key={user.id}>
            {user.name} {user.salary}
          </h3>
        ))}
      </main>
    </div>
  );
}

const delay = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, 5000);
  });
};

export async function getServerSideProps() {
  await delay();
  const res = await fetch("http://localhost:3004/api/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}
