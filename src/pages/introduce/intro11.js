import { Link } from "react-router-dom";
import './About.css';
import Location6 from "../Map/Location6";
import introImg from "./images/15.jpg";


const Intro11 = () => {


    return (
        <>
            <div className="container-About">
                <div className="text-center">
                    <h1>세부정보</h1>
                    <h4 className="intrduce">환생</h4>
                    <div className="aboutcol2">
                        <img className="imgescapeabout" alt="logo2" src={introImg} style={{ height: '40%', width: '40%' }} />
                    </div>
                    <p>어린시절의 불우한 삶을 못 이겨 집을 나온 당신.
                        <br /> 지금껏 당신은 특별할 것 없이 평범하게 살다 젊은 나이에 갑작스러운 심장마비로 죽음을 맞이하게 된다.
                        <br /> 저승에서 당신은 모든 재판을 받아 여러 지옥을 무사히 통과해야 한다는 저승의 법도를 알게 된다.
                        <br />재판장에 들어서자 바로 마음에 걸리는 단 한사람...어머니... 나는 나의 부모님께 떳떳하지 못하다.
                        <br />이러한 당신은 무사히 재판에 이겨 다시 인간으로 환생 할 수 있을까?
                    </p>
                    <p className="pastelred-text">★ 추리 테마입니다.
                        <br />테마를 꼭 숙지하시고 예약 부탁드리며, 예약 후 테마 특성 미숙지로 인한 테마 변경 및 환불은 불가합니다.</p>
                    <Link to="/introduce"><button className="btnn intro">테마 소개</button></Link>

                    <a href="http://sevenclues.com/sub/code_sub04_1.html?R_JIJEM=S1&R_THEMA=seven_s6" className="btnn site" target="_blank">사이트 방문하기</a>
                    <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>
                </div>

                <ul>
                    <l1><span className="list">적정플레이 인원수 : </span>
                        <span className="list2"  > 2-6명 </span></l1>
                    <br />
                    <l1><span className="list">플레이시간 : </span>
                        <span className="list2"  > 60분 </span></l1>
                    <br />
                    <l1><span className="list" >공포도 : </span>
                        <span className="list2" > 3.0 점</span></l1>
                    <br />
                    <l1><span className="list" >활동성 : </span>
                        <span className="list2"  > 4.5 점</span></l1>
                    <br />
                    <l1><span className="list" >유저 평점 :</span>
                        <span className="list2" > 3.5 점</span></l1>
                    <br />
                    <l1><span className="list" >난이도 : </span>
                        <span className="list2"> 4.5 점</span></l1>

                </ul>

                <Location6></Location6>

            </div>

        </>
    );
}
export default Intro11;