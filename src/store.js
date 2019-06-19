import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './RootReducer'
import { apiMiddleware } from 'redux-api-middleware'
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, apiMiddleware))

export default store
