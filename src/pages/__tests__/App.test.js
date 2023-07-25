import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import { App } from '../App';

// Mock da chamada à API usando jest.spyOn e Promise.resolve
jest.spyOn(axios, 'get').mockResolvedValue({
  data: [{ id: 1, name: 'repo1', html_url: 'https://github.com/repo1' }],
});

test('handleSearch faz a chamada à API corretamente', async () => {
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

  // Verifica se a chamada à API foi realizada corretamente
  expect(axios.get).toHaveBeenCalledWith(
    'https://api.github.com/users/exampleuser/repos',
    expect.any(Object)
  );
});
