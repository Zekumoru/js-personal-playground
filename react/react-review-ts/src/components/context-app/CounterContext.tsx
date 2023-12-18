/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useReducer } from 'react';

interface ICounterAction {
  type: 'increase' | 'decrease';
  payload: number;
}

interface ICounterState {
  count: number;
}

type TCounterContext = [ICounterState, React.Dispatch<ICounterAction>];
const CounterContext = createContext<TCounterContext>([{ count: 0 }, () => {}]);

interface ICounterProviderProps {
  children: ReactNode;
}

const countReducer = (
  state: ICounterState,
  action: ICounterAction
): ICounterState => {
  switch (action.type) {
    case 'increase':
      return {
        ...state,
        count: state.count + action.payload,
      };
    case 'decrease':
      return {
        ...state,
        count: state.count - action.payload,
      };
  }
  return state;
};

const CounterProvider = ({ children }: ICounterProviderProps) => {
  const reducer = useReducer(countReducer, { count: 0 });
  return (
    <CounterContext.Provider value={reducer}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  const [state, dispatch] = useContext(CounterContext);
  return [state, dispatch] as TCounterContext;
};

export { CounterProvider, useCounter };
