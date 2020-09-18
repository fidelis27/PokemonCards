import React from 'react';
import PropTypes from 'prop-types';
import typeColors from '../../utils/colors/typeColors';

import {
  CardContainer,
  Img,
  SubCard,
  CardName,
  CardType,
  CardTypes,
  CardWeight,
  CardHeight,
  CardAbility,
  CardInfo,
  Title,
  Number,
  CardAbilityGroup,
} from './styles';

function Card({ pokemon }) {
  const getUrlImage = id => {
    if (id < 10) {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`;
    }
    if (id > 9 && id < 100) {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`;
    }
    if (id > 100) {
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
    }
    return null;
  };

  const getIdPokemon = id => {
    if (id < 10) {
      return `#00${id}`;
    }
    if (id > 9 && id < 100) {
      return `#0${id}`;
    }
    if (id > 100) {
      return `#${id}`;
    }
    return null;
  };

  return (
    <CardContainer colorCard={pokemon.types[0].type.name}>
      <Img src={getUrlImage(pokemon.id)} alt="" />

      <SubCard>
        <CardTypes>
          {pokemon.types.map(type => {
            return (
              <CardType
                key={`type-${type.type.name}`}
                style={{
                  backgroundColor: typeColors[type.type.name],
                }}
              >
                {type.type.name}
              </CardType>
            );
          })}
        </CardTypes>
        <CardName>{pokemon.name}</CardName>
        <CardInfo>
          <CardWeight colorBorder={pokemon.types[0].type.name}>
            <p className="title">Weight</p>
            <p>{pokemon.weight}</p>
          </CardWeight>
          <CardHeight colorBorder={pokemon.types[0].type.name}>
            <p className="title">Height</p>
            <p>{pokemon.height}</p>
          </CardHeight>
          <CardAbilityGroup colorBorder={pokemon.types[0].type.name}>
            <Title className="title">Ability</Title>

            {pokemon.abilities.map(ability => {
              return (
                <CardAbility key={`type-${ability.ability.name}`}>
                  <p>{ability.ability.name}</p>
                </CardAbility>
              );
            })}
          </CardAbilityGroup>
          <Number colorNumber={pokemon.types[0].type.name}>
            {pokemon.id && getIdPokemon(pokemon.id)}
          </Number>
        </CardInfo>
      </SubCard>
    </CardContainer>
  );
}

export default Card;

Card.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    abilities: PropTypes.array.isRequired,
  }).isRequired,
};
