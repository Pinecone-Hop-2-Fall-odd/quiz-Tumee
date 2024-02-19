import { useRouter } from "next/navigation";
import css from "../add/index.module.css"
export default function Home() {
  const router = useRouter();
  return (
    <div className={css.Div}>
      <div>
        <p className={css.p1}>Add Quiz</p>
        <button className={css.button_1} onClick={()=>router.push("/addQuiz")}></button>
      </div>
      <div>
        <p className={css.p1}>Add Skin</p>
        <button className={css.button_2} onClick={()=>router.push("/add-Skin")}></button>
      </div>
    </div>
  );
}
