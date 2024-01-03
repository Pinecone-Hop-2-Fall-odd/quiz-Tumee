import axios from "axios";
import { Header } from "../components/header";
import { useState,useEffect,useContext } from "react";
import { UserDataContext } from "../layout";
import Router from "next/navigation";

export default function Quiz() {
  const { token } = useContext(UserDataContext);
  const [quizData, setQuizData] = useState(null)
  
  const WOIE_Quiz = async () => {
    try {
      const { data } = await axios(`http://localhost:8000/quiz`, { headers: { "shhhh": token } });
      setQuizData(data)
  } catch (err) {
      console.log(err);
  }
  };
  const quiz = async () =>{
    const quizF = await axios.get("http://localhost:8000/quizF",{
      img: quizData,
      }
    )
  }
  useEffect(() => {
    if (token) {
        WOIE_Quiz();
    }
}, [token])

if (!quizData) return <div>Loading...</div>
  return (
    <div>
      <Header />
      <p className="woime">Which skin is more expensive</p>
      <div className="quiz-res-div">
        <div onClick={quiz}>
          <img className="button1"></img>
          <p></p>
        </div>
        <div onClick={quiz}>
          <img src="" className="button2"></img>
          <p></p>
        </div>
      </div>
    </div>
  );
}
