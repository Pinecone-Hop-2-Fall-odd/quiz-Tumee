"use client"
import { useRouter } from "next/navigation"
import { Header } from "./components/header"
import { Main } from "./components/main"
import { useEffect,useState } from "react"
import React from "react"
import ReactPlayer from 'react-player'
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
        <div style={{display:"flex"}} >
          <ReactPlayer
            url={'/video/202311271819.mp4'}
            controls
            playing
            loop
            style={{margin:"-1vh"}}
            width="70vh"
            height="auto"
          />
          <div style={{width:"85vh"}}>
            <Header/>
            <Main />
          </div>
          <ReactPlayer
            url={'/video/202311271819.mp4'}
            controls
            playing
            loop
            style={{marginLeft:"1vh",marginTop:"-1vh"}}
            width="70vh"
            height="auto"
          />
        </div>
    )
}