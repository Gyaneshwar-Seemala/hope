import React from 'react'
import { ContactLink, ContactLinks, ContactText, FooterContainer, FooterDiv } from './Footer.styles'
import { LinksContHead, LinksContSub, StatSub } from '../../Pages/styles/Home.styles'
import compass from "../../Assets/Images/compass.png";
import mail from "../../Assets/Images/gmail.png";
import phone from "../../Assets/Images/telephone.png";
import { AboutValuesImage } from '../About/AboutCards.styles';
import { NavLink } from '../Header/Header.styles';

function Footer() {
    return (
        <FooterContainer>
            <FooterDiv>
                <LinksContHead>Contact Us</LinksContHead>
                <LinksContSub style={{paddingTop:"10px"}}>Support our cause. Contact us to make a difference today!</LinksContSub>
                <ContactLinks>
                    <ContactLink>
                        <AboutValuesImage src={compass} />
                        <ContactText style={{ whiteSpace: "pre-line" }}>
                            <NavLink style={{ padding: "0px" }}>Our Address</NavLink>
                            <StatSub>139/1/1, Gachibowli,{'\n'}Hyderabad, Telangana</StatSub>
                        </ContactText>
                    </ContactLink>
                    <ContactLink>
                        <AboutValuesImage src={phone} />
                        <ContactText style={{ whiteSpace: "pre-line" }}>
                            <NavLink style={{ padding: "0px" }}>Phone Number</NavLink>
                            <StatSub>+919999999999{'\n'}+91888888888</StatSub>
                        </ContactText>
                    </ContactLink>
                    <ContactLink>
                        <AboutValuesImage src={mail} />
                        <ContactText style={{ whiteSpace: "pre-line" }}>
                            <NavLink style={{ padding: "0px" }}>Email</NavLink>
                            <StatSub>contact@hope.in{'\n'}contact@hopengo.in</StatSub>
                        </ContactText>
                    </ContactLink>
                </ContactLinks>
            </FooterDiv>
        </FooterContainer>
    )
}

export default Footer