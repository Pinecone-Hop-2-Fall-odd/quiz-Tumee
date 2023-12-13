import axios from "axios";
import { Header } from "../components/header"
import { useState } from "react";
import { data } from "autoprefixer";
export default function Quiz(){
        const [data1,setData1]=useState('')
        const []=useState('')
    const WOIE_Quiz = async() =>{
        const data = await axios.get('http://localhost:8000/quiz');
        //console.log(data)
        const dataCont =data.data.quiz
        console.log(dataCont)

    }
    WOIE_Quiz();
    return(
        <div>
            <Header />
            <p className="woime">Which skin is most expensive</p>
            <div className="quiz-res-div">
                <img className="button1"></img>
                <img className="button2"></img>
            </div>
        </div>
    )
}