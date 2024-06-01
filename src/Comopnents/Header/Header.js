import React from 'react'
import { ButtonsDiv, DonateButton, HeaderContainer, LogoContainer, LogoImg, NavLink, NavLinkContainer } from './Header.styles'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate=useNavigate();
  return (
    <HeaderContainer>
        <LogoContainer>
            <LogoImg onClick={ navigate("/")} src="https://media.istockphoto.com/id/1341681278/vector/two-hands-the-concept-of-protecting-anything-vector-illustration-interconnection.jpg?s=612x612&w=0&k=20&c=QZmkMdTLOVyzaPi-SgvHy0KNa8cC47wl0b3mfPyxsM0="/>
            <NavLink to="/">Hope</NavLink>
        </LogoContainer>
        <NavLinkContainer>
            <NavLink to="/">Home</NavLink>
            <NavLink to='/Active'>Active Donations</NavLink>
            <NavLink to='/Blogs'>Blogs</NavLink>
        </NavLinkContainer>
        <ButtonsDiv>
            <DonateButton to='/Contact/Donate'>Donate</DonateButton>
            <DonateButton to='/Contact/Request'>Request</DonateButton>
        </ButtonsDiv>
    </HeaderContainer>
  )
}

export default Header