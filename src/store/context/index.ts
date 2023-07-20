import { createContext, useContext } from 'react';

type State = {
  bear: {
    name: string;
    age: number;
  };
  panda: {
    name: string;
    age: number;
  };
};

type Action =
  | {
      type: 'changeNameBear';
      payload: { name: string };
    }
  | {
      type: 'changeNamePanda';
      payload: { name: string };
    };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'changeNameBear':
      return {
        ...state,
        bears: {
          ...state.bear,
          name: action.payload.name,
        },
      };
    case 'changeNamePanda':
      return {
        ...state,
        pandas: {
          ...state.bear,
          name: action.payload.name,
        },
      };
    default:
      return state;
  }
};

export const initialState: State = {
  bear: {
    name: '太郎',
    age: 1,
  },
  panda: {
    name: '二郎',
    age: 2,
  },
};

export const ReactContext = createContext<State>(initialState);

export const useReactContext = (): State => useContext(ReactContext);
