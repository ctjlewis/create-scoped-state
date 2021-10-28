# Create Scoped State for React

This tool makes it easy to create a scoped state for your React application.
Given an initial state, `createScopedState` will return a `Provider` and a
`useState()` hook for use anywhere in the app.

See **Example** below for details on the pattern, which was mostly designed to
make asynchronous updates simpler, without requiring boilerplate calls to
`useEffect` etc.

### Demo

https://create-scoped-state.vercel.app/

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fctjlewis%2Fcreate-scoped-state&demo-title=Stateful%20Context%20Demo&demo-description=A%20demo%20showing%20multiple%20scoped%20states.&demo-url=https%3A%2F%2Fcreate-scoped-state.vercel.app&demo-image=https%3A%2F%2Fi.imgur.com%2FHJPUBiW.png)

### Example

See Demo above.

```ts
// state.ts
// Create, export Provider and Hook
export const [CountProvider, useCount] = createScopedState({ count: 0 });
```

```tsx
// index.ts
// Import Provider and Hook
import { CountProvider, useCount } from '../state';

const CountView = () => {
  // Read scoped state
  const { count, updateState } = useCount();
  return (
    <div>
      <p>
        Count: <strong>{count}</strong>
      </p>
      {/* Update scoped state. */}
      <button onClick={async () => updateState({ count: count + 1 })}>
        Press Me
      </button>
    </div>
  );
};
```

The `useCount()` state is scoped to its closest provider.  Below are two
contexts, including one with two counters which share the same state (pressing
the button increments both counters).  See the **Demo** above for a more
detailed example.

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
