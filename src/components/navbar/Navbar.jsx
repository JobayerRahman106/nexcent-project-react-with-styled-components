import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'
import logoimg from '../../assets/images/logo.png'
import NavList from './NavList'

const Navbar = () => {
  return (
    <>
        <NavbarContainer>
            <Container>
              <Sidebyside>
                <Logo>
                  <img src={logoimg} alt="Logo" />
                </Logo>
                <MenuItem>
                  <NavList/>
                </MenuItem>
                <GroupButton>
                  <Login>Login</Login>
                  <Signup>Sign up</Signup>
                </GroupButton>
              </Sidebyside>
            </Container>
        </NavbarContainer>
    </>
  )
}

export default Navbar

const NavbarContainer = styled.div`
    background-color: #f5f7fa;
    padding: 30px 0;
`;


const Sidebyside = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Logo = styled.div`
    width: 10%;
`;
const MenuItem = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
`;
const GroupButton = styled.div`
    width: 20%;
`;
const Login = styled.button`
    color: #000;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    margin-right: 20px;
`;
const Signup = styled(Login)`
    background-color : #4CAF4F;
    color: #fff;
`;

