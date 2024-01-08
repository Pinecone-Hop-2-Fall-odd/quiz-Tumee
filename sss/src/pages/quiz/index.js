import axios from "axios";
import { Header } from "../components/header";
import { useState, useEffect, useContext } from "react";
import { UserDataContext } from "../_app";

export default function Quiz() {
  const { token } = useContext(UserDataContext);
  const [quizData, setQuizData] = useState(null);

  const WOIE_Quiz = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8000/quiz`, {
        headers: { token: token },
      });
      setQuizData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const quiz = async () => {
    const quizF = await axios.get("http://localhost:8000/quizF", {
      img1 : quizData.quiz[0].img,
      img2 : quizData.quiz[1].img
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
        <div onClick={quiz}>
          <img src={quizData.quiz[0].img} className="button1"></img>
          <p className="quiz_name-1">{quizData.quiz[0].quizName}</p>
        </div>
        <div onClick={quiz}>
          <img src={quizData.quiz[1].img} className="button2"></img>
          <p className="quiz_name-2">{quizData.quiz[1].quizName}</p>
        </div>
      </div>
    </div>
  );
}
