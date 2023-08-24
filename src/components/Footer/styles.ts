"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

`;
export const FooterContainer = styled.div`
  display: flex;
  background: black;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;

 

`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomContainer = styled.div``;

export const Logo = styled.img`
display: flex;
width: 100px;
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
margin-bottom: 10px;
color: white;
`;
export const NavItems = styled.li`
display:flex;
text-align: center;
max-width: 100px;
font-size: 10px;
color: white;

`;
export const Links = styled.a``;


