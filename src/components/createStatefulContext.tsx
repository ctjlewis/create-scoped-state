import { FC, createContext, useContext } from "react";
import { AsyncState, AsyncUpdate, StatefulProvider } from "stateful-component";

export type UseAsyncContextHook<T> = () => AsyncState<T>;

const NO_OP = () => console.log('No op called');

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
 * const [StatefulProvider, useStatefulContext] = createStatefulContext({
 *  initialState: { count: 0 },
 *  updateState: async () => ({
 *    count: await getCounterValue()
 *  }),
 * });
 * export { StatefulProvider, useStatefulContext };
 * 
 * // in App.tsx
 * // Provide the stateful context to every component under the StatefulProvider
 * import { StatefulProvider } from '../state.ts'
 * const App = () => (
 *    <StatefulProvider>
 *      <MyComponent />
 *    </StatefulProvider>
 * );
 *
 * // in components.tsx
 * // import the hook and consume the stateful context
 * import { useStatefulContext } from '../state.ts'
 * const MyComponent = () => {
 *    // load the stateful context from AsyncProvider
 *    const { count } = useStatefulContext();
 *    // ...
 * }
 */
const createStatefulContext = <T,>({
  initialState,
  updateState
}: AsyncUpdate<T>): [FC, UseAsyncContextHook<T>] => {
  /**
   * The context must be initialized in this scope.
   */
  const context = createContext<AsyncState<T>>({
    ...initialState,
    updateState: NO_OP,
    loading: true,
  });
  /**
   * Any component beneath this provider in the render tree can use the
   * `useAsyncContext` hook to get the current global state.
   */
  const statefulProvider: FC = ({ children }) => {
    return (
      <StatefulProvider context={context} initialState={initialState} updateState={updateState}>
        {children}
      </StatefulProvider>
    );
  }
  /**
   * Hook into the generated global context.
   */
  const useStatefulContext: UseAsyncContextHook<T> = () => useContext(context);

  return [
    statefulProvider,
    useStatefulContext,
  ];
}

export default createStatefulContext;