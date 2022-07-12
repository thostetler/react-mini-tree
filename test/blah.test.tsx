import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MiniTree } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MiniTree data={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
