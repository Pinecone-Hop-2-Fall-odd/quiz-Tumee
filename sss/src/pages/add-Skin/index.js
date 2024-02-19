import axios from "axios";
import { useState, useEffect } from "react";
import { Quiz } from "../components/quiz";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
export default function Home(props) {
  const [quizD, setQuizD] = useState([]);
  const router = useRouter();

  const quiz1 = async () => {
    const quiz = await axios.get("http://localhost:8000/quiz");
    const datas = quiz.data.quizs;
    const filteredObjects = datas.reduce((acc, item) => {
      acc[item.name] = item;
      return acc;
    }, {});

    const finalData = Object.values(filteredObjects);
    setQuizD(finalData);
    console.log("finalData", finalData);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      router.push("/login");
    }
    quiz1();
  }, []);
  return (
    <div>
      <div style={{justifyContent:'center',textAlign:"center"}}><ColoredText text={"Which quiz you want to add skin"} /></div>
      <div
        style={{
          display: "flex",
          position:"absolute",
          flexWrap: "wrap",
          justifyContent:"center",
          textAlign:"center",
          paddingRight:"50vh",
          paddingLeft:"55vh",
          gap: "10vh",
          marginTop: "20vh",
        }}
      >
        {quizD?.map((cur) => (
          <Quiz
            IMG={cur.img}
            Name={cur.name}
            onclick={() =>
              router.push(`/addSkin?quizName=${cur.name}&quizIMG=${cur.img}`)
            }
          />
        ))}
      </div>
    </div>
  );
}

const ColoredText = ({ text }) => {
  const randomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)} , ${Math.floor(
      Math.random() * 256
    )} , ${Math.floor(Math.random() * 256)})`;
  };
  const array = text.split("");
  console.log("array", array);
  return array.map((cur) => (
    <span style={{ color: randomColor(),fontSize:"5vh"}}>{cur}</span>
  ));
};