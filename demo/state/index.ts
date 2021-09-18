import { createScopedState } from "../../dist/createScopedState";

export const [CountProvider, useCount] = createScopedState({
  initialState: {
    count: 0,
  },
});