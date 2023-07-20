import { reducer } from '@/store/context';
import { useReducer } from 'react';

export const Context1 = () => {
  const [state, dispatch] = useReducer(reducer, { bears: 0, pandas: 0 });
  const increaseBear = () => dispatch({ type: 'increaseBear', payload: { by: 1 } });

  return (
    <div style={{ width: '500px', height: '500px', backgroundColor: '#ffc', textAlign: 'center' }}>
      <span>🐻</span>
      <div>{state.bears}</div>
      <button onClick={() => increaseBear()}>+ 1</button>
    </div>
  );
};
