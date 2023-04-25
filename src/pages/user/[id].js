export default function index({ users }) {
  return (
    <div>
      <h1>user list</h1>
      <h3>{users.name}</h3>
      <p>{users.email}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const ids = users.map((user) => user.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
}
