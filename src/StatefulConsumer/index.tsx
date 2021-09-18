import { StatefulConsumerProps } from '../types';

/**
 * Consume the `context` from a Provider of that context up the render tree.
 */
export const StatefulConsumer = <T,>({
  children,
  context,
}: StatefulConsumerProps<T>) => <context.Consumer>{children}</context.Consumer>;
