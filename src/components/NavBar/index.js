import React from 'react';
import { Container } from './styles';
import logo from '../../assets/img/pokemon-logo.png';

function Navbar() {
  return (
    <Container>
      <span>My Pokemon Cards</span>
      <img src={logo} alt="logo" />
    </Container>
  );
}

export default Navbar;
