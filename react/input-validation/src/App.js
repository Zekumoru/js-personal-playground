import LabelInput from './LabelInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <LabelInput
        label="Input Box"
        placeholder="Type something..."
        validate={(input) => {
          if (!/^[a-z\s]+$/i.test(input)) return 'Only letters are allowed!';
          return '';
        }}
      />
    </div>
  );
}

export default App;
