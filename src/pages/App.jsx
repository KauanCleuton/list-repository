import React, { useEffect, useState } from 'react';
import { Container } from './index';
import axios from 'axios';

export function App() {
    const [inputValue, setInputValue] = useState('');
    const [repos, setRepos] = useState([]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        if (inputValue.trim() !== '') {
            const token = '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';
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
