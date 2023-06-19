import { createStore, combineReducers } from 'redux';
import reducerForCategory, { createActionForCategory } from './categories/categories';
import reducer, { createActionForBookToAdd } from './books/books';

const rootReducer = combineReducers({ books: reducer, categories: reducerForCategory });

const store = createStore(rootReducer);

(createActionForCategory());
(createActionForBookToAdd());

export default store;
