import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterBlock>
      <Link to="/PrivacyPolicy">개인정보 처리방침</Link>
      <span>서비스 약관</span>
      <span>©2022 NagaBang, Inc. All Rights Reserved.</span>
      <span className="span_nagabang">NagaBang</span>
    </FooterBlock>
  );
};
const FooterBlock = styled.div`
  * {
    text-decoration-line: none;
    color: white;
  }

  border-top: 1px solid #40baaa;
  width: 1024px;
  height: auto;
  padding: 10px 30px;
  font-size: 0.8em;

  & > span {
    margin: 10px;
    color: white;
  }
  .span_nagabang {
    font-size: 2em;
    position: relative;
    left: 360px;
    color: #ed77bc;
    text-shadow: -4px 0 #222, -4px 1px #999, 1px 0 #000, 0 -1px #999;
  }
`;

export default Footer;
