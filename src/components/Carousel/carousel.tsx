"use client";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import * as Styled from "./styles";
import MinimizeIcon from '@mui/icons-material/Minimize';

import React from "react";
import Carousel from "react-material-ui-carousel";

function SlideShow() {
  const images = ["/images/programacao.jpeg", "/images/programacao2.jpeg"];

  return (
    <Styled.CarouselContainer>
      <Carousel 
     animation="slide"
    navButtonsAlwaysVisible
    IndicatorIcon={<MinimizeIcon/>} // Previous Example

    indicatorContainerProps={{
      style: {
        zIndex: 1,
        marginTop: "-35px",
        position: "relative"
      }
    }}

   
     >
        {images.map((each, index) => (
          <Styled.ImagesContainer key={index}>
            <Styled.Images src={each} alt="programacao"  width={600} height={450}/>
          </Styled.ImagesContainer>
        ))}
      </Carousel>
    </Styled.CarouselContainer>
  );
}

export default SlideShow;
