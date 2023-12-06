import axios from "axios";
import { Header } from "../components/header"
import { useState } from "react";
import { data } from "autoprefixer";
export default function Quiz(){
        
    const WOIE_Quiz = async() =>{
        const { data } = await axios.post('http://localhost:8000/quiz');
    }
    WOIE_Quiz();
    const data1=data.img
    const data2=data.price
    function quiz(){
        if(data1(0)<data1(1)){
            
        }
        else if(data1(0)>data1(1)){
            
        }
    }
    return(
        <div>
            <Header />
            <p className="woime">Which one is most expensive</p>
            <div className="quiz-res-div">
                <img onClick={quiz} className="button1"></img>
                <img onClick={quiz} className="button2"></img>
            </div>
        </div>
    )
}