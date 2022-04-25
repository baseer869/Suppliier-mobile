import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';

export const configStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk));
  return store;
};
