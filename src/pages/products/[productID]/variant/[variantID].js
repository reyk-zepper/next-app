import { useRouter } from "next/router";

export default function VariantID() {
  const router = useRouter();
  const { productID, variantID } = router.query;

  return (
    <>
      <h1>
        productID = {productID} for variantID = {variantID}
      </h1>
    </>
  );
}
