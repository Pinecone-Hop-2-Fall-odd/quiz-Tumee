"use client"
import { useRouter } from "next/navigation"
import { Header } from "./components/header"
import { Bar } from "./components/bar"
import { Footer } from "./components/footer"
import { Main } from "./components/main"
import { useEffect } from "react"
export default function Home(){
    const router = useRouter();

    useEffect(() => {
      const uid = localStorage.getItem("uid");
  
      if (uid === null) {
        router.push('/login')
      }
    }, []);
  
    return(
        <div>
            <Header/>
            <Bar />
            <Main />
            <Footer />
        </div>
    )
}