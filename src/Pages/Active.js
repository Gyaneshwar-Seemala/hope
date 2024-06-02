import React, { useState } from 'react';
import { HeroContainer, Overlay } from './styles/Home.styles';
import Header from '../Comopnents/Header/Header';
import Footer from '../Comopnents/Footer/Footer';
import {
    CardContainer,
    FilterButton,
    FiltersDiv,
    ProductDiv,
    ProductImage,
    ProductName,
    ProductText,
    ProductDesc,
    ProgressBar,
    BuyNowButton,
    ModalWrapper,
    ModalContent,
    CloseButton,
    ModalImage,
    ModalText,
    ModalTextHeading,
    ModalTextDesc,
    ModalProgressBar,
    Submit,
} from './styles/Active.styles';
import ActiveData from '../data/ActiveData';
import { useNavigate } from 'react-router-dom';

function Active() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [activeFilter, setActiveFilter] = useState('Active Seekers');
    const [selectedItem, setSelectedItem] = useState(null);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const handleDonateClick = (event) => {
        event.stopPropagation();
        navigate('/Contact/Donate');
    };

    const handleCardClick = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const calculatePercentage = (collected, requirement) => {
        let collectedTotal = 0;
        let requirementTotal = 0;

        if (typeof requirement === 'object' && typeof collected === 'object') {
            // Calculate the total collected and required amounts for food items
            Object.values(collected).forEach(value => collectedTotal += parseInt(value));
            Object.values(requirement).forEach(value => requirementTotal += parseInt(value));
        } else {
            // Handle other categories
            collectedTotal = parseInt(collected);
            requirementTotal = parseInt(requirement);
        }

        // Calculate the percentage
        return (collectedTotal / requirementTotal) * 100;
    };
    

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <HeroContainer style={{ height: "100%" }}>
                <Overlay>
                    <Header />
                    <FiltersDiv>
                        <FilterButton
                            key='Active Seekers'
                            onClick={() => handleFilterClick('Active Seekers')}
                            active={activeFilter === 'Active Seekers'}
                        >
                            Active Seekers
                        </FilterButton>
                        {ActiveData.map(category => (
                            <FilterButton
                                key={category.category}
                                onClick={() => handleFilterClick(category.category)}
                                active={activeFilter === category.category}
                            >
                                {category.category}
                            </FilterButton>
                        ))}
                    </FiltersDiv>
                    <ProductDiv>
                        {ActiveData.map(category => (
                            category.items
                                .filter(item => activeFilter === 'Active Seekers' || category.category === activeFilter)
                                .map(item => (
                                    <CardContainer key={item.name} onClick={() => handleCardClick(item)}>
                                        <ProductImage background={item.image_url} />
                                        <ProductText>
                                            <ProductName>{item.name}</ProductName>
                                            <ProductDesc>{item.description_small}</ProductDesc>
                                            <ProductDesc><span style={{ fontWeight: '800' }}>Requirement: </span>{typeof item.requirement === 'object' ? Object.values(item.requirement).join(', ') : item.requirement}</ProductDesc>
                                            <ProductDesc><span style={{ fontWeight: '800' }}>Collected: </span>{typeof item.collected === 'object' ? Object.values(item.collected).join(', ') : item.collected}</ProductDesc>
                                            {item.urgency && <ProductDesc><span style={{ fontWeight: '800' }}>Urgency: </span>{item.urgency}</ProductDesc>}
                                            {item.blood_group && <ProductDesc><span style={{ fontWeight: '800' }}>Blood Group: </span>{item.blood_group}</ProductDesc>}
                                            {item.age_group && <ProductDesc><span style={{ fontWeight: '800' }}>Age Group: </span>{item.age_group}</ProductDesc>}
                                            {item.num_people && <ProductDesc><span style={{ fontWeight: '800' }}>Number of People: </span>{item.num_people}</ProductDesc>}
                                            <ProgressBar fillPercentage={calculatePercentage(item.collected,item.requirement)} />
                                        </ProductText>
                                        <BuyNowButton onClick={handleDonateClick}>Donate</BuyNowButton>
                                    </CardContainer>
                                ))
                        ))}
                    </ProductDiv>
                    <ModalWrapper visible={showModal}>
                        <ModalContent>
                            <CloseButton onClick={closeModal}>×</CloseButton>
                            {selectedItem && (
                                <>
                                    <ModalImage background={selectedItem.image_url}></ModalImage>
                                    <ModalText>
                                        <ModalTextHeading>{selectedItem.name}</ModalTextHeading>
                                        <ModalTextDesc>{selectedItem.description_large}</ModalTextDesc>
                                        <ModalTextDesc><span style={{ fontWeight: "800" }}>Requirement: </span>{typeof selectedItem.requirement === 'object' ? Object.values(selectedItem.requirement).join(', ') : selectedItem.requirement}</ModalTextDesc>
                                        <ModalTextDesc><span style={{ fontWeight: "800" }}>Collected: </span>{typeof selectedItem.collected === 'object' ? Object.values(selectedItem.collected).join(', ') : selectedItem.collected}</ModalTextDesc>
                                        {selectedItem.urgency && <ModalTextDesc><span style={{ fontWeight: '800' }}>Urgency: </span>{selectedItem.urgency}</ModalTextDesc>}
                                        {selectedItem.blood_group && <ModalTextDesc><span style={{ fontWeight: '800' }}>Blood Group: </span>{selectedItem.blood_group}</ModalTextDesc>}
                                        {selectedItem.age_group && <ModalTextDesc><span style={{ fontWeight: '800' }}>Age Group: </span>{selectedItem.age_group}</ModalTextDesc>}
                                        {selectedItem.num_people && <ModalTextDesc><span style={{ fontWeight: '800' }}>Number of People: </span>{selectedItem.num_people}</ModalTextDesc>}
                                        <ModalProgressBar fillPercentage={calculatePercentage(selectedItem.collected,selectedItem.requirement)} />
                                        <Submit onClick={handleDonateClick}>Donate Now</Submit>
                                    </ModalText>
                                </>
                            )}
                        </ModalContent>
                    </ModalWrapper>
                </Overlay>
            </HeroContainer>
            <Footer />
        </div>
    );
}

export default Active;
