import StyledButton, { FancyButton } from './components/Button';

function App() {
  return (
    <div className="App">
      <StyledButton>Styled Button</StyledButton>
      <StyledButton variant="outline">Outlined Styled Button</StyledButton>
      <FancyButton>Fancy Button</FancyButton>
    </div>
  );
}

export default App;
