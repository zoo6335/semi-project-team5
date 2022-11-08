import { Link } from "react-router-dom";
import { useState } from 'react';
import './About.css';
import Location5 from "../Map/Location5";
import introImg from "./images/7.jpg";



const About7 = () => {


    return (
        <>
            <div className="container-About">
                <div className="text-center">
                    <h1>세부정보</h1>
                    <h4 className="intrduce">왕자 레오</h4>
                    <div className="aboutcol2">
                        <img className="imgescapeabout" alt="logo2" src={introImg} style={{ height: '40%', width: '40%' }} />
                    </div>
                    < div className="introducetext" >
                        <p>나난, 평화로운 클루 성에 사는 왕자 레오.
                            <br /> 평소와 같이 아침에 눈을 떠보니 부모님, 사부님을 비롯한 모두의 흔적이 보이지 않는다.
                            <br />모두 어디로 간 거지? 내가 찾아봐야겠어!
                        </p>
                    </div>
                    <p className="pastelred-text">★ 전체 이용가 테마입니다.
                        <br />테마를 꼭 숙지하시고 예약 부탁드리며, 예약 후 테마 특성 미숙지로 인한 테마 변경 및 환불은 불가합니다.</p>
                    <Link to="/introduce"><button className="btnn intro">테마 소개</button></Link>

                    <a href="http://www.theclue.co.kr/kor/main/" className="btnn site" target="_blank">사이트 방문하기</a>
                    <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>
                </div>

                <ul>
                    <l1><span className="list">적정플레이 인원수 : </span>
                        <span className="list2"  > 2~5명 </span></l1>
                    <br />
                    <l1><span className="list">플레이시간 : </span>
                        <span className="list2"  > 60분 </span></l1>
                    <br />
                    <l1><span className="list" >공포도 : </span>
                        <span className="list2" > 1.5 점</span></l1>
                    <br />
                    <l1><span className="list" >활동성 : </span>
                        <span className="list2"  > 4.0 점</span></l1>
                    <br />
                    <l1><span className="list" >유저 평점 :</span>
                        <span className="list2" > 2.0 점</span></l1>
                    <br />
                    <l1><span className="list" >난이도 : </span>
                        <span className="list2"> 3.0 점</span></l1>

                </ul>

                <Location5></Location5>

            </div>

        </>
    );
}
export default About7;