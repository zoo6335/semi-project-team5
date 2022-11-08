import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import event from "../images/event2.webp";
import gameover from "../images/gameover.png";
import hello from "../images/hello.jpg";

// 배너 사진 변경하면 됩니다.
const Slider = () => {
  return (
    <Box>
      <Carousel>
        <Carousel.Item>
          <img src={gameover} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={hello} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={event} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Box>
  );
};
const Box = styled.div`
  img {
    width: 1016px; // 1024-4*2=1016px
    height: 300px;
  }
  border-left: 4px solid #40baaa;
  border-right: 4px solid #40baaa;
  box-sizing: border-box;
`;

export default Slider;
