import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducer } from './reducers'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    config: reducer,
  }),
  compose(
    applyMiddleware(thunk),
    devToolsEnhancer({}),
  ),
)

export { store }
