"use client";

import styled from 'styled-components'

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


export const Welcome = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
