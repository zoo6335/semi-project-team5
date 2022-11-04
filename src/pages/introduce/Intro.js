import { Link } from "react-router-dom";
import { useState } from 'react';
import './About.css';
import Location from "../Map/Location";
import introImg from "./images/1.jpg";



const About = () => {


    return (
        <>
            <div className="container-About">
                <div className="text-center">
                    <h1>세부정보</h1>
                    <h4 className="intrduce">시민상가 철거반</h4>
                    <div className="aboutcol2">
                        <img className="imgescapeabout" alt="logo2" src={introImg} style={{ height: '40%', width: '40%' }} />
                    </div>
                    <p>시민상가에서 철거 반대 농성을 하고 있는 상점 주인들.
                        <br />우리는 시민상가 철거반의 신입 직원으로
                        <br />그들이 농성을 지속할 수 없게 하기 위해 몰래 건물 지하로 들어간다.</p>
                    <p className="pastelred-text">★ 이 테마는 공포테마이며, 조도가 매우 어둡고, 랜턴이 주어지지 않습니다.
                        <br />꼭 숙지하시고 예약 부탁드리며, 예약 후 테마 특성 미숙지로 인한 테마 변경 및 환불은 불가합니다.</p>
                    <Link to="/introduce"><button className="btnn intro">테마 소개</button></Link>

                    <a href="http://dreampicnicescape.com/" className="btnn site" target="_blank">사이트 방문하기</a>
                    <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>
                </div>

                <ul>
                    <l1><span className="list">적정플레이 인원수 : </span>
                        <span className="list2"  > 5명 </span></l1>
                    <br />
                    <l1><span className="list">플레이시간 : </span>
                        <span className="list2"  > 80분 </span></l1>
                    <br />
                    <l1><span className="list" >공포도 : </span>
                        <span className="list2" > 3.0 점</span></l1>
                    <br />
                    <l1><span className="list" >활동성 : </span>
                        <span className="list2"  > 4.0 점</span></l1>
                    <br />
                    <l1><span className="list" >유저 평점 :</span>
                        <span className="list2" > 3.5 점</span></l1>
                    <br />
                    <l1><span className="list" >난이도 : </span>
                        <span className="list2"> 2.0 점</span></l1>

                </ul>

                <Location></Location>

            </div>

        </>
    );
}
export default About;