# Create Scoped State

### Demo

https://create-stateful-context.vercel.app/

[![Deploy with
Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fctjlewis%2Fcreate-stateful-context&demo-title=Stateful%20Context%20Demo&demo-description=A%20demo%20showing%20multiple%20scoped%20states.&demo-url=https%3A%2F%2Fcreate-stateful-context.vercel.app%2F&demo-image=https%3A%2F%2Fi.imgur.com%2FHJPUBiW.png)

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
    <div className="grid grid-rows-2 items-center">
      <p>Count: <strong>{count}</strong></p>
      <button
        className="m-auto rounded-lg p-2 border-2"
        onClick={() => updateState({ count: count + 1 })}
      >
        Press Me
      </button>
    </div>
  );
}

const DemoContext: FC = ({ children }) => {
  return (
    /**
     * The `useCount()` state is scoped to its closest provider parent.
     */
    <CountProvider>
      <CountView />
      {children}
    </CountProvider>
  );
}
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