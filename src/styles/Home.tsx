"use client";

import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Welcome = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 0px 10px;
`;
export const Tittle = styled.h1`
  display: flex;
  color: black;
  font-size: 20px;
  margin-top: 10px;
  @media (min-width: 1024px) {
    display: flex;
    color: black;
    font-size: 40px;
    margin-top: 40px;
    margin-bottom: 25px;
  }
`;

export const Text = styled.h3`
  display: flex;
  color: black;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-top: 20px;

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

export const WhoWeAre = styled.div`
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
  color: white;
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
  color: white;
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

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialMediaTitle =styled.h1`
display:flex;
font-size:34px;
margin-top: 20px;
margin-bottom: 10px;
text-align: center;
color: black;
`;

export const SocialMediaText= styled.h2`
display:flex;
text-align: center;
color: black;
`;

export const SocialMediaImagesContainer=styled.div`

display:flex;
margin-bottom: 20px;
margin-top: 20px;
`;
export const IconsLinks=styled.a`
display: flex;
border: black solid 1px;
border-radius: 60px;
padding: 8px;
background: black;
&:not(:last-child){
  margin-right: 20px;
}
`;

export const IconInstagram = styled(InstagramIcon)`
color: white;
width: 40px;
height: 40px;
`;

export const IconFacebook = styled(FacebookIcon)`

display:flex;
color: white;
width: 40px;
height: 40px;
`;


export const Location = styled.div`
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
export const CollaborateContainer = styled.div`
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
  width: 100px;
  height: 100px;
`;

export const CollaborateTextdDescription = styled.h2`
display:flex;
font-size:12px;
color: #888;
`;
export const CollaborateTextdInformation = styled.h1`
display: flex;
  font-size: 18px;
margin-bottom: 10px;
`;

export const BankContainer= styled.div`
display: flex;
text-align: center;


`;
export const Bank =styled.div`
display:flex;
flex-direction: column;
align-items: center;
&:not(:last-child){
  margin-right: 20px;
}
`;