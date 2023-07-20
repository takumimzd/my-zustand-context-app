import { createContext, useContext } from 'react';

type State = {
  bears: number;
  pandas: number;
};

type Action =
  | {
      type: 'increaseBear';
      payload: { by: number };
    }
  | {
      type: 'increasePanda';
      payload: { by: number };
    };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increaseBear':
      return {
        ...state,
        bears: state.bears + action.payload.by,
      };
    case 'increasePanda':
      return {
        ...state,
        pandas: state.pandas + action.payload.by,
      };
    default:
      return state;
  }
};

export const ReactContext = createContext<State>({
  bears: 0,
  pandas: 0,
});

export const useReactContext = (): State => useContext(ReactContext);
