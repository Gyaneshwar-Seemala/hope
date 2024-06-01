import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const HeaderContainer=styled.div`
width:95%;
height:50px;
border-radius:45px;
display:flex;
padding:10px;
justify-content:space-between;
align-items:center;
background-color:white;
`;
const slideIn = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const slideOut = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;
export const LogoContainer=styled.div`
width:100%;
height:100%;
margin-left:20px;
display:flex;
align-items:Center;
`;

export const LogoImg=styled.img`
height:100%;
cursor:pointer;
`;

export const NavLinkContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:2rem;
width:100%;
`;

export const NavLink=styled(Link)`
font-family: 'Satoshi';
  font-weight: 800;
  font-size: 18px;
  text-decoration: none;
  color: black;
  padding: 0 10px; /* Adds padding inside each nav link */
  position: relative;
  cursor:pointer;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease;
    transform-origin: top left;
  }

  &:hover:after {
    width: 100%;
    animation: ${slideIn} 0.3s forwards;
  }

  &:not(:hover):after {
    width: 100%;
    animation: ${slideOut} 0.3s forwards;
  }
`;

export const ButtonsDiv=styled.div`
display:flex;
align-items:Center;
justify-content:center;
width:100%;
gap:10px;
`;

export const DonateButton=styled(Link)`
width:80px;
padding:10px;
font-family:Satoshi;
font-weight:800;
text-align:center;
text-decoration:none;
border-radius:35px;
color:black;
background-color:#ff8a66;
transition:background-color 0.3s ease;
&:hover{
    background-color:#ffd54d;
}
`;