import React, { useState } from 'react';
import {
    DonationForm,
    DonationInput,
    AnonymousRadio,
    AnonymousLabel,
    InputContainer,
    DonationTypeContainer,
    DonationTypeLabel,
    DonationTypeRadio,
    SubmitButton,
    TickImage,
    VerifiedText
} from './Donate.styles';
import { StatSub } from '../../Pages/styles/Home.styles';
import VerifiedIcon from '@mui/icons-material/Verified';

function Donate() {
    const [name, setName] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [donationType, setDonationType] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleNameChange = (event) => {
        if (!isAnonymous) {
            setName(event.target.value);
        }
    };

    const handleAnonymousChange = () => {
        setIsAnonymous(!isAnonymous);
        setName(!isAnonymous ? 'Anonymous' : '');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        // For demo purposes, let's just set the state to show the confirmation message
        setShowConfirmation(true);
    };

    return (
        <>
            <StatSub style={{ textAlign: "center" }}>
                Help change a life by donating. Your contributions can make a significant difference in the lives of those in need. Every bit of support counts and is deeply appreciated.
            </StatSub>
            {showConfirmation ? (
                <>
                    <TickImage><VerifiedIcon style={{ width: "100%", height: "100%", color: "lightgreen" }} /></TickImage>
                    <VerifiedText>Thank you for your donation!</VerifiedText>
                </>
            ) : (
                <DonationForm onSubmit={handleSubmit}>
                    <InputContainer>
                        <DonationInput
                            type='text'
                            placeholder='Enter Your Name'
                            value={name}
                            onChange={handleNameChange}
                            disabled={isAnonymous}
                        />
                        <AnonymousLabel>
                            <AnonymousRadio
                                type='checkbox'
                                checked={isAnonymous}
                                onChange={handleAnonymousChange}
                            />
                            Click this to keep your name anonymous
                        </AnonymousLabel>
                    </InputContainer>
                    <DonationInput
                        type='email'
                        placeholder='Enter Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <DonationInput
                        type='tel'
                        placeholder='Enter Your Phone Number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <h3 style={{textAlign:"left",width:"90%",fontFamily:"Satoshi"}}>What would you like to donate?</h3> {/* Added heading */}
                    <DonationTypeContainer>
                        <DonationTypeLabel>
                            <DonationTypeRadio
                                type='radio'
                                name='donationType'
                                value='money'
                                checked={donationType === 'money'}
                                onChange={(e) => setDonationType(e.target.value)}
                            />
                            Money
                        </DonationTypeLabel>
                        <DonationTypeLabel>
                            <DonationTypeRadio
                                type='radio'
                                name='donationType'
                                value='food'
                                checked={donationType === 'food'}
                                onChange={(e) => setDonationType(e.target.value)}
                            />
                            Food
                        </DonationTypeLabel>
                        <DonationTypeLabel>
                            <DonationTypeRadio
                                type='radio'
                                name='donationType'
                                value='clothes'
                                checked={donationType === 'clothes'}
                                onChange={(e) => setDonationType(e.target.value)}
                            />
                            Clothes
                        </DonationTypeLabel>
                        <DonationTypeLabel>
                            <DonationTypeRadio
                                type='radio'
                                name='donationType'
                                value='blood'
                                checked={donationType === 'blood'}
                                onChange={(e) => setDonationType(e.target.value)}
                            />
                            Blood
                        </DonationTypeLabel>
                    </DonationTypeContainer>
                    {donationType === 'blood' && (
                        <DonationInput
                            type='text'
                            placeholder='Enter Your Blood Group'
                            value={bloodGroup}
                            onChange={(e) => setBloodGroup(e.target.value)}
                        />
                    )}
                    <DonationInput
                        type='text'
                        placeholder='Enter Your Contact Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <SubmitButton type='submit'>Submit</SubmitButton>
                </DonationForm>
            )}
        </>
    );
}

export default Donate;
