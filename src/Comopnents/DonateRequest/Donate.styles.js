import styled from 'styled-components';

export const DonationForm = styled.form`
  width: 100%;
  height: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const DonationInput = styled.input`
  width: 90%;
  height: 40px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid lightgray;
  font-family: 'Satoshi', sans-serif;
  font-size: 18px;
`;

export const AnonymousRadio = styled.input`
  margin-right: 10px;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ff8a66;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &:checked {
    background-color: #ff8a66;
  }

  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: transparent;
    position: relative;
    top: 2px;
    left: 2px;
  }
`;

export const AnonymousLabel = styled.label`
  display: flex;
  width:90%;
  align-items: center;
  margin-top: 10px;
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const DonationTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 90%;
  margin-top:-2rem;
`;

export const DonationTypeLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
`;

export const DonationTypeRadio = styled.input`
  margin-right: 10px;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1.5px solid #ff8a66;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &:checked {
    background-color: #ff8a66;
  }

  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: transparent;
    position: relative;
    top: 2px;
    left: 2px;
  }
`;

export const SubmitButton = styled.button`
  width: 95%;
  height: 40px;
  border-radius: 10px;
  background-color: #ff8a66;
  color: black;
  transition:background-color 0.3s ease;
  border: none;
  font-weight:800;
  font-family: 'Satoshi', sans-serif;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #ffd54d;
  }
`;

export const TickImage=styled.div`
width:120px;
height:120px;
`;

export const VerifiedText=styled.span`
font-family:Satoshi;
font-size:25px;
font-weight:400;
text-align:center;
padding:10px;
`;