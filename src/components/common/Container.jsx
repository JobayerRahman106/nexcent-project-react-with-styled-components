import React from 'react'
import styled from 'styled-components'


const Container = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Container

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;