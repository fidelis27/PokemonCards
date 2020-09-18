import styled, { css } from 'styled-components';
import typeColors from '../../utils/colors/typeColors';

const colors = typeColors;

export const CardContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  margin-top: 25px;

  ${props =>
    props.colorCard &&
    css`
      background: ${colors[props.colorCard]};
      border: 2px solid ${colors[props.colorCard]};
    `}

  &:hover {
    transform: scale(1.05);
    transition-duration: 200ms;
    cursor: pointer;
    > img {
      margin-top: -20px;
      transform: scale(1.15);
      transition-duration: 300ms;
    }
  }
`;

export const Img = styled.img`
  width: 160px;
  margin: 0 auto;
  z-index: 2;
`;

export const SubCard = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 10px -4px rgba(0, 0, 0, 0.25);
  background: #fff;
  min-height: 340px;
  padding: 15px;
  position: absolute;
  width: 100%;
  margin-top: 100px;
  padding-top: 25px;
  ${props =>
    props.colorCard &&
    css`
      background: ${colors[props.colorCard]};
    `}
`;

export const CardTypes = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const CardType = styled.div`
  padding: 5px 10px;
  margin: 10px 10px 10px 0;
  border-radius: 5px;
  background: cyan;
  color: #fff;
`;

export const CardName = styled.div`
  text-align: center;
  text-transform: capitalize;
  font-weight: 900;
  text-transform: uppercase;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  justify-content: space-between;
`;

export const CardHeight = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  p {
    font-weight: 500;
  }
  p:first-child {
    font-weight: 700;
  }

  ${props =>
    props.colorBorder &&
    css`
      border-bottom: 2px solid ${colors[props.colorBorder]};
    `}
`;

export const CardWeight = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  p {
    font-weight: 500;
  }
  p:first-child {
    font-weight: 700;
  }
  ${props =>
    props.colorBorder &&
    css`
      border-bottom: 2px solid ${colors[props.colorBorder]};
    `}
`;

export const CardAbilityGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;

  ${props =>
    props.colorBorder &&
    css`
      border-bottom: 2px solid ${colors[props.colorBorder]};
    `}
`;

export const CardAbility = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px;
  text-transform: capitalize;
  margin-top: 5px;
  font-size: 0.8rem;
  p {
    font-weight: 500;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Number = styled.p`
  font-weight: 700;
  margin-top: 40px;
  text-align: center;
  font-size: 1.6rem;
  ${props =>
    props.colorNumber &&
    css`
      color: ${colors[props.colorNumber]};
    `}
`;
