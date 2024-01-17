import axios from "axios";
import { Header } from "../components/header";
import { useState, useEffect, useContext } from "react";
import { UserDataContext } from "../_app";
import Answer from "../components/Question";
import Router, { useRouter } from "next/navigation";

export default function Quiz() {
  const { token } = useContext(UserDataContext);
  const [quizData, setQuizData] = useState(null);
  const [num , setNum]=useState(0)
  const [score , setScore]=useState(0)
  const Router = useRouter()

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
  const playQuiz = async (selected) => {
    const { data } = await axios.post("http://localhost:8000/quizF", {
      id: quizData.quiz[num]._id,
      selected,
    });
    if (data.message === "wrong") {
      alert("wrong");
    }
    else if (data.message === 'correct'){
      alert("correct")
      setScore(score+1)
    }
    setNum(num+1)
      if(quizData?.quiz[num+1]?.img_1 == undefined){
        Router.push(`/result?point=${score}&num=${num}`)}
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
      <p>{score}/{num}</p>
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
