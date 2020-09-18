import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: ${shade(0.2, '#ff4236')};
  height: 10vh;

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding-top: 10px;
    span {
      padding: 10px;
      svg {
        margin: 0 5px;
        color: #fff;
      }
    }
  }
`;
