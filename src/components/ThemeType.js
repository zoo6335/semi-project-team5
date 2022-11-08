import styled from "styled-components";
import { type } from "@testing-library/user-event/dist/type";
import ghost from "../images/ghost.png";
import { Link } from "react-router-dom";

const ThemeType = () => {
  return (
    <ThemeBlock>
      <div className="icons">
        <Link to="/intro">
          <label className="theme-type">
            <img className="icon" src={ghost} alt="icon" />
            공포
          </label>
        </Link>
        <Link to="/intro11">
          <label className="theme-type">
            <img className="icon" src={ghost} alt="icon" key={"추리"} />
            추리
          </label>
        </Link>
        <Link to="/intro5">
          <label className="theme-type">
            <img className="icon" src={ghost} alt="icon" key={"액션"} />
            액션
          </label>
        </Link>
        <Link to="/intro4">
          <label className="theme-type">
            <img className="icon" src={ghost} alt="icon" key={"감성"} />
            감성
          </label>
        </Link>
        <Link to="/intro7">
          {" "}
          <label className="theme-type">
            <img className="icon" src={ghost} alt="icon" key={"모험"} />
            모험
          </label>
        </Link>
        <Link to="/intro3">
          <label className="theme-type">
            <img className="icon" src={ghost} alt="icon" key={"SF/판타지"} />
            SF/판타지
          </label>
        </Link>
        <Link to="/intro9">
          <label className="theme-type">
            <img className="icon" src={ghost} alt="icon" key={"야외"} />
            야외
          </label>
        </Link>
        <Link to="intro10">
          <label className="theme-type">
            <img className="icon" src={ghost} alt="icon" key={"19금"} />
            19금
          </label>
        </Link>
      </div>
    </ThemeBlock>
  );
};

const ThemeBlock = styled.div`
  * {
    text-decoration-line: none;
  }
  width: 1024px;
  margin: 15px;

  .icons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .theme-type {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;

    &:hover {
      cursor: pointer;
      color: blue;
      font-weight: 700;
      transform: translate(-3px, 3px);
    }
  }

  .icon {
    width: 60px;
    flex-grow: 1;
    &:hover {
      filter: hue-rotate(300deg);
    }
  }
`;

export default ThemeType;
