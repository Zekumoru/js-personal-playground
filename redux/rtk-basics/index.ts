import store from './app/store';
import { cakeActions } from './features/cake/cakeSlice';
import { icecreamActions } from './features/icecream/icecreamSlice';
import { fetchUsers } from './features/user/userSlice';

console.log('Initial state:', store.getState());

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(2));

store.dispatch(fetchUsers());
