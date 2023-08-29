"use client";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import * as Styled from "./styles";

import React from "react";
import Carousel from "react-material-ui-carousel";

function SlideShow() {
  const images = ["/images/1.png", "/images/background7.png", "/images/2.png"];

  return (
    <Styled.CarouselContainer>
      <Carousel >
        {images.map((each, index) => (
          <Styled.ImagesContainer key={index}>
            <Styled.Images src={each} alt="programacao" />
          </Styled.ImagesContainer>
        ))}
      </Carousel>
    </Styled.CarouselContainer>
  );
}

export default SlideShow;
