import { useRouter } from "next/router";

export default function ID() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>id = {id}</h1>
    </>
  );
}
