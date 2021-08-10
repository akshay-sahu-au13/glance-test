// Must be the first import
if (process.env.NODE_ENV === 'development') {
  // Must use require here as import statements are only allowed
  // to exist at the top of a file.
  require('preact/debug');
}

import { createContext, h, render } from 'preact';

import App from './app';
import { getCategorySubscriptions } from './scripts/glanceJsBridge';
import { glob } from 'goober';
import globals from './styles/globals';

export const CatgData = createContext();
const data = JSON.parse(getCategorySubscriptions());
console.log("Data: ", data)

const loadApp = () => {
  const element = document.getElementById('root');
  glob`${globals}`;
  render(<CatgData.Provider value={data}> <App /> </CatgData.Provider>
    , element);
};

document.addEventListener('DOMContentLoaded', () => {
  loadApp();
});
