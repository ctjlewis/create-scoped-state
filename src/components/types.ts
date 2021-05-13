import { AsyncState } from "stateful-component";

export type UseAsyncContextHook<T> = () => AsyncState<T>;