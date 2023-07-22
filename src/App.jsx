import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 10px;
    font-family: 'Roboto', sans-serif;
    margin-top: 200px;
    color: #131313;

    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 12px -8px #131312;
    > input {
        width: fit-content;
        font-size: 17px;
        border: none;
        padding: 8px 20px;
        box-shadow: 0 0 12px -8px #131312;
        outline: 1px solid orange;
        border-radius: 10px;
        color: orange;
        margin-bottom: 18px;
    }
    > button {
        box-shadow: 0 0 12px -8px #131312;
        padding: 8px 37px;
        color: #313131;
        background-color: #ffa703;
        font-weight: 600;
        font-size: 16px;
        transition: .3s ease-in-out;
        border: none;
        border-radius: 10px;
    }
    button:hover {
        background-color: #ffa600d9;
    }
    > ul {
        list-style: none;
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

        li {
        width: fit-content;
        height: fit-content;
        background-color: orange;
        padding: 12px;
        margin-right: 25px;
        border-radius: 8px;
        transition: .3s ease-in-out;
        box-shadow: 0 0 12px -7px #131312;

        a {
            text-decoration: none;
            color: #131312;
            font-size: 18px;
            font-weight: 600;
        }
        }
        li:hover {
            background-color: #ffa600d9;
        }
  }
`

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