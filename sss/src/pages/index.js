"use client"
import { useRouter } from "next/navigation"
import { Header } from "./components/header"
import { Main } from "./components/main"
import { UserDataContext } from "./_app"
import { useContext, useEffect, useState } from "react"
export default function Home(){
    const router = useRouter();
    /*useEffect(() => {
      const uid = localStorage.getItem("uid");  
      if (uid === null) {
        router.push('/login')
      }
    }, []);*/
    const [quiz, setQuiz] = useState([]);
    const { token } = useContext(UserDataContext);
    const getAllQuiz = async () => {
      try {
          const { data, status } = await axios.get('http://localhost:8000/quiz', { headers: { "token": token } })
          if (status === 200) {
              setQuiz(data.quiz);
          }
      } catch (err) {
          console.log(err);
      }
  }
  const QuestionCard = (props) => {
    const { id, index } = props;

    return (
        <Link href={`/playQuiz/${id}`}>
            <div className="border flex justify-center py-7 w-40 cursor-pointer">
                <p>Quiz #{index}</p>
            </div>
        </Link>
    )
}
  useEffect(() => {
      if (token) {
          getAllQuiz();
      }
  }, [token]);
    return(
        <div>
            <Header/>
            <div onClick={() => router.push(`/quiz`)}>
                {quiz.map((quiz, index) => (
                    <QuestionCard key={quiz._id} id={quiz._id} index={index} />
                ))}
              <button className="startButton"><svg xmlns="http://www.w3.org/2000/svg" height="7vh" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>Start</button>
            </div>
        </div>
    )
}