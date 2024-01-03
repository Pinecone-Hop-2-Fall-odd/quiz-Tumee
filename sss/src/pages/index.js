"use client"
import { useRouter } from "next/navigation"
import { Header } from "./components/header"
import { Main } from "./components/main"
import { useEffect,useState } from "react"
import { Video } from "./components/video"
export default function Home(){
    const router = useRouter();
    //useEffect(() => {
      //const uid = localStorage.getItem("uid");  
      //if (uid === null) {
        //router.push('/login')
      //}
    //}, []);
    const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
    return(
        <div>
            <Header/>
            <Main />
        </div>
    )
}