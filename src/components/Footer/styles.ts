"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;

`;
export const FooterContainer = styled.div`
  display: flex;
  background: linear-gradient(180deg, rgba(7,34,71,1) 2%, rgba(17,64,104,1) 25%, rgba(47,148,196,1) 66%);
flex: 1;
 flex-direction: column;

`;

export const TopContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-top:10px;
  justify-content: space-evenly;
  padding: 0 20px;
  flex-direction: column;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
  }

`;
export const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
export const BottomContainer = styled.div`
 display: flex;
  width: 100%;
    display: flex;
padding: 10px 0px;
    background: black;
    justify-content: center;
    align-items: center;
    color: white;`;

export const BottomContainerLink = styled.a`
&:hover{
  color: #134770;
  transition: 0.2s;
}
`;


export const Logo = styled.img`
display: flex;
width: 80px;
  height: 80px;
  
`;

export const NavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-right: 10px;
  }
  
`;

export const NavContent = styled.div`
display: flex;

`;

export const NavTitles = styled.li`
display:flex;
margin-bottom: 15px;
color: #d3d3d3;
font-size: 24px;
font-weight: 700;
font-family: serif;
`;

export const NavItems = styled.li`
display:flex;
text-align: center;
font-size: 16px;
margin-bottom: 8px;
color: #d3d3d3;
&:hover{
border-bottom:  solid 1px #d3d3d3;
}

`;
export const NavAdress = styled.li`
display:flex;
text-align: center;
max-width: 170px;
font-size: 16px;
margin-bottom: 8px;
color: #d3d3d3;
`;


export const AppsContainer = styled.div`
display:flex;
flex-direction: row;
@media (min-width: 1024px) {
  flex-direction: column;
}
`;

export const Links = styled.a`
display:flex;
margin-top: 5px;
&:not(:last-child){
  margin-right: 10px;
}
@media (min-width: 1024px) {
  &:not(:last-child){
  margin-bottom: 20px;
}
}
`;

export const AppsImages=styled.img`
display:flex;
width:35px;
height: 35px;
background: white ;
border-radius: 30px;
padding: 5px;
opacity: 0.8;
`;


