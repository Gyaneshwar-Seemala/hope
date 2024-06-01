import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroDiv=styled.div`
width:100%;
height:700px;
display:flex;
align-items:center;
`;

export const HeroSub = styled.span`
display:flex;
  font-size: 18px;
  font-weight: bold;
  font-family:Satoshi;
  padding-top:20px;
  color:white;
  padding-bottom:40px;
  width: 750px;
`;
export const HeroButton = styled(Link)`
color: black;
  background-color:  #ff8a66;
font-family: Satoshi;
text-decoration:none;
font-size: 20px;
text-align:center;
cursor:pointer;
font-weight: bold;
border-radius: 15px;
padding:20px;
transition: 0.2s ease-in;
  &:hover {
    color: black;
  background-color: #ffd54d;
  }
`;