import axios from "axios";
import { Header } from "../components/header"
import ReactPlayer from "react-player"
import { useState } from "react";
export default function Quiz(){
    const WOIE_Quiz = async() =>{
        const { data } = await axios.post('http://localhost:8000/quiz', {
            //FirstPic: first,
            //SecPic: sec
        });
    }
    return(
        <div>
            <Header />
            <p className="woime">Which One is most expensive</p>
            <div className="quiz-res-div">
                <img onClick={WOIE_Quiz} className="button1"></img>
                <img onClick={WOIE_Quiz} className="button2"></img>
            </div>
        </div>
    )
}