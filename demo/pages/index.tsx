import { FC } from 'react';
import { CountProvider, useCount } from '../state';

const ButtonDemo = () => {
  const { count, transition } = useCount();
  return (
    <div>
      <button
        className="m-auto rounded-lg p-2 border-2"
        onClick={() => transition({ count: count + 1 })}
      >
        Press Me
      </button>
    </div>
  );
}

const Display = () => {
  const { count } = useCount();
  return (
    <div className="grid grid-rows-2 items-center">
      <p>Count: <strong>{count}</strong></p>
      <ButtonDemo />
    </div>
  );
}


const DemoContext: FC = ({ children }) => {
  return (
    <CountProvider>
      <Display />
      {children}
    </CountProvider>
  );
}

const ComponentDemo = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full text-center space-y-8">
        <div>
          <h3><code>Context 1</code></h3>
          <DemoContext />
        </div>

        <div>
          <h3><code>Context 2</code></h3>
          <DemoContext />
        </div>

        <div className="grid grid-cols-2 items-center">
          <h3><code>Context 3</code></h3>
          <DemoContext>
            <h4>Sub-Context</h4>
            <DemoContext />
          </DemoContext>
        </div>
      </div>
    </div>
  );
};

export default ComponentDemo;