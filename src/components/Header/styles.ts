"use client";
import Link from "next/link";
import styled from "styled-components";

export const container = styled.div`
  background-image: url("/images/background.jpeg");
  display: flex;

  width: 100%;
  height: 50%;
  background-size: cover;
  background-position: center;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px ;

`;

export const logoImage = styled.img`
  display: flex;
  width: 200px;
  height: 120px;
  margin-left: 20px;
  
`;
export const NavList = styled.ul`
  display: flex;
`;
export const NavItem = styled.li`
  display: flex;
  margin-right: 15px;

`;

export const Links = styled(Link)``;
export const Welcome = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Tittle = styled.h1`
  display: flex;
  color: white;
  font-size: 40px;
  margin: 20px;

`;

export const Text = styled.h3`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 800px;
flex-direction: column;
`;
