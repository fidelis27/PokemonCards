import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  padding: 15px 15px;
  h1 {
    padding: 0;
  }
  h5 {
    padding: 10px 0 5px 0;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 25px;
  padding-bottom: 30px;
`;

export const ButtonTop = styled.button`
  border: none;
  border-radius: 100%;
  background: #ff4236;
  box-shadow: 2px 2px 10px -4px rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 900;
  color: #fff;
  padding: 5px 7px;
  cursor: pointer;
`;

export const ButtonsPagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const Button = styled.button`
  height: 2.6rem;
  width: 5.6rem;
  border-style: none;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 5px;
  background: #30a7d7;
  color: #fff;
  font-size: 1rem;
  transition: background 0.2s;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background: ${shade(0.2, '#30a7d7')};
  }
`;

const rotate = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  h1 {
    color: #ff4236;
    font-size: 20px;
    margin-top: 10px;
  }

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
