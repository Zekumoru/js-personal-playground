import { useNested } from '../contexts/NestedContext';
import Bar from './Bar';

const Foo = () => {
  const [open] = useNested();

  return (
    <div>
      <button onClick={() => open(<Bar />)}>Open Bar</button>
    </div>
  );
};

export default Foo;
