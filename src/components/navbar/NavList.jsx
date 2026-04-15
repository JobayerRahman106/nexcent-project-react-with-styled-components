import React from 'react'
import styled from 'styled-components'

const NavList = () => {
  return (
        <UnorderList>
            <List>Home</List>
            <List>Service</List>
            <List>Feature</List>
            <List>Product</List>
            <List>Testimonial</List>
            <List>FAQ</List>
        </UnorderList>
  )
}

export default NavList

const UnorderList = styled.ul`
    display: flex;
    align-items: center;
    column-gap: 50px;
    list-style-type: none;
    font-size: 16px;
    font-weight: 500;
`;

const List = styled.li`
cursor: pointer;
    &:hover{
        color: #4CAF4F;
    }
`;