import {
  createStore,
  applyMiddleware,
  bindActionCreators,
  Dispatch,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

interface RequestAction {
  type: 'fetch-users-request';
}

interface SucceededAction {
  type: 'fetch-users-succeeded';
  payload: User[];
}

interface FailedAction {
  type: 'fetch-users-failed';
  payload: string;
}

type FetchUsersAction = RequestAction | SucceededAction | FailedAction;

const fetchUsersRequest = () => {
  const action: RequestAction = {
    type: 'fetch-users-request',
  };
  return action;
};

const fetchUsersSucceeded = (users: User[]) => {
  const action: SucceededAction = {
    type: 'fetch-users-succeeded',
    payload: users,
  };
  return action;
};

const fetchUsersFailed = (error: string) => {
  const action: FailedAction = {
    type: 'fetch-users-failed',
    payload: error,
  };
  return action;
};

interface UsersState {
  loading: boolean;
  users: User[];
  error: string;
}

const initialState: UsersState = {
  loading: false,
  users: [],
  error: '',
};

const reducer = (
  state = initialState,
  action: FetchUsersAction
): UsersState => {
  switch (action.type) {
    case 'fetch-users-request':
      return {
        ...state,
        loading: true,
      };
    case 'fetch-users-succeeded':
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
    case 'fetch-users-failed':
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchUsers = () => async (dispatch: Dispatch<FetchUsersAction>) => {
  dispatch(fetchUsersRequest());

  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch(fetchUsersSucceeded(response.data));
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An error has occurred while fetching users!';
    dispatch(fetchUsersFailed(errorMessage));
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const actions = bindActionCreators(
  {
    fetchUsers,
  },
  store.dispatch
);

store.subscribe(() => {
  const { loading, users, error } = store.getState();

  if (loading) {
    console.log('Loading...');
    return;
  }

  if (error) {
    console.log('Error:', error);
    return;
  }

  users.forEach((user, index) => console.log(index + 1, user.name));
});

actions.fetchUsers();
