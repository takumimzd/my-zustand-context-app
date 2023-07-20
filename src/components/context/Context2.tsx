import { initialState, reducer } from '@/store/context';
import { useReducer } from 'react';

export const Context2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increasePanda = () => dispatch({ type: 'changeNameBear', payload: { by: 1 } });

  return (
    <div style={{ width: '500px', height: '500px', backgroundColor: '#cfa', textAlign: 'center' }}>
      <span>🐼</span>
      <div>{state.pandas}</div>
      <button onClick={() => increasePanda()}>+ 1</button>
    </div>
  );
};
