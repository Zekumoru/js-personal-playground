/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

type Methods = [
  open: (element: ReactNode) => void,
  close: (propagate?: boolean) => void
];

const NestedContext = createContext<Methods>([noop, noop]);

const useNested = () => {
  return useContext(NestedContext);
};

type Props = {
  children: ReactNode;
};

const NestedProvider = ({ children }: Props) => {
  const [element, setElement] = useState<ReactNode>();
  const closePrevious = useNested()[1];

  const open: Methods[0] = (element) => {
    setElement(element);
  };

  const close: Methods[1] = (propagate) => {
    setElement(undefined);
    if (propagate) closePrevious(propagate);
  };

  return (
    <NestedContext.Provider value={[open, close]}>
      {element && <NestedProvider>{element}</NestedProvider>}
      {children}
    </NestedContext.Provider>
  );
};

export default NestedProvider;
export { useNested };
