"use client";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import Link from "next/link";

export const OurCultsSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 0px 0px;
  margin-top: 20px;

  @media (min-width: 1024px) {
    display: flex;
    margin-bottom: 10px;
    padding: 0px 0px;
    margin-top: 20px;
  }
`;

export const OurCultsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
justify-content:space-evenly;
  }
`;

export const CultsContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px;
  padding: 10px 5px 5px 20px;
  text-align: center;
  background: #a9a9a9;
  margin-bottom: 20px;
  border-radius: 0px 40px 40px 0px;

  &:nth-child(1) {
    max-width: 340px;
  }
  &:nth-child(2) {
    max-width: 320px;
  }

  &:nth-child(3) {
    max-width: 280px;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    border: 1px;
    padding: 30px;
    text-align: center;
    min-width: 300px;
    background: #a9a9a9;
    margin-bottom: 20px;
    border-radius: 60px;
  }
`;

export const TitleOurCultsSection = styled.div`
  display: flex;
  font-size: 28px;
  justify-content: center;
  margin-bottom: 10px;
  padding-left: 20px;
  @media (min-width: 1024px) {
    display: flex;
    font-size: 35px;
    font-weight: 500;
    color:#565656;
    margin-bottom: 20px;


  }
`;

export const DescripitionCultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  @media (min-width: 1024px) {
    display: flex;
  flex-direction: column;
  align-items: baseline;
  }
`;

export const TittleDescripitionCults = styled.h1`
  display: flex;
  color: black;
  font-weight: 700;
  margin-right: 20px;
  @media (min-width: 1024px) {
    display: flex;
    color: #565656;
    font-size: 30px;
  }
`;

export const SubTittleDescripitionCults = styled.h2`
  display: flex;
  font-weight: 700;
  font-size: 14px;
  color: #424242;
`;

export const TextDescripitionCults = styled.h3`
  display: flex;
  color: black;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    display: flex;
    color: black;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 800px;
    flex-direction: column;
  }
`;

export const WhoWeAre = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: black;
  border-radius: 50px 0px 50px 0px;
  padding: 0px 10px;
`;

export const WhoWeAreTitle = styled.h1`
  display: flex;
  color: #d3d3d3;
  font-size: 30px;
  margin-top: 25px;
  margin-bottom: 10px;
`;

export const WhoWeAreImage = styled.img`
  display: flex;
  width: 120px;
  height: 120px;
  border-radius: 150px;
  @media (min-width: 1024px) {
    display: flex;
  }
`;
export const WhoWeAreText = styled.h2`
  display: flex;
  text-align: center;
  color: #d3d3d3;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const WhoAreSubText = styled.div`
  display: flex;
  color: white;
  align-items: center;
  opacity: 50%;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
`;

export const SocialMediaContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMediaTitle = styled.h1`
  display: flex;
  font-size: 28px;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  color: black;
`;

export const SocialMediaText = styled.h2`
  display: flex;
  text-align: center;
  color: black;
  padding: 0px 20px;
  font-size: 14px;
`;

export const SocialMediaImagesContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const IconsLinks = styled.a`
  display: flex;
  border: black solid 1px;
  border-radius: 60px;
  padding: 8px;
  background: black;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const IconInstagram = styled(InstagramIcon)`
  color: white;
  width: 40px;
  height: 40px;
`;

export const IconFacebook = styled(FacebookIcon)`
  display: flex;
  color: white;
  width: 40px;
  height: 40px;
`;

export const IconYoutube = styled(YouTubeIcon)`
  display: flex;
  color: white;
  width: 40px;
  height: 40px;
`;

export const Location = styled.section`
  display: flex;
  background-color: black;
  border-radius: 50px 0px 50px 0px;
`;

export const BackgroundLocationContainer = styled.div`
  display: flex;
  background-image: url("/images/BackgroundLocation.png");
  background-size: cover;
  opacity: 80%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const LocationTitle = styled.h1`
  display: flex;
  color: white;
  margin-top: 20px;
`;

export const LocationSubTitle = styled.h2`
  display: flex;
  color: white;
  margin-top: 20px;
  font-size: 34px;
`;

export const LocationAppsContainer = styled.div`
  display: flex;
`;
export const AppsLinks = styled.a`
  margin-top: 30px;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const AppsImages = styled.img`
  background: white;
  width: 80px;
  border-radius: 50px;
  padding: 10px;
`;

export const Adress = styled.h2`
  display: flex;
  color: white;
  max-width: 270px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const CollaborateContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Collaborate = styled.h1`
  display: flex;
  margin-top: 20px;
  font-size: 34px;
  margin-bottom: 15px;
`;

export const PixContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const PixLogo = styled.img`
  display: flex;
  width: 120px;
  height: 50px;
  margin-bottom: 15px;
`;

export const PixQrCode = styled.img`
  display: flex;
  width: 140px;
  height: 140px;
`;

export const CollaborateTextdDescription = styled.h2`
  display: flex;
  font-size: 12px;
  color: #888;
`;
export const CollaborateTextdInformation = styled.h1`
  display: flex;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const BankContainer = styled.div`
  display: flex;
  text-align: center;
`;
export const Bank = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const BottonTop = styled.div`
  position: fixed;
  bottom: 50px;
  right: 30px;
  border-radius: 50px;
  background-color: black;
  opacity: 60%;
  &:hover {
    opacity: 100%;
  }
`;

export const LinkToTop = styled(Link)`
  display: flex;
`;

export const Seta = styled(ArrowUpwardRoundedIcon)`
  width: 50px;
  height: 50px;
  color: #888;
`;
