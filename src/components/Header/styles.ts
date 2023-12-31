"use client";
import Link from "next/link";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const container = styled.div`
  display: flex; 
`;

export const HeaderContainer = styled.div`
  display: flex;
  background-image: url("/images/background5.jpg"); 
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    display: flex;
    background-image: url("/images/background5.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 600px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding:  10px;
  justify-content: space-between;
  width: 90%;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }
`;

export const logoImage = styled.img`
  display: flex;
  width: 50px;
  height: 50px;

  @media (min-width: 1024px) {
    display: flex;
    width: 100px;
    height: 100px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  
`;

export const NavItem = styled.li`
  display: flex;
  margin-right: 10px;
  font-size: 12px;

  opacity: 0.7;
  &:hover {
    border-bottom: solid black 1px;
    transition: 0.3;
    opacity: 1;
  }
  
  @media (min-width: 1024px) {
    font-size: 24px;
    display: flex;
    font-weight: 600;

    margin-right: 25px;
    &:hover {
      border-bottom: solid white 1px;
      transition: 0.3;
    }
  }
`;

export const Links = styled(Link)`
font-weight: 400;
color: white;
`;

export const WhereContainer = styled(Link)`
  display: flex;
  color: white;
  border: solid;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  opacity: 74%;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 7px 10px;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    opacity: 100%;
  }

  @media (min-width: 1024px) {
    display: flex;
    color: white;
    border: solid;
    border-radius: 60px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 40px;
  }
`;

export const IconWhere = styled(LocationOnIcon)`
  font-size: 20px;
  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const Where = styled.div`
  display: flex;
  margin-right: 4px;
  font-family: serif;
`;
