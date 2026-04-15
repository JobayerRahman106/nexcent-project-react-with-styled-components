import React from 'react'
import Container from '../common/Container';
import styled from 'styled-components'
import unlockimg from '../../assets/images/unlock.png'

const Unlock = () => {
  return (
    <Backgroud>
        <Container>
            <Sidebyside>
                <Left>
                    <img src={unlockimg} alt="Unlock" style={{ width: '100%' }} />
                </Left>
                <Right>
                    <Heading>The unseen of spending three years at Pixelgrade</Heading>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</Paragraph>
                    <Register>Learn More</Register>
                </Right>
            </Sidebyside>
        </Container>

    </Backgroud>
  )
}

export default Unlock

const Backgroud = styled.div`
    padding: 80px 0;
`;

const Sidebyside = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;
const Right = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

`;
const Heading = styled.h1`
    color: #4D4D4D;
    font-size: 36px;
    font-weight: 600;
    line-height: 44px; 
    max-width: 600px;
`;

const Paragraph = styled.p`
    color: #717171;
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
    max-width: 600px;
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


const Left = styled.div`
    width: 40%;
`;