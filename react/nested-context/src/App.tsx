import Foo from './components/Foo';
import NestedProvider from './contexts/NestedContext';

function App() {
  return (
    <NestedProvider>
      <Foo />
    </NestedProvider>
  );
}

export default App;
