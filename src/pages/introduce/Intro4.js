import { Link } from "react-router-dom";
import { useState } from 'react';
import './About.css';
import Location from "../Map/Location";
import Location3 from "../Map/Location3";
import Location4 from "../Map/Location4";
import introImg from "./images/4.png";


const About4 = () => {


    return (
        <>
            <div className="container-About">
                <div className="text-center">
                    <h1>세부정보</h1>
                    <h4 className="intrduce">지난날을 잊었다</h4>
                    <div className="aboutcol2">
                        <img className="imgescapeabout" alt="logo2" src={introImg} style={{ height: '40%', width: '40%' }} />
                    </div>
                    <p>남자는 하염없이 걷고 또 걸었다.긴 걸음 끝에 작은 사진관을 마주했다.
                        <br />문을 열고 들어가려는 찰나,연분홍빛 벚꽃잎이 콧등을 스쳤다.
                        <br />아, 봄이었구나.</p>
                    <p className="pastelred-text">★ 전체 이용가 테마입니다.
                        <br />꼭 숙지하시고 예약 부탁드리며, 예약 후 테마 특성 미숙지로 인한 테마 변경 및 환불은 불가합니다.</p>
                    <Link to="/introduce"><button className="btn intro">소개</button></Link>

                    <a href="https://xn--2e0b040a4xj.com/reservation?branch=2&theme=9#list" className="btn site" target="_blank">사이트 방문하기</a>
                    <Link to="/Review"><button className="btn page2">후기페이지</button></Link>
                </div>

                <ul>
                    <l1><span className="list">적정플레이 인원수 : </span>
                        <span className="list2"  > 2~4명 </span></l1>
                    <br />
                    <l1><span className="list">플레이시간 : </span>
                        <span className="list2"  > 65분 </span></l1>
                    <br />
                    <l1><span className="list" >공포도 : </span>
                        <span className="list2" > 0.0 점</span></l1>
                    <br />
                    <l1><span className="list" >활동성 : </span>
                        <span className="list2"  > 2.0 점</span></l1>
                    <br />
                    <l1><span className="list" >유저 평점 :</span>
                        <span className="list2" > 4.0 점</span></l1>
                    <br />
                    <l1><span className="list" >난이도 : </span>
                        <span className="list2"> 3.0 점</span></l1>

                </ul>

                <Location4></Location4>

            </div>

        </>
    );
}
export default About4;