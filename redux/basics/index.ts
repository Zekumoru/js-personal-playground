import { createStore, bindActionCreators, combineReducers } from 'redux';
import { produce } from 'immer';

interface CakeAction {
  type: 'cake-ordered' | 'cake-restocked';
  payload: number;
}

interface IceCreamAction {
  type: 'ice-cream-ordered' | 'ice-cream-restocked';
  payload: number;
}

type Action = CakeAction | IceCreamAction;

const orderCakes = (quantity = 1) => {
  const action: CakeAction = {
    type: 'cake-ordered',
    payload: quantity,
  };
  return action;
};

const restockCakes = (quantity = 1) => {
  const action: CakeAction = {
    type: 'cake-restocked',
    payload: quantity,
  };
  return action;
};

const orderIceCreams = (quantity = 1) => {
  const action: IceCreamAction = {
    type: 'ice-cream-ordered',
    payload: quantity,
  };
  return action;
};

const restockIceCreams = (quantity = 1) => {
  const action: IceCreamAction = {
    type: 'ice-cream-restocked',
    payload: quantity,
  };
  return action;
};

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 10,
};

const cakeReducer = (
  state = initialCakeState,
  action: CakeAction
): typeof state => {
  switch (action.type) {
    case 'cake-ordered':
      return produce(state, (draft) => {
        draft.numOfCakes -= action.payload;
      });
    case 'cake-restocked':
      return produce(state, (draft) => {
        draft.numOfCakes += action.payload;
      });
    default:
      return state;
  }
};

const iceCreamReducer = (
  state = initialIceCreamState,
  action: IceCreamAction
): typeof state => {
  switch (action.type) {
    case 'ice-cream-ordered':
      return produce(state, (draft) => {
        draft.numOfIceCreams -= action.payload;
      });
    case 'ice-cream-restocked':
      return produce(state, (draft) => {
        draft.numOfIceCreams += action.payload;
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
const actions = bindActionCreators(
  {
    orderCakes,
    restockCakes,
    orderIceCreams,
    restockIceCreams,
  },
  store.dispatch
);

console.log('Initial state:', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated state:', store.getState());
});

actions.orderCakes();
actions.orderCakes();
actions.orderCakes();
actions.restockCakes(3);

actions.orderIceCreams();
actions.orderIceCreams();
actions.restockIceCreams(2);

unsubscribe();
