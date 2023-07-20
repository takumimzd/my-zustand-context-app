import { useStore } from '@/store/zustand';

export const Zustand1 = () => {
  const bears = useStore((state) => state.bears);
  const increaseBear = useStore((state) => state.increaseBear);
  return (
    <div style={{ width: '500px', height: '500px', backgroundColor: '#ffc', textAlign: 'center' }}>
      <span>🐻</span>
      <div>{bears}</div>
      <button onClick={() => increaseBear(1)}>+ 1</button>
    </div>
  );
};
