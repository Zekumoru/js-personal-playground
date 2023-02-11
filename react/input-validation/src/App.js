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
          requiredMessage="Username is required"
          validate={(input) => {
            if (!/^[A-Z\s]*$/i.test(input)) return 'Only letters are allowed';
            return '';
          }}
          required
        />
        <LabelInput
          label="Password"
          type="password"
          requiredMessage="Password is required"
          validate={(input) => {
            if (input === '') return 'Password is required';
            return '';
          }}
          required
        />
        <button>Submit</button>
      </Form>
    </div>
  );
}

export default App;
