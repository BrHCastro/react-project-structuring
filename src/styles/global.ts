import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors['official-blue']};
    color: ${({ theme }) => theme.colors.white};
    font: 400 1rem ${({ theme }) => theme.fonts['open-sans']};
    -webkit-font-smoothing: antialiased;
  }

  input, textarea, select {
    font: 400 1rem ${({ theme }) => theme.fonts['open-sans']};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
