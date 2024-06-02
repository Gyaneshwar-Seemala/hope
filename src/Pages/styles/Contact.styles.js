import styled from "styled-components";
import contact from "../../Assets/Images/ContactImage.png";

export const ContactContainer=styled.div`
width:98%;
height:100vh;
padding:10px;
display:flex;
align-items:center;
justify-content:spcae-evenly;
gap:10px;
`;

export const ContactImage=styled.div`
width:50%;
height:100%;
border-radius:28px;
display:flex;
align-items:center;
justify-content:center;
background:url(${contact});
background-size:cover;
background-repeat:no-repeat;
`;

export const ContactImageText=styled.span`
font-family:Satoshi;
font-weight:800;
text-align:center;
width:80%;
color:#ffd54d;
font-size:80px;
`;

export const ContactOverlay=styled.div`
width:100%;
height:100%;
border-radius:24px;
display:flex;
align-items:center;
justify-content:center;
background:rgb(0,0,0,0.5);
`;

export const ContactDiv=styled.div`
width:50%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
gap:2.5rem;
`;

export const ContactToggle=styled.div`
width:60%;
height:60px;
border-radius:55px;
box-shadow:0px 4px 20px rgb(0,0,0,0.5);
display:flex;
align-items:center;
justify-content:space-evenly;
`;

export const ContactButton = styled.div`
  width: 50%;
  height: 100%;
  font-family: Satoshi;
  font-weight: 800;
  font-size: 20px;
  border-radius: 55px;
  background-color: ${props => props.active ? "#ff8a66" : "white"};
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor:pointer;
  transition:background-color 0.3s ease;

  ${props => !props.active && `
    &:hover {
      background-color: rgba(172, 119, 102, 0.5);
    }
  `}
`;
