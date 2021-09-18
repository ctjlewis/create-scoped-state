import { ConsumerProps, Context } from 'react';
import { StateMachine, StateTransition } from 'stateful-component';

/**
 * Get the current context state.
 */
// export type UseAsyncContextHook<T> = () => Partial<T>;
/**
 * `AsyncProvider` requires a `context` to read, and a `updateState` function
 * to generate a new state when the context changes.
 */
export interface StateProviderProps<T> extends StateMachine<T> {
  context: Context<StateTransition<T>>;
}
/**
 * `AsyncConsumer` requires a `context` to read.
 */
export interface StateConsumerProps<T> extends ConsumerProps<T> {
  context: Context<T>;
}
