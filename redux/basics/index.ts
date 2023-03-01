import { createStore } from 'redux';

interface OrderAction {
  type: 'cake-ordered';
  quantity: number;
}

type Action = OrderAction;

const orderCake = () => {
  const action: OrderAction = {
    type: 'cake-ordered',
    quantity: 1,
  };
  return action;
};

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action: Action): typeof state => {
  switch (action.type) {
    case 'cake-ordered':
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.quantity,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log('Initial state:', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated state:', store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
