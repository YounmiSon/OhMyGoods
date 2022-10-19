import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loginReducer from "../reducers/loginReducer";
import boardReducer from "../reducers/boardReducer";
import cartReducer from "../reducers/cartReducer";
const rootReducer = combineReducers({ loginReducer, boardReducer, cartReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
