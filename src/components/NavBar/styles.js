import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  padding: 30px;
  background: #ff4236;
  color: #ffff;
  text-transform: uppercase;

  span {
    display: block;
    font-weight: 700;
    font-size: 1.2rem;
    padding: 3px;

    :hover {
      font-size: 1.3rem;
      opacity: 0.8;
    }
  }
  img {
    height: 3.3rem;
  }
`;
