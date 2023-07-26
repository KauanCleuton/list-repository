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
      const githubToken = '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'; // Substitua pelo seu token de acesso do GitHub
      const headers = { Authorization: `Bearer ${githubToken}` };

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
