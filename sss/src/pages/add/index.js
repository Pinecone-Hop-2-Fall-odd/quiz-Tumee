import { useRouter } from "next/navigation";
import css from "../add/index.module.css"
export default function Home() {
  const router = useRouter();
  return (
    <div className="">
        <button onClick={()=>router.push("/addQuiz")}>
            add Quiz
        </button>
        <button onClick={()=>router.push("/addSkin")}>
            add Skin
        </button>
    </div>
  );
}
