import styled from 'styled-components';
import StyledButton, { FancyButton, SubmitButton } from './components/Button';
import GlobalStyles from './GlobalStyles';

const StyledApp = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <StyledButton>Styled Button</StyledButton>
      <StyledButton variant="outline">Outlined Styled Button</StyledButton>
      <FancyButton>Fancy Button</FancyButton>
      <SubmitButton>Submit Button</SubmitButton>
    </StyledApp>
  );
}

export default App;
