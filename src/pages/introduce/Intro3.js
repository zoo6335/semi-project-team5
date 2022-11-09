import { Link } from "react-router-dom";
import './About.css';
import Location3 from "../Map/Location3";
import introImg from "./images/3.png";


const About3 = () => {


    return (
        <>
            <div className="container-About">
                <div className="text-center">
                    <h1>세부정보</h1>
                    <h4 className="intrduce">마녀의 숨겨진물약</h4>
                    <div className="aboutcol2">
                        <img className="imgescapeabout" alt="logo2" src={introImg} style={{ height: '40%', width: '40%' }} />
                    </div>
                    <div className="introducetext" >
                        <p>산에서 길을 잃어버렸다. 찾아도 길이 나오지 않아 이리저리 뛰어다니다 집 한 채를 발견했다
                            <br />느낌이 이상했지만 추운 나머지 들어가서 둘러보다가 목이 말라 테이블에 있던 음료를 마셨는데 장난감이 되었다.
                            <br />알고보니 여긴 사람들이 조심하라고 말했던 마녀의 집이였다. 마녀의 집 어딘가에 분명 인간으로 돌아가는 약이 있을 거야
                            <br /> 마녀가 돌아오기 전에 약을 찾아 다시 인간이 되어 마녀의 집을 탈출해야한다.</p>
                        <p className="pastelred-text">★ 전체 이용가 테마입니다.
                            <br />꼭 숙지하시고 예약 부탁드리며, 예약 후 테마 특성 미숙지로 인한 테마 변경 및 환불은 불가합니다.</p>
                    </div>
                    <Link to="/introduce"><button className="btnn intro">테마 목록</button></Link>

                    <a href="https://booking.naver.com/booking/12/bizes/762346" className="btnn site" target="_blank">사이트 방문하기</a>
                    <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>
                </div>

                <ul>
                    <l1><span className="list">적정플레이 인원수 : </span>
                        <span className="list2"  > 4명 </span></l1>
                    <br />
                    <l1><span className="list">플레이시간 : </span>
                        <span className="list2"  > 60분 </span></l1>
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
                        <span className="list2"> 4.0 점</span></l1>

                </ul>

                <Location3></Location3>

            </div>

        </>
    );
}
export default About3;