import React from 'react'
import Container from '../common/Container'
import styled from 'styled-components'
import bannerimg from '../../assets/images/banner.png'

const Banner = () => {
  return (
    <Backgroud>
        <Container>
            <Sidebyside>
                <Left>
                    <Heading>Lessons and insights <InnerHeading>from 8 years</InnerHeading></Heading>
                    <Paragraph>Where to grow your business as a photographer: site or social media?</Paragraph>
                    <Register>Register</Register>
                </Left>
                <Right>
                    <img src={bannerimg} alt="Banner" />
                </Right>
            </Sidebyside>
        </Container>
    </Backgroud>
  )
}

export default Banner

const Backgroud = styled.div`
    background-color: #f5f7fa;
    padding: 121px 0;
`;

const Sidebyside = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;
const Left = styled.div`
    width: 60%;
`;
const Heading = styled.h1`
    color: #4D4D4D;
    font-size: 64px;
    font-weight: 600;
    line-height: 70px; 
    max-width: 657px;
`;
const InnerHeading = styled.span`
    color: #4CAF4F;
`;
const Paragraph = styled.p`
    color: #717171;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    margin-top: 11px;
    margin-bottom: 22px;
`;
const Register = styled.button`
    background-color : #4CAF4F;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
`; 


const Right = styled.div`
    width: 40%;
`;
