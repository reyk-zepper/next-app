import Image from "next/image";

export default function index({ users, photos }) {
  return (
    <div>
      <h1>user list</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

// SSG + ISR;
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
    revalidate: 10,
  };
}

export async function getStaticPics() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
}

//SSR
// export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();

//   return {
//     props: {
//       users,
//     },
//   };
// }
