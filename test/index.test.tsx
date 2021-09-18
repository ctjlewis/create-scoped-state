/**
 * @jest-environment jsdom
 */
// @ts-ignore
import * as ReactDOM from 'react-dom';
import { createStatefulContext } from '../dist';

describe('Thing', () => {
  it('renders without crashing', () => {
    const initialState = { value: 0 };
    const [StateProvider] = createStatefulContext({ initialState });

    const div = document.createElement('div');
    ReactDOM.render(<StateProvider />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
