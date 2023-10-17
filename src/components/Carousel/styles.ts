import styled from "styled-components";
import Image from "next/image";

export const Images = styled(Image)`
  display: flex;
  object-fit: fill;
  border-radius: 50px;
  max-height: 800px;
  min-width: 80%;


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
  min-width: 300px;


`;
