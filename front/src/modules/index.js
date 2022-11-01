import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import board from "./board";
import cart from "./cart";
import review from "./review";
import user from "./user";

const rootReducer = combineReducers({ user, board, cart, review });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
