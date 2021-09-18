import { FC, createContext, useContext } from 'react';
import { StateMachine, StateTransition } from 'stateful-component';
import { StatefulProvider } from '../StatefulProvider';

const NO_OP = () => null;

/**
 * Given an `initialState` object (specifying the default state) and a
 * `updateState` function (specifying how to determine a new state when the
 * context has changed), create a `StatefulProvider` and a `StatefulContextHook`
 * to access a stateful context in any component beneath the `StatefulProvider`
 * in the render tree.
 *
 * @example
 * // in state.ts
 * // create, export StatefulProvider and useStatefulContext hook
 * const [CountStateProvider, useCountState] = createStatefulContext({
 *  initialState: { count: 0 },
 *  updateState: async () => ({
 *    count: await getCounterValue()
 *  }),
 * });
 * export { CountStateProvider, useCountState };
 *
 * // in App.tsx
 * // Provide the stateful context to every component under the CountStateProvider
 * import { CountStateProvider } from '../state.ts'
 * const App = () => (
 *    <CountStateProvider>
 *      <MyComponent />
 *    </CountStateProvider>
 * );
 *
 * // in components.tsx
 * // import the hook and consume the stateful context
 * import { useCountState } from '../state.ts'
 * const MyComponent = () => {
 *    // load the stateful context from AsyncProvider
 *    const { count, loading } = useCountState();
 *    // ...
 * }
 */
export const createStatefulContext = <T,>({
  initialState,
  next,
}: StateMachine<T>): [FC, () => StateTransition<T>] => {
  /**
   * The context must be initialized in this scope.
   */
  const context = createContext<StateTransition<T>>({
    ...initialState,
    transition: NO_OP,
    loading: true,
  });
  /**
   * Any component beneath this provider in the render tree can use the
   * `useAsyncContext` hook to get the current global state.
   */
  const statefulProvider: FC = ({ children }) => {
    return (
      <StatefulProvider
        context={context}
        initialState={initialState}
        next={next}
      >
        {children}
      </StatefulProvider>
    );
  };
  /**
   * Hook into the generated global context.
   */
  const useStatefulContext = () => useContext(context);

  return [statefulProvider, useStatefulContext];
};
