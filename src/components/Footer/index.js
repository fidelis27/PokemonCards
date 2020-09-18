import React from 'react';
import { FiHeart } from 'react-icons/fi';

import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <footer className="footer">
        <span>
          Desenvolvido com <FiHeart /> por THIAGO
          <strong>
            <span>FIDELIS </span>
          </strong>
        </span>
      </footer>
    </Container>
  );
}

export default Footer;
