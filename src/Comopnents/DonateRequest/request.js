import React, { useState } from 'react';
import {
    DonationInput,
    DonationTypeContainer,
    DonationTypeLabel,
    DonationTypeRadio,
    DonationForm,
    SubmitButton,
    TickImage,
    VerifiedText
} from './Donate.styles'; // Import only the required styles for the Request component
import { StatSub } from '../../Pages/styles/Home.styles';
import VerifiedIcon from '@mui/icons-material/Verified';

function Request() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [requestedItem, setRequestedItem] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [urgency, setUrgency] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        // For demo purposes, let's just set the state to show the confirmation message
        setShowConfirmation(true);
    };

    return (
        <>
            <StatSub style={{ textAlign: "center" }}>
                We're here to help! Your request can make a significant difference in the lives of those in need. Every bit of support counts, and we're committed to assisting you. Together, we can make a positive impact.
            </StatSub>

            {!showConfirmation && (
                <DonationForm onSubmit={handleSubmit}>
                    <DonationInput
                        type='text'
                        placeholder='Enter Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <h3 style={{ textAlign: "left", width: "90%", fontFamily: "Satoshi" }}>What do you need?</h3>
                    <DonationTypeContainer>
                        <DonationTypeLabel>
                            <DonationTypeRadio
                                type='radio'
                                name='donationType'
                                value='money'
                                checked={requestedItem === 'money'}
                                onChange={(e) => setRequestedItem(e.target.value)}
                            />
                            Money
                        </DonationTypeLabel>
                        <DonationTypeLabel>
                            <DonationTypeRadio
                                type='radio'
                                name='donationType'
                                value='food'
                                checked={requestedItem === 'food'}
                                onChange={(e) => setRequestedItem(e.target.value)}
                            />
                            Food
                        </DonationTypeLabel>
                        <DonationTypeLabel>
                            <DonationTypeRadio
                                type='radio'
                                name='donationType'
                                value='clothes'
                                checked={requestedItem === 'clothes'}
                                onChange={(e) => setRequestedItem(e.target.value)}
                            />
                            Clothes
                        </DonationTypeLabel>
                        <DonationTypeLabel>
                            <DonationTypeRadio
                                type='radio'
                                name='donationType'
                                value='blood'
                                checked={requestedItem === 'blood'}
                                onChange={(e) => setRequestedItem(e.target.value)}
                            />
                            Blood
                        </DonationTypeLabel>
                    </DonationTypeContainer>
                    {requestedItem === 'blood' && (
                        <DonationInput
                            type='text'
                            placeholder='Enter Your Blood Type'
                            value={bloodType}
                            onChange={(e) => setBloodType(e.target.value)}
                        />
                    )}
                    <DonationInput
                        as='select'
                        value={urgency}
                        onChange={(e) => setUrgency(e.target.value)}
                        style={{
                            width: "95%",
                            height: "50px"
                        }}
                    >
                        <option value='' disabled>Select Urgency</option>
                        <option value='urgent'>Urgent</option>
                        <option value='not_urgent'>Not Urgent</option>
                    </DonationInput>
                    <SubmitButton type='submit'>Submit</SubmitButton>
                </DonationForm>
            )}

            {showConfirmation && (
                <>
                    <TickImage><VerifiedIcon style={{ width: "100%", height: "100%", color: "lightgreen" }} /></TickImage>
                    <VerifiedText>We have received your request. We'll get back to you as soon as possible.</VerifiedText>
                </>
            )}
        </>
    );
}

export default Request;
