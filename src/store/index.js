import { createStore } from 'redux';
import reducer from './reducer';
// 使用中間件Redux-thunk 引入
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// const store = createStore(reducer);

// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// =============== 使用中間件 Redux-thunk  ===============
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
const store = createStore(reducer, enhancer);

export default store;