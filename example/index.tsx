import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { MiniTree } from '../.';

const App = () => {
  return (
    <div>
      <MiniTree data={[{ id: '1', label: 'df' }]} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
