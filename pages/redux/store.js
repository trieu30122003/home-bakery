import { createStore, combineReducers } from 'redux';
import { siteReducer } from './reducers';

const rootReducer = combineReducers({
  site: siteReducer,
});

const store = createStore(rootReducer);

export default store;