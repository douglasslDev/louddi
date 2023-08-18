"use client";

import styled from 'styled-components'


export const Welcome = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom:25px;
`;
export const Tittle = styled.h1`
 display: flex;
  color: black;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 5px;
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
  max-width: 340px;
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
align-items:center;
justify-content: center;
flex-direction: column;
background: black;
border-radius: 50px 0px 50px 0px;

`;

export const WhoWeAreTitle = styled.h1`
display: flex;
color: white;
font-size: 30px;
margin-top:25px;
margin-bottom: 10px;

`
export const WhoWeAreImage=styled.img`

display: flex;
width: 120px;
height:120px;
border-radius:150px;
@media (min-width: 1024px) {

display: flex;
}
`;
export const WhoWeAreText = styled.div`
display: flex;
text-align: center;
color:white;
padding: 0px 15px;
margin-top:15px;
margin-bottom: 15px;
`;
export const WhoAreSubText=styled.div`
display:flex;
color:white;
align-items: center;
opacity: 50%;
justify-content: center;
text-align:center;
padding: 0px 15px;
`;

