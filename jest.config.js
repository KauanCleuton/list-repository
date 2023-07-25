module.exports = {
    // Define o ambiente de teste como jsdom (ambiente de navegador simulado)
    testEnvironment: 'jsdom',
  
    // Especifica o padrão para busca dos arquivos de teste
    testMatch: ['**/__tests__/**/*.test.js'],
  
    // Define a transformação para arquivos JavaScript usando o Babel
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  
    // Configuração para fazer mock de arquivos CSS
    moduleNameMapper: {
      '\\.css$': '<rootDir>/__mocks__/styleMock.js',
    },
  
    // Opção para mostrar a cobertura de código após a execução dos testes
    collectCoverage: true,
  
    // Define os diretórios onde serão procurados os testes
    roots: ['<rootDir>/src'],
  
    // Define os arquivos que serão executados antes dos testes
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
    // Opções para configurar o tratamento de módulos ES6/ESModules
    // usando o Babel para que seja compatível com o Jest
    transformIgnorePatterns: [
      '/node_modules/(?!(@babel)/)',
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
    ],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  };
  