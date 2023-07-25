import React, { useEffect, useState } from 'react';
import { Container } from './index';

export function App() {
    const [inputValue, setInputValue] = useState('');
    const [repos, setRepos] = useState([]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        if (inputValue.trim() !== '') {
            fetch(`https://api.github.com/users/${inputValue}/repos`)
                .then((response) => response.json())
                .then((data) => setRepos(data))
                .catch((error) => console.error('Erro ao buscar repositórios:', error));
        }
    };

    useEffect(() => {
        handleSearch();
    }, [inputValue]);

    return (
        <Container>
            <h1>Repositórios:</h1>
            <input type="text" value={inputValue} onChange={handleChange} />
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