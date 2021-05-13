import { FC } from "react";
import { AsyncUpdate } from "stateful-component";
import { UseAsyncContextHook } from "./types";
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
declare const createStatefulContext: <T>({ initialState, updateState }: AsyncUpdate<T>) => [FC<{}>, UseAsyncContextHook<T>];
export default createStatefulContext;
