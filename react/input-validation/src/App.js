import Form from './constraint-validation/Form';
import LabelInput from './constraint-validation/LabelInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <Form>
        <LabelInput
          label="Username"
          placeholder="e.g. Foo, Bar, Zalgo"
          validate={(input) => {
            if (input === '') return 'Username is required';
            if (!/^[A-Z\s]*$/i.test(input)) return 'Only letters are allowed';
            return '';
          }}
        />
        <LabelInput
          label="Password"
          type="password"
          validate={(input) => {
            if (input === '') return 'Password is required';
            return '';
          }}
        />
        <button>Submit</button>
      </Form>
    </div>
  );
}

export default App;
