import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk'

//thunk es un middleware que nos ayuda a trabajar con una sincronia
export const store = createStore(reducer, applyMiddleware(thunk))