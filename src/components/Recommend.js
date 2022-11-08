import { Link } from "react-router-dom";
import styled from "styled-components";
import sgt from "../images/sgt.jpg";
import intro7 from "../pages/introduce/images/7.jpg";
import intro5 from "../pages/introduce/images/5.png";
import intro8 from "../pages/introduce/images/8.jpg";
import intro12 from "../pages/introduce/images/16.png";
import intro10 from "../pages/introduce/images/14.jpg";

const Recommend = () => {
  return (
    <RecommendBlock>
      <p className="rec-title">지금 딱 하기 좋은 방탈출 추천 🎅🎄</p>
      <div className="suggest-list">
        <Link to="/intro7">
          <lable className="suggestion">
            <img src={intro7} alt="추천img" className="sgt-img" />
            [활동성 top] 왕자 레오
          </lable>
        </Link>
        <Link to="/intro8">
          <lable className="suggestion">
            <img src={intro8} alt="추천img" className="sgt-img" />
            [평점 top] 냥냥펀치
          </lable>
        </Link>
        <Link to="/intro12">
          <lable className="suggestion">
            <img src={intro12} alt="추천img" className="sgt-img" />
            [공포 top] 미스테리 동호회
          </lable>
        </Link>
        <Link to="/intro5">
          <lable className="suggestion">
            <img src={intro5} alt="추천img" className="sgt-img" />
            [핫플 !] 퀘스트:여정의 시작
          </lable>
        </Link>
        <Link to="/intro10">
          <lable className="suggestion">
            <img src={intro10} alt="추천img" className="sgt-img" />
            [데이트 추천] 러브에센스
          </lable>
        </Link>
      </div>
    </RecommendBlock>
  );
};

const RecommendBlock = styled.div`
  * {
    text-decoration-line: none;
  }
  width: 1024px;
  padding: 20px 10px;
  p,
  lable {
    color: white;
  }

  .rec-title {
    font-size: 1.1em;
    display: inline;
    margin-left: 50px;
  }
  .suggest-list {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
  }
  .sgt-img {
    box-shadow: 5px 5px 10px #898989;
    width: 120px;
    height: auto;
    margin-bottom: 15px;
    border-radius: 3px;

    &:hover {
      box-shadow: 5px 5px 10px #775555;
    }
  }
  .suggestion {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8em;

    &:hover {
      // font-weight: 600;
      transform: translate(-3px, 3px);
      cursor: pointer;
    }
  }
`;

export default Recommend;
