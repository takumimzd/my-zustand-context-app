import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface State {
  bears: number;
  pandas: number;
  increaseBear: (by: number) => void;
  increasePanda: (by: number) => void;
}

export const useStore = create<State>()(
  devtools(
    (set) => ({
      bears: 0,
      increaseBear: (by) => set((state) => ({ bears: state.bears + by })),
      pandas: 0,
      increasePanda: (by) => set((state) => ({ pandas: state.pandas + by })),
    }),
    {
      name: 'bear-storage',
    },
  ),
);
