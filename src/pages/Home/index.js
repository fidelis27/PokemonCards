import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronUp, FaSpinner } from 'react-icons/fa';
import Card from '../../components/Card';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { getAllPokemon, getPokemon } from '../../services/api';

import {
  Container,
  Content,
  List,
  ButtonTop,
  ButtonsPagination,
  Button,
  Loading,
} from './styles';

function App() {
  const [pokemonData, setPolkemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState([]);
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  function handleScrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const loadingPokemon = useCallback(
    async data => {
      const _pokemonData = await Promise.all(
        data.map(async pokemon => {
          const pokemonRecord = await getPokemon(pokemon.url);

          return pokemonRecord;
        })
      );

      setPolkemonData(_pokemonData);
    },

    []
  );
  const next = useCallback(async () => {
    setLoading(true);
    const data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }, [loadingPokemon, nextUrl]);

  const prev = useCallback(async () => {
    if (!prevUrl) return;
    setLoading(true);
    const data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }, [loadingPokemon, prevUrl]);

  useEffect(() => {
    async function loadData() {
      const response = await getAllPokemon(initialURL);

      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);

      setLoading(false);
    }
    loadData();
  }, [loadingPokemon]);

  return (
    <Container>
      <NavBar />

      <Content>
        <ButtonsPagination>
          <Button onClick={prev}>Previous</Button>
          <Button onClick={next}>Next</Button>
        </ButtonsPagination>
        <ButtonTop onClick={() => handleScrollTop()}>
          <FaChevronUp size={25} />
        </ButtonTop>
        {loading ? (
          <Loading>
            <FaSpinner color="#ff4236" size={50} />
            <h1>Carregando...</h1>
          </Loading>
        ) : (
          <>
            <List>
              {pokemonData &&
                pokemonData.length > 0 &&
                pokemonData.map(pokemon => {
                  return (
                    <Card key={`pokemon-${pokemon.name}`} pokemon={pokemon} />
                  );
                })}
            </List>
          </>
        )}
        <ButtonsPagination>
          <Button onClick={prev}>Previous</Button>
          <Button onClick={next}>Next</Button>
        </ButtonsPagination>
      </Content>
      <Footer />
    </Container>
  );
}

export default App;
