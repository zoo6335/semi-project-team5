import { Link } from "react-router-dom";
import { useState } from 'react';
import './About.css';
import Location5 from "../Map/Location5";
import introImg from "./images/6.jpg";



const About6 = () => {


    return (
        <>
            <div className="container-About">
                <div className="text-center">
                    <h1>세부정보</h1>
                    <h4 className="intrduce">최대감댁 심부름꾼</h4>
                    <div className="aboutcol2">
                        <img className="imgescapeabout" alt="logo2" src={introImg} style={{ height: '40%', width: '40%' }} />
                    </div>
                    <div className="introducetext" >
                        <p>나는 경주.
                            <br />경주에서 올라와 다들 나를 그렇게 부른다. 고아가 된 나를 아가씨가 구해주신 뒤로 아가씨 집에서 일하면서 지내고 있다.
                            <br />아가씨가 시키는 일이라면 무엇이든 할 것이다. 아무리 힘든 일이어도..

                        </p>
                        <p className="pastelred-text">★ 전체 이용가 테마입니다.
                            <br />테마를 꼭 숙지하시고 예약 부탁드리며, 예약 후 테마 특성 미숙지로 인한 테마 변경 및 환불은 불가합니다.</p>
                    </div>
                    <Link to="/introduce"><button className="btnn intro">테마 목록</button></Link>

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
                        <span className="list2" > 1.0 점</span></l1>
                    <br />
                    <l1><span className="list" >활동성 : </span>
                        <span className="list2"  > 4.5 점</span></l1>
                    <br />
                    <l1><span className="list" >유저 평점 :</span>
                        <span className="list2" > 4.0 점</span></l1>
                    <br />
                    <l1><span className="list" >난이도 : </span>
                        <span className="list2"> 3.0 점</span></l1>

                </ul>

                <Location5></Location5>

            </div>

        </>
    );
}
export default About6;