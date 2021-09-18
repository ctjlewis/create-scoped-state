import { PropsWithChildren } from 'react';
import { StateProviderProps } from '../types';
import { StatefulComponent } from 'stateful-component';

/**
 * The `StateProvider` makes a given `Context` available to components beneath
 * it in the render tree, and re-renders when the `Context` changes, which is
 * detected automatically.
 */
export function StateProvider<T>({
  context,
  children,
  initialState,
  next,
}: StateProviderProps<T> & PropsWithChildren<{}>) {
  return (
    <StatefulComponent initialState={initialState} next={next}>
      {(state) => <context.Provider value={state}>{children}</context.Provider>}
    </StatefulComponent>
  );
}
