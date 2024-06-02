import React from 'react';
import { HeroContainer, Overlay } from './styles/Home.styles';
import Header from '../Comopnents/Header/Header';
import Footer from '../Comopnents/Footer/Footer';
import { CardContainer, ProductDiv, ProductImage, ProductName, ProductText, ProductDesc, ModalWrapper, ModalContent, CloseButton, ModalImage, ModalText, ModalTextHeading, ModalTextDesc } from './styles/Active.styles';
import BlogData from '../data/BlogData';

function Blogs() {
    const [showModal, setShowModal] = React.useState(false);
    const [selectedBlog, setSelectedBlog] = React.useState(null);

    const handleCardClick = (blog) => {
        setSelectedBlog(blog);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <HeroContainer style={{ height: "100%" }}>
                <Overlay>
                    <Header />
                    <ProductDiv>
                        {BlogData.map(blog => (
                            <CardContainer key={blog.title} onClick={() => handleCardClick(blog)}>
                                <ProductImage background={blog.image_url} />
                                <ProductText>
                                    <ProductName>{blog.title}</ProductName>
                                    <ProductDesc>{blog.description}</ProductDesc>
                                </ProductText>
                            </CardContainer>
                        ))}
                    </ProductDiv>
                    <ModalWrapper visible={showModal}>
                        <ModalContent>
                            <CloseButton onClick={closeModal}>×</CloseButton>
                            {selectedBlog && (
                                <>
                                    <ModalImage background={selectedBlog.image_url}></ModalImage>
                                    <ModalText>
                                        <ModalTextHeading>{selectedBlog.title}</ModalTextHeading>
                                        <ModalTextDesc>{selectedBlog.content}</ModalTextDesc>
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

export default Blogs;
