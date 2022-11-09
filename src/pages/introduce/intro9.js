import { Link } from "react-router-dom";
import './About.css';
import Location from "../Map/Location";
import introImg from "./images/13.png";


const Intro9 = () => {


    return (
        <>
            <div className="container-About">
                <div className="text-center">
                    <h1>세부정보</h1>
                    <h4 className="intrduce"> BECOME : 시작</h4>
                    <div className="aboutcol2">
                        <img className="imgescapeabout" alt="logo2" src={introImg} style={{ height: '40%', width: '40%' }} />
                    </div>
                    < div className="introducetext" >
                        <p>테러범에게서 동생을 구하기 위해 그들의 지시에 따라 알지 못하는 과거로 가게 된 주인공은
                            <br />테러범들에게 지급 받은 로스트 요원의 장치와 노트를 가지고 ‘델모칩 설계도’를 찾아다니게 되는데...
                            <br />서울 성북에서 시작하는 여정!
                        </p>
                        <p className="pastelred-text">★ 전용 어플리케이션으로 이용되는 야외 방탈출입니다. 상세정보는 어플리케이션에서 확인하세요
                            <br />테마를 꼭 숙지하시고 예약 부탁드리며, 예약 후 테마 특성 미숙지로 인한 테마 변경 및 환불은 불가합니다.</p>
                    </div>
                    <Link to="/introduce"><button className="btnn intro">테마 목록</button></Link>

                    <a href="https://lostagent.team/shop_view/?idx=3" className="btnn site" target="_blank">사이트 방문하기</a>
                    <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>
                </div>

                <ul>
                    <l1><span className="list">적정플레이 인원수 : </span>
                        <span className="list2"  > 제한없음 </span></l1>
                    <br />
                    <l1><span className="list">플레이시간 : </span>
                        <span className="list2"  > 시간상관없음 </span></l1>
                    <br />
                    <l1><span className="list" >공포도 : </span>
                        <span className="list2" > 0.0 점</span></l1>
                    <br />
                    <l1><span className="list" >활동성 : </span>
                        <span className="list2"  > 5.0 점</span></l1>
                    <br />
                    <l1><span className="list" >유저 평점 :</span>
                        <span className="list2" > 4.5 점</span></l1>
                    <br />
                    <l1><span className="list" >난이도 : </span>
                        <span className="list2"> 4.0 점</span></l1>

                </ul>


            </div>

        </>
    );
}
export default Intro9;