"use client";
import Link from "next/link";
import styled from "styled-components";

export const container = styled.div``;

export const HeaderContainer = styled.div`

display: flex;
  background-image: url("/images/background5.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  height: 400px;
  @media (min-width: 1024px) {

  display: flex;
  background-image: url("/images/background5.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  min-height: 600px;
  }
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
  width: 130px;
  height: 80px;

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
  font-size: 12px;
  opacity: 80%;
  &:hover {
    border-bottom: solid white 1px;
    transition: 0.3;
    opacity: 100%;
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

export const WhereContainer = styled.div`


display: flex;
  color: white;
  border: solid;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  margin-top: 130px;
  opacity: 75%;
  margin-bottom: 20px;
  margin-right: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 15px;
  &:hover{
    opacity: 100%;
  }
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
  export const Where = styled.div`
display:flex;
margin-right: 4px;
`;


