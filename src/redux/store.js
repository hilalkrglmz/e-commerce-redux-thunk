import { applyMiddleware, combineReducers, createStore } from "redux";
import basketReducer from "./reducers/BasketReducer";
import productReducer from "./reducers/ProductReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({productReducer,basketReducer})

export default createStore(rootReducer,applyMiddleware(thunk))
