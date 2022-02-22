import styles from "../styles/Home.module.css";

export default function SingleUser({ user }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Single User Page</h1>
        {user && (
          <h3 key={user.id}>
            {user.name} {user.salary}
          </h3>
        )}
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3004/api/users");
  const users = await res.json();

  const paths = users.map((user) => {
    return {
      params: {
        id: `${user.id}`,
      },
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3004/api/users/${params.id}`);
  const data = await res.json();

  return {
    props: {
      user: data,
    },
    revalidate: 5
  };
}
