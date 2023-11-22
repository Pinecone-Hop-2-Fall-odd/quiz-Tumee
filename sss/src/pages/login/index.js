import axios from 'axios';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import css from './index.module.css'
export default function Home() {
  const [UserName, setUserName] = useState("");
  const [key,setKey] = useState("")
  const router = useRouter();
  const login = async () => {
    const { data } = await axios.post('http://localhost:8000/login', {
            password: key,
            UserName: UserName
        });
        if (data?.user) {
            localStorage.setItem("uid", data.user.id);
            router.push('/');
        }
  };
    return (
      <div className={css.body}>
        <div className={css.Div}>
            <h1>Quiz</h1>
            <div className={css.Div1}>
                <input 
                className={css.Input} 
                placeholder="UserName" 
                value={UserName} 
                onChange={(e) => setUserName(e.target.value)} />
                <input type='password' 
                className={css.Input} 
                placeholder="password" 
                value={key} 
                onChange={(e) => setKey(e.target.value)}/>
                <button onClick={login} className={css.lOGIN}>LOG IN</button>
            </div>
            <div>
                <button  className={css.button}>Forget Password?</button>
                <button onClick={()=>router.push("/SignUp")} className={css.button}>Sign Up?</button>
            </div>
        </div>
      </div>
    )
  }