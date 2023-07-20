import { Context1 } from '@/components/context/Context1';
import { Context2 } from '@/components/context/Context2';
import { Zustand1 } from '@/components/zustand/Zustand1';
import { Zustand2 } from '@/components/zustand/Zustand2';
import { ReactContext } from '@/store/context';

export default function Home() {
  return (
    <main>
      <Zustand1 />
      <Zustand2 />
      <ReactContext.Provider value={{ bears: 0, pandas: 0 }}>
        <Context1 />
        <Context2 />
      </ReactContext.Provider>
    </main>
  );
}
