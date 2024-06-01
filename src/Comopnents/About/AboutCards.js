import React from 'react';
import { AboutCardContainer, AboutContainer, AboutHeading, AboutValuesCard, AboutValuesHeading, AboutValuesImage, AboutValuesSub } from './AboutCards.styles';
import { HeroSub } from '../Hero/Hero.styles';
function AboutCards({ Values, Heading }) {

    return (
        <AboutCardContainer>
                {Values.map((value, index) => (
                    <AboutValuesCard key={index}>
                        <AboutValuesImage src={value.Icon} />
                        <AboutValuesHeading>{value["Value Heading"]}</AboutValuesHeading>
                        <AboutValuesSub>{value["Value Description"]}</AboutValuesSub>
                    </AboutValuesCard>
                ))}
            </AboutCardContainer>
    );
}

export default AboutCards;
