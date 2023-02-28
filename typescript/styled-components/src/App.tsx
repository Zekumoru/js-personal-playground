import { ThemeProvider } from 'styled-components';
import StyledButton, { FancyButton, SubmitButton } from './components/Button';
import GlobalStyles from './GlobalStyles';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledButton>Styled Button</StyledButton>
        <StyledButton variant="outline">Outlined Styled Button</StyledButton>
        <FancyButton>Fancy Button</FancyButton>
        <SubmitButton>Submit Button</SubmitButton>
      </ThemeProvider>
    </div>
  );
}

export default App;
