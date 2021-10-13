import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userDetailsReducer } from "../reducers/userReducer";

const initialState = {};

const reducers = combineReducers({
  userDetails: userDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
