import { createStatefulContext } from "../../dist/createStatefulContext";

export const [CountProvider, useCount] = createStatefulContext({
  initialState: {
    count: 0,
  },
});