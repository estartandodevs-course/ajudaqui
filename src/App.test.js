import React from 'react';
import ReactDOM from 'react-dom';
import { act } from '@testing-library/react';
import App from '.';

it('renders without crashing', async () => {
  act(() => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
