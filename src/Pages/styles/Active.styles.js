import styled from "styled-components";

export const FiltersDiv=styled.div`
width:90%;
padding:20px;
display:flex;
align-items:start;
gap:2rem;
`;

export const FilterButton=styled.div`
  width: 100%;
  height: 40px;
  font-family: Satoshi;
  font-weight: 800;
  font-size: 15px;
  border-radius: 10px;
  background-color: ${props => props.active ? "#ff8a66" : "white"};
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor:pointer;
  transition:background-color 0.3s ease;

  ${props => !props.active && `
    &:hover {
      background-color: #ffd54d;
    }
  `}
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding:10px;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.visible ? 'block' : 'none'};
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  width:80%;
  border-radius:20px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #EFEDED;
  padding: 50px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:3rem;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  color: #646476;
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

export const CardContainer = styled.div`
  width: 250px;
  height: 450px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding:20px;
  align-items: center;
  justify-content: center;
  background: white;
  gap: 10px;
  position: relative;
  cursor:pointer;
    transition: box-shadow 0.5s ease; /* Smooth transition for box-shadow */
    &:hover {
        box-shadow: 0 4px 20px rgba(255, 255, 254, 0.4); /* Add box-shadow on hover */
    }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom:15px;
  border-radius: 10px;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ProductText = styled.div`
  width: 100%;
  height: 175px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

export const ProductName = styled.span`
  font-family: Satoshi;
  font-weight: 800;
  font-size: 20px;
  width:100%;
  text-align:left;
`;

export const ProductDesc = styled.span`
  font-family: Satoshi;
  font-weight: 500;
  font-size: 15px;
  width:100%;
  text-align:left;
`;

export const BuyNowButton = styled.button`
border:none;
cursor:pointer;
  width: 150px;
  height: 50px;
  border-radius: 25px;
  font-family: Satoshi;
  font-weight: 800;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: #ff8a66;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-top:20px;
  
  &:hover {
    background-color: #ffd54d;
    color:black;
  }
`;

export const ProgressBar = styled.div`
  padding:3px;
  border: 1px solid lightgray; /* Border style */
  width: 100%; /* Full width */
  border-radius: 5px; /* Rounded corners */
  margin-top: 10px; /* Adjust the margin as needed */
  margin-bottom:10px;
  background: linear-gradient(to right, #ffd54d ${(props) => props.fillPercentage}%, transparent ${(props) => props.fillPercentage}%); /* Gradient color */
`;


export const ModalImage=styled.div`
width:50%;
height:600px;
border-radius:25px;
background-image: url(${props => props.background});
background-size:cover;
background-repeat:no-repeat;
`;

export const ModalText=styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:2rem;
padding:20px;
width:50%;
height:600px;
`;

export const ModalTextHeading=styled.span`
font-size:50px;
font-family:Satoshi;
font-weight:800;
text-align:left;
width:100%;
`;

export const ModalTextDesc=styled.span`
font-size:20px;
font-family:Satoshi;
font-weight:500;
text-align:left;
width:100%;
`;

export const ModalProgressBar= styled.div`
padding:13px;
border: 3px solid gray; /* Border style */
width: 100%; /* Full width */
border-radius: 5px; /* Rounded corners */
margin-top: 10px; /* Adjust the margin as needed */
background: linear-gradient(to right, #ffd54d ${(props) => props.fillPercentage}%, transparent ${(props) => props.fillPercentage}%); /* Gradient color */
`;

export const Submit=styled.div`
width: 100%;
height: 40px;
padding:20px;
font-family: Satoshi;
font-weight: 800;
font-size: 18px;
border-radius: 30px;
background-color:#ff8a66;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
cursor:pointer;
transition:background-color 0.3s ease;
  &:hover {
    background-color: #ffd54d;
  }
`;