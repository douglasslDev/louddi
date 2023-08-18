"use client";
import Link from "next/link";
import styled from "styled-components";

export const container = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  background-image: url("/images/background4.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50%;
  flex-direction: column;
  align-items: center;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-around;
  width: 100%;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    padding: 0 5px;
    justify-content: space-around;
    font-size: 10px;
  }
`;

export const logoImage = styled.img`
  display: flex;
  width: 100px;
  height: 60px;

  @media (min-width: 1024px) {
    display: flex;
    width: 200px;
    height: 120px;
  }
`;
export const NavList = styled.ul`
  display: flex;
`;
export const NavItem = styled.li`
 
 display: flex;
  color: white;
  margin-right: 10px;
  font-size: 10px;
  &:hover {
    border-bottom: solid white;
    transition: 0.3;
  }
  @media (min-width: 1024px) {

  display: flex;
  color: white;
  margin-right: 15px;
  &:hover {
    border-bottom: solid white;
    transition: 0.3;
  }}
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
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 5px;
  @media (min-width: 1024px) {

  display: flex;
  color: white;
  font-size: 40px;
  margin-top: 40px;
  margin-bottom: 25px;
  }
  `;

export const Text = styled.h3`

display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 340px;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: 1024px) {

  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 800px;
  flex-direction: column;
  
  }
`;

export const Where = styled.div`


display: flex;
  color: white;
  border: solid;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 15px;
 
  

  @media (min-width: 1024px) {

  display: flex;
  color: white;
  border: solid;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  }
`;
