import { Link } from "react-router-dom";
import { useState } from 'react';
import './About.css';
import Location2 from "../Map/Location2";
import introImg from "./images/2.png";



const About2 = () => {





    return (
        <>
            <div className="container-About">
                <div className="text-center">
                    <h1>세부정보</h1>
                    <h4 className="intrduce">오드의 마법사</h4>
                    <div className="aboutcol2">
                        <img className="imgescapeabout" alt="logo2" src={introImg} style={{ height: '40%', width: '40%' }} />
                    </div>
                    <div className="introducetext" >
                        <p>로드맨션에 입주하시는 입주민 여러분. 반갑습니다
                            <br />빨간 망토를 두른 작은 고양이를 따라 로드멘션으로 들어가는 사람들 과연 그 다음은..?
                        </p>
                        <p className="pastelred-text">★ 추천인원 : 2인 이상 4인 이하 * 3인부터 좁을 수 있습니다.
                            [치마 비추천]
                            [활동성 주의!]
                            <br />꼭 숙지하시고 예약 부탁드리며, 예약 후 테마 특성 미숙지로 인한 테마 변경 및 환불은 불가합니다.</p>
                    </div>
                    <Link to="/introduce"><button className="btnn intro">테마 목록</button></Link>

                    <a href="https://booking.naver.com/booking/12/bizes/540364" className="btnn site" target="_blank">사이트 방문하기</a>
                    <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>
                </div>

                <ul>
                    <l1><span className="list">적정플레이 인원수 : </span>
                        <span className="list2"  > 2명 </span></l1>
                    <br />
                    <l1><span className="list">플레이시간 : </span>
                        <span className="list2"  > 65분 </span></l1>
                    <br />
                    <l1><span className="list" >공포도 : </span>
                        <span className="list2" > 1.5 점</span></l1>
                    <br />
                    <l1><span className="list" >활동성 : </span>
                        <span className="list2"  > 3.5 점</span></l1>
                    <br />
                    <l1><span className="list" >유저 평점 :</span>
                        <span className="list2" > 4.5 점</span></l1>
                    <br />
                    <l1><span className="list" >난이도 : </span>
                        <span className="list2"> 2.5 점</span></l1>

                </ul>

                <Location2></Location2>

            </div>

        </>
    );
}
export default About2;