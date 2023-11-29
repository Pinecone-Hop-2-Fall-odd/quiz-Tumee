import { Header } from "../components/header"
import ReactPlayer from "react-player"
export default function Quiz(){
    return(
        <div>
            <Header />
            <p style={{justifyContent:"center",textAlign:"center"}}>Which One is most expensive</p>
            <div className="quiz-res-div">
                <img className="button1"></img>
                <ReactPlayer
                    url={'/video/timer.mp4'}
                    controls
                    playing
                    width="30vh"
                    style={{marginTop:"24vh"}}
                    height="auto"
                 />
                <img className="button2"></img>
            </div>
        </div>
    )
}