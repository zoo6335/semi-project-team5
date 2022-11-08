import { Link } from "react-router-dom";
import { useState } from 'react';
import './About.css';
import Location4 from "../Map/Location4";
import introImg from "./images/5.png";


const About5 = () => {


    return (
        <>
            <div className="container-About">
                <div className="text-center">
                    <h1>세부정보</h1>
                    <h4 className="intrduce"> 퀘스트 : 여정의 시작</h4>
                    <div className="aboutcol2">
                        <img className="imgescapeabout" alt="logo2" src={introImg} style={{ height: '40%', width: '40%' }} />
                    </div>
                    <div className="introducetext" >
                        <p>퀘스트를 수락하시겠습니까?</p>
                        <p className="pastelred-text">★ 전체 이용가 테마입니다.
                            * 지구별 어드벤처 입문 테마로 추천드립니다.
                            <br />테마를 꼭 숙지하시고 예약 부탁드리며, 예약 후 테마 특성 미숙지로 인한 테마 변경 및 환불은 불가합니다.</p>
                    </div>
                    <Link to="/introduce"><button className="btnn intro">테마 소개</button></Link>

                    <a href="https://xn--2e0b040a4xj.com/reservation?branch=2&theme=7&date=2022-10-31#list" className="btnn site" target="_blank">사이트 방문하기</a>

                    <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>
                </div>

                <ul>
                    <l1><span className="list">적정플레이 인원수 : </span>
                        <span className="list2"  > 2~3명 </span></l1>
                    <br />
                    <l1><span className="list">플레이시간 : </span>
                        <span className="list2"  > 40분 </span></l1>
                    <br />
                    <l1><span className="list" >공포도 : </span>
                        <span className="list2" > 1.0 점</span></l1>
                    <br />
                    <l1><span className="list" >활동성 : </span>
                        <span className="list2"  > 3.0 점</span></l1>
                    <br />
                    <l1><span className="list" >유저 평점 :</span>
                        <span className="list2" > 3.0 점</span></l1>
                    <br />
                    <l1><span className="list" >난이도 : </span>
                        <span className="list2"> 3.0 점</span></l1>

                </ul>

                <Location4></Location4>

            </div>

        </>
    );
}
export default About5;