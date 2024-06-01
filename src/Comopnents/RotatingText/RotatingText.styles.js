import styled, { keyframes } from "styled-components";
export const TextWrapper = styled.div`
  box-sizing: content-box;
  width:80%;
  padding-left:6%;
  padding-bottom:50px;
  text-align:left;
  overflow:hidden;
  background:transparent;
  border-radius: 8px;
`;
export const TextP = styled.p`
font-size:80px;
font-family:Satoshi;
position:relative;
z-index:5;
color:white;
font-weight:bold;
`;
const spinWordsAnimation = keyframes`
10%{
  transform:translateY(0%);
}
50%{
    transform:translateY(-100%);
}
90%{
    transform:translateY(-200%);
}
`;

export const Words = styled.div`
  overflow: hidden;
  height:120px;
  margin-top:-190px;
  margin-left:350px;
  position:relative;
z-index:5;
`;

export const Span = styled.span`
  display: block;
  height: 100%;
  position:relative;
z-index:5;
  font-family:Satoshi;
  font-weight:bold;
  padding: 10px;
  font-size:80px;
  color:#ffd54d;
  animation: ${spinWordsAnimation} 12s infinite;
`;