# Create Scoped State

### Demo

https://create-scoped-state.vercel.app/

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fctjlewis%2Fcreate-scoped-state&demo-title=Stateful%20Context%20Demo&demo-description=A%20demo%20showing%20multiple%20scoped%20states.&demo-url=https%3A%2F%2Fcreate-scoped-state.vercel.app&demo-image=https%3A%2F%2Fi.imgur.com%2FHJPUBiW.png)

### Example

See Demo above.

```ts
// ../state.ts
export const [CountProvider, useCount] = createScopedState({ count: 0 });
export const [SomethingElseProvider, useSomethingElse] = createScopedState({
  // ...,
});
```

```tsx
// index.ts
import { CountProvider, useCount } from '../state';

const CountView = () => {
  const { count, updateState } = useCount();
  return (
    <div>
      <p>
        Count: <strong>{count}</strong>
      </p>
      <button onClick={() => updateState({ count: count + 1 })}>
        Press Me
      </button>
    </div>
  );
};
```

The `useCount()` state is scoped to its closest provider.  Below are two
contexts, including one with two counters which share the same state (pressing
the button increments both counters).

```tsx
const DemoContext: FC = () => {
  return (
    <div>
      {/* Isolated counter. */}
      <CountProvider>
        <CountView />
      </CountProvider>

      {/* Two counters sharing a state separate from the first one.  */}
      <CountProvider>
        <CountView />
        <CountView />
      </CountProvider>

    </div>
  );
};
```

# User Guide

This project is a [tszip](https://github.com/tszip/tszip) package written in
TypeScript with the latest ESNext syntax in `src/` and compiled to ES module
output in `dist/`.

## Developing

To compile the project and watch for changes:

```
yarn dev
```

## Building

To build the release package:

```
yarn build
```

## Publish

To compile the release build and publish to NPM:

```
yarn publish
```
