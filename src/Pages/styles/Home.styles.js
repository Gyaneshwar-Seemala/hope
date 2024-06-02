import styled from "styled-components";
import back from "../../Assets/Images/Background.png";

export const HeroContainer = styled.div`
  width: 100%;
  height: 800px;
  background-image: url("https://www.ourlittleroses.org/wp-content/uploads/2021/11/larm-rmah-AEaTUnvneik-unsplash-2048x1365.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Overlay=styled.div`
  display: flex;
  padding-top:2%;
  background-color:rgb(0,0,0,0.7);
  height:96%;
  flex-direction: column;
  align-items: center;
`;

export const StatsCounter=styled.div`
width:80%;
height:100px;
padding:20px;
display:flex;
align-items:center;
justify-content:space-evenly;
margin-top:-50px;
background-color:#ff8a66;
border-radius:25px;
`;

export const StatTextDiv=styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:6px;
`;

export const Stat=styled.span`
font-family:Satoshi;
font-weight:800;
font-size:35px;
`;

export const StatSub=styled.span`
font-family:Satoshi;
font-weight:500;
font-size:20px;
`;


export const LinksContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:80px;
width:100%;
gap:3rem;
background:url(${back});
background-size:contain;
background-repeat:repeat;
`;

export const LinksContHead=styled.span`
font-family:Satoshi;
font-weight:800;
font-size:50px;
`;

export const LinksContSub=styled.span`
font-family:Satoshi;
font-weight:500;
font-size:18px;
width:80%;
margin-top:-3rem;
text-align:center;
`;

export const LinksDiv=styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;
width:90%;
padding:10px;
`;

export const LinksImage=styled.div`

height:500px;
border-radius:20px;
box-shadow:4px 4px 20px rgb(0,0,0,0.5);
`;

export const LinkImage=styled.img`
width:650px;
height:100%;
border-radius:20px;
`;

export const LinkTextDiv=styled.div`
width:600px;
height:100%;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:space-evenly;
gap:1.5rem;
`;

export const WhyusContainer=styled.div`
display:flex;
flex-direction:column;
gap:3rem;
align-items:center;
justify-content:center;
padding-top:70px;
padding-bottom:70px;
width:100%;
background-color:#ffd54d;
`;

export const ProductDiv = styled.div`
height:100%;
display:flex;
align-items:center;
padding:50px;
justify-content:center;
gap:50px;
flex-wrap:wrap;
`;
