/// <reference types="react" />
import createStatefulContext from './createStatefulContext';
export { createStatefulContext };
declare const _default: {
    createStatefulContext: <T>({ initialState, updateState }: import("stateful-component").AsyncUpdate<T>) => [import("react").FC<{}>, import("./types").UseAsyncContextHook<T>];
};
export default _default;
export * from './types';
