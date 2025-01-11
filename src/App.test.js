import React from 'react';
import App from './App';
import { render, within, fireEvent, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

const testIds = {
};


const renderApp = () => render(<App />);

beforeEach(() => {
});

afterEach(() => {
  cleanup();
});

test('Initial test', () => {
  renderApp();
});
