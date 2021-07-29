// Must be the first import
if (process.env.NODE_ENV === 'development') {
  // Must use require here as import statements are only allowed
  // to exist at the top of a file.
  require('preact/debug');
}
import { glob } from 'goober';
import { h, render } from 'preact';
import App from './app';
import globals from './styles/globals';

const loadApp = () => {
  const element = document.getElementById('root');
  glob`${globals}`;
  render(<App />, element);
};

document.addEventListener('DOMContentLoaded', () => {
  loadApp();
});
