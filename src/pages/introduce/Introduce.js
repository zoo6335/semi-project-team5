import { Link } from "react-router-dom";
import './Home.css';
import introImg from "./images/1.jpg";
import introImg2 from "./images/2.png";
import introImg3 from "./images/3.png";
import introImg4 from "./images/4.png";
import introImg5 from "./images/5.png";
import introImg6 from "./images/6.jpg";
import introImg7 from "./images/7.jpg";
import introImg8 from "./images/8.jpg";





const Home = () => {
    return (
        <div className="flex_container">
            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col1">
                    <img className="imgescape" alt="image11" src={introImg} style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 시민상가 철거반</h3>
                    <p className="">경기/인천[안산] 꿈소풍 안산 2호점</p>
                </div>
                <Link to="/intro"><button className="btnn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>

            </div>

            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col2">
                    <img className="imgescape" alt="logo2" src={introImg2} style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 오드의 마법사</h3>
                    <p className="">전라[광주] 러시아워 로드맨션</p>
                </div>
                <Link to="/intro2"><button className="btnn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>
            </div>

            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col2">
                    <img className="imgescape" alt="logo2" src={introImg3} style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 마녀의 숨겨진 물약</h3>
                    <p className="">경상[부산] 더락 이스케이프 하단점</p>
                </div>
                <Link to="/intro3"><button className="btnn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>
            </div>

            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col2">
                    <img className="imgescape" alt="logo2" src={introImg4} style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 지난날을 잊었다</h3>
                    <p className="">서울[홍대] 지구별 방탈출 홍대어드벤처점</p>
                </div>
                <Link to="/intro4"><button className="btnn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>
            </div>

            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col2">
                    <img className="imgescape" alt="logo2" src={introImg5} style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 퀘스트 : 여정의 시작</h3>
                    <p className="">서울[홍대] 지구별 방탈출 홍대어드벤처점</p>
                </div>
                <Link to="/intro5"><button className="btnn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>
            </div>
            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col2">
                    <img className="imgescape" alt="logo2" src={introImg6} style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 최대감댁 심부름꾼</h3>
                    <p className="">서울[강남] 더클루 강남점</p>
                </div>
                <Link to="/intro6"><button className="btnn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>
            </div>
            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col2">
                    <img className="imgescape" alt="logo2" src={introImg7} style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 왕자 레오</h3>
                    <p className="">서울[강남] 더클루 강남점</p>
                </div>
                <Link to="/intro7"><button className="btnn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>
            </div>
            <div className="flex_item">
                <div className="text">
                    <h2>방 탈출 정보</h2>
                </div>
                <div className="col1">
                    <img className="imgescape" alt="logo2" src={introImg8} style={{ height: '350px', width: '250px' }} />
                </div>

                <div className="pro">
                    <h3> 냥냥펀치 (일상)</h3>
                    <p className="">경기/인천[안산] 꿈소풍 안산 2호점</p>
                </div>
                <Link to="/intro8"><button className="btnn page">상세페이지</button></Link>
                <Link to="/Review"><button className="btnn page2">후기페이지</button></Link>
            </div>
        </div>

    )
}
export default Home;

