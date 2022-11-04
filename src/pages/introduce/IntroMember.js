import { Link } from "react-router-dom";
import './About.css';
import introImg12 from "./images/12.png";



const Intro = () => {


    return (
        <>
            <div className="container-About ">
                <div className="text-center">
                    <h1>안녕하세요 나가방입니다.</h1>
                    <div className="aboutcol2">
                        <img className="imgescapeabout" alt="logo2" src={introImg12} style={{ height: '40%', width: '40%' }} />
                    </div>
                    <h2>조원 : 조동주,정재이,박하늘 ,이주연,이정운 </h2>


                </div>


                <Link to="/"><button className="btnn page2">홈가기</button></Link>
            </div>




        </>
    );
}
export default Intro;