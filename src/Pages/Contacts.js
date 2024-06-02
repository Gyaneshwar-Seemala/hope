import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContactButton, ContactContainer, ContactDiv, ContactImage, ContactImageText, ContactOverlay, ContactToggle } from './styles/Contact.styles';
import { Overlay } from './styles/Home.styles';
import Donate from '../Comopnents/DonateRequest/Donate';
import Request from '../Comopnents/DonateRequest/request';

function Contacts() {
    const { type } = useParams();
    const [activeButton, setActiveButton] = useState(type);
    console.log(type)

    useEffect(() => {
        if (type !== 'Donate' && type !== 'Request') {
            setActiveButton('Donate');
        } else {
            setActiveButton(type);
        }
    }, [type]);

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    return (
        <div>
            <ContactContainer>
                <ContactImage>
                    <ContactOverlay>
                        <ContactImageText>We Can Save The Future Together</ContactImageText>
                    </ContactOverlay>
                </ContactImage>
                <ContactDiv>
                    <ContactToggle>
                        <ContactButton 
                            active={activeButton === 'Donate'}
                            onClick={() => handleButtonClick('Donate')}
                        >
                            Donate
                        </ContactButton>
                        <ContactButton 
                            active={activeButton === 'Request'}
                            onClick={() => handleButtonClick('Request')}
                        >
                            Request
                        </ContactButton>
                    </ContactToggle>
                    {activeButton === 'Donate' && <Donate/>}
                    {activeButton === 'Request' && <Request />}
                </ContactDiv>
            </ContactContainer>
        </div>
    );
}

export default Contacts;
