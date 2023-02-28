import StyledButton, { FancyButton, SubmitButton } from './components/Button';

function App() {
  return (
    <div className="App">
      <StyledButton>Styled Button</StyledButton>
      <StyledButton variant="outline">Outlined Styled Button</StyledButton>
      <FancyButton>Fancy Button</FancyButton>
      <SubmitButton>Submit Button</SubmitButton>
    </div>
  );
}

export default App;
