import { useState } from "react";
import styled from "styled-components";


const Box = styled.div`
  border: 4px solid #40BAAA;
  border-top: none;
  width: 1024px;
  height: 900px;
  margin: 0 auto;
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 10px;
  column-gap: 10px;
  background-color : cornsilk;
  width: 720px;
  height: 800px;
`


const Gallery = () => {
  const [images, setImages] = useState([]);
  
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  
  return (
    <Box>
      <Container>
        <div style={{ backgroundColor: "red"}}/>
        <div style={{ backgroundColor: "blue"}}/>
        <div style={{ backgroundColor: "green"}}/>
        <div style={{ backgroundColor: "yellowgreen"}}/>
        <div style={{ backgroundColor: "pink"}}/>
        <div style={{ backgroundColor: "black"}}/>
        <div style={{ backgroundColor: "purple"}}/>
        <div style={{ backgroundColor: "tomato"}}/>
        <div style={{ backgroundColor: "royalblue"}}/>
      </Container>
    </Box>
  ) 
}

export default Gallery;