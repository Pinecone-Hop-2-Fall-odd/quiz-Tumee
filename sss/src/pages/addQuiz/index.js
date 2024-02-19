import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import css from "./index.module.css";
export default function Home() {
  const [quizName, setQuizName] = useState();
  const [quizIMG, setQUIZIMG] = useState();
  const router = useRouter();
  return (
    <div className={css.Div}>
      <input
      className={css.input_1}
        value={quizName}
        onChange={(e) => setQuizName(e.target.value)}
        placeholder="QuizName"
      />
      <input
        className={css.input_2}
        value={quizIMG}
        onChange={(e) => setQUIZIMG(e.target.value)}
        placeholder="Image Url"
      />
      <button
      className={css.but}
        onClick={() => router.push(`/addSkin?quizIMG=${quizIMG}&quizName=${quizName}`)}>
        Add
      </button>
    </div>
  );
}
