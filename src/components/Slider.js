import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import img1 from "../images/test1.jpg";
import img2 from "../images/test2.jpg";
import img3 from "../images/test3.jpg";
// 배너 사진 변경하면 됩니다. 
const Slider = () => {
    return (
        <Box>
            <Carousel >
                <Carousel.Item>
                    <img
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        src={img1}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        src={img1}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Box>
    );
}
const Box = styled.div`
    img{
        width:1024px;
    }
`;

export default Slider;