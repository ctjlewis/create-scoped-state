/// <reference types="react" />
import createStatefulContext from './createStatefulContext';
export { createStatefulContext };
declare const _default: {
    createStatefulContext: <T>({ initialState, updateState }: import("stateful-component").AsyncUpdate<T>) => [import("react").FC<{}>, import("./createStatefulContext").UseAsyncContextHook<T>];
};
export default _default;
