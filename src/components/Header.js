import React, { useState } from 'react'
import styled from 'styled-components';
import Home from './Home';
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { style } from '@mui/system';

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt='' />
      </a>
      <LeftMenu>
        <a href="#">Model-S</a>
        <a href="#">Model-X</a>
        <a href="#">Model-X</a>
        <a href="#">Model-3</a>
        <a href="#">Model-Y</a>
      </LeftMenu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={ burgerStatus }>
        <CustomCloseBox>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CustomCloseBox>
        <li><a href='#'>Tesla item 1</a></li>
        <li><a href='#'>Tesla item 2</a></li>
        <li><a href='#'>Tesla item 3</a></li>
        <li><a href='#'>Tesla item 4</a></li>
        <li><a href='#'>Tesla item 5</a></li>
        <li><a href='#'>Tesla item 6</a></li>
        <li><a href='#'>Tesla item 7</a></li>
        <li><a href='#'>Tesla item 8</a></li>
      </BurgerNav>

    </Container>
  )
}

export default Header

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const LeftMenu = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  flex: 1;

  @media(max-width: 992px){
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${ props => props.show ? 'translateX(0)' : 'translateX(100%)' };
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`

const CustomCloseBox = styled.div`
  display: flex;
  justify-content: flex-end;
`
