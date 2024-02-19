"use client";
import axios from "axios";
import { useRouter } from "next/router";
import { Header } from "./components/header";
import { Quiz } from "./components/quiz";
import { UserDataContext } from "./_app";
import { useContext, useEffect, useState } from "react";
export default function Home() {
  const [quizData, setQuizData] = useState(1);
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
    setQuizData(quizData + 1);
    const token = localStorage.getItem("token");
    if (token === null) {
      router.push("/login");
    }
    quiz1();
  }, []);

  return (
    <div className="Div_1">
      <Header />
      <div
        style={{
          justifyContent: "center",
          textAlign: "start",
          display: "flex",
          flexWrap: "wrap",
          gap: "10vh",
          marginTop: "10vh",
          marginRight: "40vh",
          marginLeft: "40vh",
        }}
      >
        {quizD?.map((cur) => (
          <Quiz
            IMG={cur.img}
            Name={cur.name}
            onclick={() => router.push(`/play?Name=${cur.name}`)}
          />
        ))}
      </div>
    </div>
  );
}
