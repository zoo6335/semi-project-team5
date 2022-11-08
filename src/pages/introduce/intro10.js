import { Link } from "react-router-dom";
import './About.css';
import Location6 from "../Map/Location6";
import introImg from "./images/14.jpg";


const Intro10 = () => {


    return (
        <>
            <div className="container-About">
                <div className="text-center">
                    <h1>세부정보</h1>
                    <h4 className="intrduce">러브에센스 (19금)</h4>
                    <div className="aboutcol2">
                        <img className="imgescapeabout" alt="logo2" src={introImg} style={{ height: '40%', width: '40%' }} />
                    </div>
                    <p>어느덧 이별의 위기가 찾아온 커플.
                        <br /> 오늘도 의미 없는 데이트에 지쳐 돌아가는 길.
                        <br />서로 헤어지자고 말하려는 찰나, 골목길에서 들려오는 의문의 노인 목소리.
                        <br />노인은 다시 사랑이 활활 타오를 수 있는 방법을 은밀히 알려주는데.....
                    </p>
                    <p className="pastelred-text">★ 19금 테마입니다.
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
                        <span className="list2" > 0.0 점</span></l1>
                    <br />
                    <l1><span className="list" >활동성 : </span>
                        <span className="list2"  > 3.5 점</span></l1>
                    <br />
                    <l1><span className="list" >유저 평점 :</span>
                        <span className="list2" > 2.5 점</span></l1>
                    <br />
                    <l1><span className="list" >난이도 : </span>
                        <span className="list2"> 3.0 점</span></l1>

                </ul>

                <Location6></Location6>

            </div>

        </>
    );
}
export default Intro10;