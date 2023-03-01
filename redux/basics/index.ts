import { createStore, bindActionCreators } from 'redux';

interface OrderAction {
  type: 'cake-ordered';
  payload: number;
}

interface RestockAction {
  type: 'cake-restocked';
  payload: number;
}

type Action = OrderAction | RestockAction;

const orderCake = () => {
  const action: OrderAction = {
    type: 'cake-ordered',
    payload: 1,
  };
  return action;
};

const restockCakes = (quantity = 1) => {
  const action: RestockAction = {
    type: 'cake-restocked',
    payload: quantity,
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
        numOfCakes: state.numOfCakes - action.payload,
      };
    case 'cake-restocked':
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
const actions = bindActionCreators({ orderCake, restockCakes }, store.dispatch);
console.log('Initial state:', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated state:', store.getState());
});

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCakes(3);

unsubscribe();
