import React from 'react'
import Header from '../Comopnents/Header/Header'
import { HeroContainer, LinkImage, LinkTextDiv, LinksContHead, LinksContSub, LinksContainer, LinksDiv, LinksImage, Overlay, Stat, StatSub, StatTextDiv, StatsCounter, WhyusContainer } from './styles/Home.styles'
import Hero from '../Comopnents/Hero/Hero'
import CountUp from 'react-countup';
import { HeroButton } from '../Comopnents/Hero/Hero.styles';
import donationValues from '../data/WhyUs';
import AboutCards from "../Comopnents/About/AboutCards";
import Footer from '../Comopnents/Footer/Footer';

function Home() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <HeroContainer>
                <Overlay>
                    <Header />
                    <Hero />
                </Overlay>
            </HeroContainer>
            <StatsCounter>
                <StatTextDiv>
                    <Stat>
                        <CountUp
                            end={5000}
                            duration={175}
                            onEnd={({ pauseResume, reset, start, update }) => {
                                // Reset and start the count up again
                                reset();
                                start();
                            }}
                        />+
                    </Stat>
                    <StatSub>Donors Contributed</StatSub>
                </StatTextDiv>

                <StatTextDiv>
                    <Stat>
                        <CountUp
                            end={10000}
                            duration={275}
                            onEnd={({ pauseResume, reset, start, update }) => {
                                // Reset and start the count up again
                                reset();
                                start();
                            }}
                        />+
                    </Stat>
                    <StatSub>Families Helped</StatSub>
                </StatTextDiv>

                <StatTextDiv>
                    <Stat>
                        <CountUp
                            end={150000}
                            duration={575}
                            onEnd={({ pauseResume, reset, start, update }) => {
                                // Reset and start the count up again
                                reset();
                                start();
                            }}
                        />+
                    </Stat>
                    <StatSub>Meals Provided</StatSub>
                </StatTextDiv>
            </StatsCounter>
            <LinksContainer>
                <LinksContHead>Help People In Need</LinksContHead>
                <LinksContSub>Hope provides an online platform for people facing hardships to request donations of basic necessities like food, clothing, and medical needs. Donors can easily choose requests to fund.</LinksContSub>
                <LinksDiv>
                    <LinkTextDiv>
                        <Stat>Submit a Request</Stat>
                        <StatSub>If you are in need of assistance, you can file a request and receive help. Our platform connects those in need with generous donors ready to support various causes.</StatSub>
                        <HeroButton to='/Contact/Request'>Submit Request</HeroButton>
                    </LinkTextDiv>
                    <LinksImage>
                        <LinkImage src="https://muslimcharity.org.uk/wp-content/uploads/2022/09/Street-Children-1.jpeg" />
                    </LinksImage>
                </LinksDiv>

                <LinksDiv>
                    <LinksImage>
                        <LinkImage src="https://thelogicalindian.com/h-upload/2022/03/28/214498-untitled-design-2022-03-28t142453219.jpg" />
                    </LinksImage>
                    <LinkTextDiv>
                        <Stat>Find Requests</Stat>
                        <StatSub>Browse through existing requests and donate to causes you care about. Hope makes it easy for donors to find and choose requests to fund based on categories, locations, and types of needs. Full transparency is provided on exactly how funds are used.</StatSub>
                        <HeroButton to='/Active'>Browse Requests</HeroButton>
                    </LinkTextDiv>
                </LinksDiv>

                <LinksDiv>
                    <LinkTextDiv>
                        <Stat>Read Blogs and Success Stories</Stat>
                        <StatSub>Explore our collection of blogs and happy stories from those who have been helped by the community. Learn about the impact your donations have made and get inspired by stories of hope and transformation.</StatSub>
                        <HeroButton to='/Blog/Stories'>Read Stories</HeroButton>
                    </LinkTextDiv>
                    <LinksImage>
                        <LinkImage src="https://miro.medium.com/v2/resize:fit:1000/0*lzyNu8ztv9-aJSyn.jpg" />
                    </LinksImage>
                </LinksDiv>
            </LinksContainer>
            <WhyusContainer>
                <LinksContHead>Accountability and Security</LinksContHead>
                <AboutCards Values={donationValues}/>
            </WhyusContainer>
            <Footer/>
        </div>
    )
}

export default Home