# Create Stateful Context

Create a `StatefulProvider` and a `useStatefulContext` hook with
`createStatefulContext`. The context will contain an `updateState` hook, which
can be used to trigger a new render: 
```tsx
// in state.ts
// create, export StatefulProvider and useStatefulContext hook
const [StatefulProvider, useStatefulContext] = createStatefulContext({
  initialState: { count: 0 },
  updateState: async () => ({
    count: await getCounterValue(),
  }),
});
export { StatefulProvider, useStatefulContext };

```

The `useStatefulContext()` returns the context for the nearest
`StatefulProvider` in the render tree.
```tsx
// in App.tsx
// Provide the stateful context to every component under the StatefulProvider
import { StatefulProvider } from "../state.ts";
const App = () => (
  <StatefulProvider>
    <MyComponent />
  </StatefulProvider>
);
```

The context can be consumed trivially throughout the application (reading
context from the nearest `StatefulProvider` parent):

```tsx
// in components.tsx
// import the hook and consume the stateful context
import { useStatefulContext } from "../state.ts";
const MyComponent = () => {
  // load the stateful context from AsyncProvider
  const { count, updateState } = useStatefulContext();
  // ...
  // can trigger new render like so
  updateState({ count: count + 1 })
};
```