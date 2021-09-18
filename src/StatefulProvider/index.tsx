import { PropsWithChildren } from 'react';
import { StatefulComponent } from 'stateful-component';
import { StatefulProviderProps } from '../types';

/**
 * The `StatefulProvider` makes a given `Context` available to components
 * beneath it in the render tree, and re-renders when the `Context` changes,
 * which is detected automatically.
 */
export function StatefulProvider<T>({
  context,
  children,
  initialState,
  next,
}: StatefulProviderProps<T> & PropsWithChildren<{}>) {
  return (
    <StatefulComponent initialState={initialState} next={next}>
      {(state) => <context.Provider value={state}>{children}</context.Provider>}
    </StatefulComponent>
  );
}

// export class StatefulProviderT<T> extends StatefulComponent<
//   T,
//   StatefulProviderProps<T>
// > {
//   /**
//    * Render the Provider and load it with the current state.
//    */
//   render() {
//     const { context, children } = this.props;
//     return <context.Provider value={this.state}>{children}</context.Provider>;
//   }
// }
