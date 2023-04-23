import { useNested } from '../contexts/NestedContext';

const Bar = () => {
  const [open, close] = useNested();

  return (
    <div>
      <button
        onClick={() =>
          open(<button onClick={() => close(true)}>Close all</button>)
        }
      >
        Show close button
      </button>
    </div>
  );
};

export default Bar;
