import { StateConsumerProps } from '../types';

/**
 * Consume the `context` from a Provider of that context up the render tree.
 */
export const StateConsumer = <T,>({
  children,
  context,
}: StateConsumerProps<T>) => <context.Consumer>{children}</context.Consumer>;
