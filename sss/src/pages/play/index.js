import axios from "axios";
import { Header } from "../components/header";
import { useState, useEffect, useContext } from "react";
import { UserDataContext } from "../_app";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

export default function Quiz() {
  const { token } = useContext(UserDataContext);
  const [quizData, setQuizData] = useState(null);
  const [num, setNum] = useState(0);
  const [time, setTime] = useState(10);
  const [score, setScore] = useState(0);
  const [correct,setCorrect] = useState();
  const Router = useRouter();
  const params=useSearchParams();

  const WOIE_Quiz = async () => {
    const Name=params.get("Name")
    try {
      const { data } = await axios.get(`http://localhost:8000/quizz/${Name}`, {
        headers: { token: token },
      });
      setQuizData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const playQuiz = async (selected) => {
    const { data } = await axios.post("http://localhost:8000/quizF", {
      id: quizData.quiz[num]._id,
      selected,
    });
    if (data.message === "wrong") {
      wrong();
    } else if (data.message === "correct") {
      right();
    }
    setNum(num + 1);
  }; 
  if (time==0){
    setNum(num+1)
    setTime(10)
  } 
  useEffect(() => {
    const second = setInterval(() => setTime((prev) => (prev -= 1)), 1000);
    return () => clearInterval(second);
  }, []);

  function wrong() {
    setCorrect("correct")
    setTime(10)
  }
  
  function right() {
    setCorrect("wrong")
    setScore(score + 1);
    setTime(10)
  }
  let style = {
    
  }
  useEffect(() => {
    if (quizData?.quiz.length === num) {
      Router.push(`/result?point=${score}&num=${num}`);
    }
  }, [num, score]);

  useEffect(() => {
    if (token) {
      WOIE_Quiz();
    }
  }, [token]);

  if (!quizData) return <div>Loading...</div>;
  return (
    <div className="Divv">
      <Header />
      <p className="woime">Guess which one is more expensive</p>
      <p>You have {time}s</p>
      <p>
        {score}/{num}
      </p>
      <p>{correct}</p>
      <div className="quiz-res-div">
        <div onClick={() => playQuiz(0)}>
          <img src={quizData?.quiz[num]?.img_1} className="button1"></img>
          <p className="quiz_name-1">{quizData?.quiz[num]?.quizName_1}</p>
        </div>
        <div onClick={() => playQuiz(1)}>
          <img src={quizData?.quiz[num]?.img_2} className="button2"></img>
          <p className="quiz_name-2">{quizData?.quiz[num]?.quizName_2}</p>
        </div>
      </div>
    </div>
  );
}
