import styled from 'styled-components';

export const Container = styled.div`
  background: black;
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
        color: red;
      }
    }
  }
`;
