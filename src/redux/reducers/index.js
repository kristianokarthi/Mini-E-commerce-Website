import {combineReducers} from 'redux'
import { productReducer,selectedProductReducer,reducerfunctiom } from './productReducer'

const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer,
    reducer:reducerfunctiom
});

export default reducers