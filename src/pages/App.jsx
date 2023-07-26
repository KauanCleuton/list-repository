import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './index'

export function App() {
  const [inputValue, setInputValue] = useState('');
  const [repos, setRepos] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim() !== '') {
      const token = process.env.REACT_APP_GITHUB_TOKEN
      const headers = { Authorization: `Bearer ${token}` };

      axios.get(`https://api.github.com/users/${inputValue}/repos`, { headers })
        .then((response) => setRepos(response.data))
        .catch((error) => {
          console.error('Erro ao buscar repositórios:', error);
          setRepos([]);
        });
    } else {
      setRepos([]);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [inputValue]);

  return (
    <Container>
      <h1>Repositórios:</h1>
      <label htmlFor="search">Pesquisar</label>
      <input type="text" id="search" value={inputValue} onChange={handleChange} />
      <button onClick={handleSearch}>Buscar</button>
      <ul>
        {repos.length > 0 ? (
          repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url}>{repo.name}</a>
            </li>
          ))
        ) : (
          <li>Nenhum repositório encontrado.</li>
        )}
      </ul>
    </Container>
  );
}
