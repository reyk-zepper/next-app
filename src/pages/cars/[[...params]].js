import { useRouter } from "next/router";

export default function Cars() {
  const router = useRouter();
  const { params = [] } = router.query;
  if (params.length === 2) {
    return (
      <>
        <h1>
          all {params[0]} for under {params[1]} Dollar
        </h1>
      </>
    );
  } else if (params.length === 1) {
    return (
      <>
        <h1>all {params[0]}</h1>
      </>
    );
  }
  return (
    <>
      <h1>cars</h1>
    </>
  );
}
