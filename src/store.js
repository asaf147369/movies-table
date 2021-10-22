import { createStore } from 'redux';
import movies from './data';

const reducer = (state) => {
  return state;
};

const initialState = {
  movies
};

export const store = createStore(reducer, initialState);