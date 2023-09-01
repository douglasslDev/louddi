import styled from "styled-components";
import Image from "next/image";

export const Images = styled(Image)`
  display: flex;
  width: 100%;
  height: 400px;
  object-fit: fill;
  @media (min-width: 1024px) {
    display: flex;
    width: 60%;
    height: 450px;
    object-fit: fill;
    border-radius: 50px;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CarouselContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
