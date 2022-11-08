import { Link } from "react-router-dom";
import './About.css';
import Location3 from "../Map/Location3";
import introImg from "./images/16.png";


const Intro12 = () => {


    return (
        <>
            <div className="container-About">
                <div className="text-center">
                    <h1>세부정보</h1>
                    <h4 className="intrduce">미스테리 동호회 (정신병원)</h4>
                    <div className="aboutcol2">
                        <img className="imgescapeabout" alt="logo2" src={introImg} style={{ height: '40%', width: '40%' }} />
                    </div>
                    <p>우리들은 미제사건을 파헤치는 미스터리 동호회 회원이다.
                        <br />이상정신병원 실종사건은 10대들만 실종되었던 미제사건이다.
                        <br />이때 병원장이 용의자로 지목이 되었지만 병원장도 현재 실종된 사건이다.
                        <br />이 사건을 풀기 위해 정신병원에 들어갔다. 그 순간 모든 문이 잠기고 나갈 수가 없다.
                        <br />사건의 진실을 알아내고 무사히 이곳을 빠져나가야 한다.
                    </p>
                    <p className="pastelred-text">★ 공포 테마입니다.
                        <br />꼭 숙지하시고 예약 부탁드리며, 예약 후 테마 특성 미숙지로 인한 테마 변경 및 환불은 불가합니다.</p>
                    <Link to="/introduce"><button className="btnn intro">테마 소개</button></Link>

                    <a href="https://booking.naver.com/booking/12/bizes/762346" className="btnn site" target="_blank">사이트 방문하기</a>
                    <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>
                </div>

                <ul>
                    <l1><span className="list">적정플레이 인원수 : </span>
                        <span className="list2"  > 2~6명 </span></l1>
                    <br />
                    <l1><span className="list">플레이시간 : </span>
                        <span className="list2"  > 60분 </span></l1>
                    <br />
                    <l1><span className="list" >공포도 : </span>
                        <span className="list2" > 4.0 점</span></l1>
                    <br />
                    <l1><span className="list" >활동성 : </span>
                        <span className="list2"  > 3.5 점</span></l1>
                    <br />
                    <l1><span className="list" >유저 평점 :</span>
                        <span className="list2" > 3.5 점</span></l1>
                    <br />
                    <l1><span className="list" >난이도 : </span>
                        <span className="list2"> 4.0 점</span></l1>

                </ul>

                <Location3></Location3>

            </div>

        </>
    );
}
export default Intro12;