import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  button {
    font-family: ${({ theme }) => theme.button.fontFamily};
  }
`;

export default GlobalStyles;
