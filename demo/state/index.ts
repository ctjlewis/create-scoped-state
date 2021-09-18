import { createScopedState } from "../../dist/createScopedState";

export const [CountProvider, useCount] = createScopedState({ count: 0 });