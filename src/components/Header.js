import React from 'react'
import styled from 'styled-components';
import Home from './Home';

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt='' />
      </a>
      <LeftMenu>
        <a href="#" style={{ textDecoration: 'none' }}>Model-S</a>
        <a href="#" style={{ textDecoration: 'none' }}>Model-X</a>
        <a href="#" style={{ textDecoration: 'none' }}>Model-X</a>
        <a href="#" style={{ textDecoration: 'none' }}>Model-3</a>
        <a href="#" style={{ textDecoration: 'none' }}>Model-Y</a>
      </LeftMenu>
      <RightMenu>
        <a href="#" style={{ textDecoration: 'none' }}>Shop</a>
        <a href="#" style={{ textDecoration: 'none' }}>Tesla Account</a>
      </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  min-height: 60px;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`

const LeftMenu = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  flex: 1;
`

const RightMenu = styled.div`

`