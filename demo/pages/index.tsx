import { FC } from 'react';
import { CountProvider, useCount } from '../state';

const CountView = () => {
  const { count, updateState } = useCount();
  return (
    <div className="grid grid-rows-2 items-center">
      <p>Count: <strong>{count}</strong></p>
      <button
        className="m-auto rounded-lg p-2 border-2"
        onClick={() => updateState({ count: count + 1 })}
      >
        Press Me
      </button>
    </div>
  );
}

const DemoContext: FC = ({ children }) => {
  return (
    <CountProvider>
      <CountView />
      {children}
    </CountProvider>
  );
}

const ComponentDemo = () => {
  return (
    <div className="w-full h-full flex items-center">
      <div className="w-full text-center flex flex-col gap-4">
        <div>
          <h3><code>Context 1</code></h3>
          <CountProvider>
            <CountView />
          </CountProvider>
        </div>

        <hr />

        <div>
          <h3><code>Context 2</code></h3>
          <CountProvider>
            <CountView />
          </CountProvider>
        </div>

        <hr />

        <div className="flex flex-col gap-4">
          <h3><code>Context 3 (2 counters)</code></h3>
          <CountProvider>
            <CountView />
            <CountView />
            <h4><code>Context 3.1: sub-context (3 counters)</code></h4>
            <p>
              State is scoped to the nearest provider, so this context is not
              updated by changes to its parents.
            </p>
            <CountProvider>
              <CountView />
              <CountView />
              <CountView />
            </CountProvider>
          </CountProvider>
        </div>
      </div>
    </div>
  );
};

export default ComponentDemo;