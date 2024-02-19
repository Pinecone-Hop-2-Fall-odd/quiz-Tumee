import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from '../components/input';
import css from './index.module.css'

 export default function Home() {
  const [UserName, setUserName] = useState("");
  const [key,setKey] = useState("")
  const router = useRouter();
  const login = async () => {
    try {
      const { status, data } = await axios.post('http://localhost:8000/login', {
        password: key,
        UserName: UserName
      })
      if (status === 200) {
          if (data?.token) {
              localStorage.setItem("token", data.token);
              router.push('/');
          }

      }
  } catch (error) { }
        } 
    return (
      <div className={css.body}>
        <div className={css.Div}>
          <img></img>
            <div className={css.Div1}>
                <Input 
                className={css.Input} 
                placeholder="Username" 
                value={UserName} 
                onChange={(e) => setUserName(e.target.value)} />
                <Input 
                type="hidden"
                className={css.Input} 
                placeholder="password" 
                value={key} 
                onChange={(e) => setKey(e.target.value)}/>
                <button onClick={login} className={css.lOGIN}>LOG IN</button>
            </div>
            <div>
                <button  className={css.button}>Forget Password?</button>
                <button onClick={router.push("/SignUp")} className={css.button}>Sign Up?</button>
            </div>
        </div>
      </div>
    )
  }