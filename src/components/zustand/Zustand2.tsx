import { useStore } from '@/store/zustand';

export const Zustand2 = () => {
  const pandas = useStore((state) => state.pandas);
  const increasePanda = useStore((state) => state.increasePanda);
  return (
    <div style={{ width: '500px', height: '500px', backgroundColor: '#cfa', textAlign: 'center' }}>
      <span>🐼</span>
      <div>{pandas}</div>
      <button onClick={() => increasePanda(1)}>+ 1</button>
    </div>
  );
};
