import { Link } from "react-router-dom";
import { useState } from 'react';
import './About.css';
import Location from "../Map/Location";
import introImg from "./images/8.jpg";


const About8 = () => {


    return (
        <>
            <div className="container-About">
                <div className="text-center">
                    <h1>세부정보</h1>
                    <h4 className="intrduce">냥냥펀치 (일상)</h4>
                    <div className="aboutcol2">
                        <img className="imgescapeabout" alt="logo2" src={introImg} style={{ height: '40%', width: '40%' }} />
                    </div>
                    <p>야옹~! 냥 미야옹 냐아오!
                        <br />냥... 냐아-냐앙 냐오옹?
                    </p>
                    <p className="pastelred-text">★ 전체 이용가 테마입니다.
                        <br />테마를 꼭 숙지하시고 예약 부탁드리며, 예약 후 테마 특성 미숙지로 인한 테마 변경 및 환불은 불가합니다.</p>
                    <Link to="/introduce"><button className="btn intro">소개</button></Link>

                    <a href="http://dreampicnicescape.com/" className="btn site" target="_blank">사이트 방문하기</a>
                    <Link to="/Review"><button className="btn page2">후기페이지</button></Link>
                </div>

                <ul>
                    <l1><span className="list">적정플레이 인원수 : </span>
                        <span className="list2"  > 1~6명 </span></l1>
                    <br />
                    <l1><span className="list">플레이시간 : </span>
                        <span className="list2"  > 60분 </span></l1>
                    <br />
                    <l1><span className="list" >공포도 : </span>
                        <span className="list2" > 0.0 점</span></l1>
                    <br />
                    <l1><span className="list" >활동성 : </span>
                        <span className="list2"  > 2.5 점</span></l1>
                    <br />
                    <l1><span className="list" >유저 평점 :</span>
                        <span className="list2" > 4.5 점</span></l1>
                    <br />
                    <l1><span className="list" >난이도 : </span>
                        <span className="list2"> 4.0 점</span></l1>

                </ul>

                <Location></Location>

            </div>

        </>
    );
}
export default About8;