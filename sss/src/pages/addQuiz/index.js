import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import css from "./index.module.css";
export default function Home() {
  const [quizName, setQuizName] = useState();
  const [quizIMG, setQUIZIMG] = useState();
  const router = useRouter();
  return (
    <div className="">
      <input
        value={quizName}
        onChange={(e) => setQuizName(e.target.value)}
        placeholder="Quiz Name"
      />
      <input
        value={quizIMG}
        onChange={(e) => setQUIZIMG(e.target.value)}
        placeholder="Image"
      />
      <button
        onClick={() => router.push(`/addSkin?quizIMG=${quizIMG}&quizName=${quizName}`)}>
        Add
      </button>
    </div>
  );
}
