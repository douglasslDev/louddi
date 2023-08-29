
import styled from "styled-components";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel'



export const  Images= styled(Image)`
display: flex;
width: 100%;
height: 400px;
object-fit: fill;


`;


export const  ImagesContainer= styled.div`
display:flex;
justify-content: center;

`;

export const CarouselContainer = styled.div`
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 20px;



`;

