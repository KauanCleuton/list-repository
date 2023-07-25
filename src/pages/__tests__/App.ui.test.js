import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import { App } from '../App';

// Mock da chamada à API usando jest.spyOn e Promise.resolve
jest.spyOn(axios, 'get').mockResolvedValue({
  data: [{ id: 1, name: 'repo1', html_url: 'https://github.com/repo1' }],
});

test('renderiza corretamente os repositórios encontrados', async () => {
  render(<App />);
  const input = screen.getByLabelText('Pesquisar');
  const button = screen.getByText('Buscar');

  fireEvent.change(input, { target: { value: 'exampleuser' } });
  fireEvent.click(button);

  // Aguarda a renderização do link do repositório após a resolução da chamada à API
  await waitFor(() => {
    const repoLink = screen.getByText('repo1');
    expect(repoLink).toBeInTheDocument();
  });
});

test('exibe mensagem quando nenhum repositório é encontrado', async () => {
  // Mock da chamada à API usando jest.spyOn e Promise.resolve com array vazio
  jest.spyOn(axios, 'get').mockResolvedValue({ data: [] });

  render(<App />);
  const input = screen.getByLabelText('Pesquisar');
  const button = screen.getByText('Buscar');

  fireEvent.change(input, { target: { value: 'userSemRepositorios' } });
  fireEvent.click(button);

  // Aguarda a renderização da mensagem de "Nenhum repositório encontrado" após a resolução da chamada à API
  await waitFor(() => {
    const message = screen.getByText('Nenhum repositório encontrado.');
    expect(message).toBeInTheDocument();
  });
});
