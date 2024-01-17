import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const { point, num } = router.query;

  console.log(point, num);
  return (
    <div className="">
      <h1>Congratulations</h1>
      <p>you passed the test</p>
      <div>{point}/{num}</div>
    </div>
  );
}
