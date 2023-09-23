"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

`;
export const FooterContainer = styled.div`
  display: flex;
  background: linear-gradient(180deg, rgba(7,34,71,1) 2%, rgba(17,64,104,1) 25%, rgba(47,148,196,1) 66%);
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
 

`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top:10px;
`;

export const BottomContainer = styled.div``;

export const Logo = styled.img`
display: flex;
width: 80px;
  height: 70px;
`;
export const NavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const NavTitles = styled.li`
display:flex;
margin-bottom: 8px;
color: #d3d3d3;
font-size: 16px;
font-family: serif;
font-weight: 500;
`;
export const NavItems = styled.li`
display:flex;
text-align: center;
max-width: 100px;
font-size: 10px;
color: #d3d3d3;
&:hover{
border-bottom:  solid 1px #d3d3d3;

}


`;

export const AppsContainer = styled.div`
display:flex;
flex-direction: column;
margin-left: 20px;
`;
export const Links = styled.a`
display:flex;
&:not(:last-child){
  margin-bottom: 5px;
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


