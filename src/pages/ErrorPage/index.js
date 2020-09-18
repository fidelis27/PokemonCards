import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/pokemon-logo.png';

import { Container, Header, Button } from './styles';

function ErrorAuth() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
        <h2>ERROR 404 Página não econtrada!</h2>
      </Header>

      <Button>
        <Link to="/">Voltar</Link>
      </Button>
    </Container>
  );
}

export default ErrorAuth;
