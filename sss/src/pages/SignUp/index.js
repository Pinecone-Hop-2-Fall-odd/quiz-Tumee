import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import css from "./index.module.css";

export default function Home() {
  const [UserName, setUserName] = useState("");
  const [key, setKey] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [age, setAge] = useState("");
  const router = useRouter();
    async function login() {
      const { data } = await axios.post('http://localhost:8000/SignUp', {
        password: key,
        UserName: UserName,
        email : userEmail,
    });
      console.log(`complete`);
      setUserName("");
      router.push(`/login`)
    }
    return (
      <div className={css.body}>
      <div className={css.Div}>
        <h1>Quiz</h1>
        <div className={css.Div1}>
              <input
                className={css.Input}
                placeholder="UserName"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                />
              <input
                className={css.Input}
                placeholder="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                />
              <input
                type="password"
                className={css.Input}
                placeholder="password"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                />
          <button onClick={login} className={css.lOGIN}>
            Sign Up
          </button>
        </div>
        <div>
          <button onClick={() => router.push(`/login`)} className={css.button}>
            Log in?
          </button>
        </div>
      </div>
    </div>
  );
};
  
  