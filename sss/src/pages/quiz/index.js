import axios from "axios";
import { Header } from "../components/header";
import { useState, useEffect, useContext } from "react";
import { UserDataContext } from "../_app";
import Answer from "../components/Question"

export default function Quiz() {
  const { token } = useContext(UserDataContext);
  const [quizData, setQuizData] = useState(null);

  const WOIE_Quiz = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/quiz`, {
        headers: { token: token },
      });
      setQuizData(data);
    } catch (err) {
      console.log(err);
    }
  };
  const quiz = async () => {
    const quizF = await axios.get("http://localhost:8000/quizF", {
      img1 : quizData.quiz[0].img_1,
      img2 : quizData.quiz[0].img_2
    });
  };
  useEffect(() => {
    if (token) {
      WOIE_Quiz();
    }
  }, [token]);
  if (!quizData) return <div>Loading...</div>;
  return (
    <div>
      <Header />
      <p className="woime">Which skin is more expensive</p>
      <div className="quiz-res-div">
      {quizData.map((quiz)=>(
        {Answer}
      ))}
      </div>
    </div>
  );
}
