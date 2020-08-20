import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import imageReducer from './image-reducer';
import modalReducer from "./modal-reducer";
import monthImageReducer from "./month-image-reducer";

let reducers = combineReducers({
    imageReducer,
    modalReducer,
    monthImageReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;