import axios from "axios";
import { Header } from "../components/header";
import { useState } from "react";
import { data } from "autoprefixer";

export default function Quiz() {
  const [quizImg1, setQuizImg1] = useState("");
  const [quizName1, setQuizName1] = useState("");
  const [quizImg2, setQuizImg2] = useState("");
  const [quizName2, setQuizName2] = useState("");
  
  const WOIE_Quiz = async () => {
    const data = await axios.get("http://localhost:8000/quiz");
      const dataCont = data.data.quiz;
  };
  const quiz = async () =>{
    const quizF = await axios.get("http://localhost:8000/quizF",{
      img1: quizImg1,
      img2: quizImg2
      }
    )
  }
  WOIE_Quiz();

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
        </div>
      </div>
    </div>
  );
}
