import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import { L_F_gallery } from "../localForage/localForage";
import reducer_Gallery from "./gallery/reduce_Gallery";


const allReducers = combineReducers({
    reducer_Gallery: reducer_Gallery,
})

const store = createStore(allReducers,applyMiddleware(thunkMiddleware))
store.subscribe(() => L_F_gallery.setItem(store.getState().reducer_Gallery))
 
export default store