import axios from "axios";
import { ActionTypes } from "../constants/action-types"
import fakeStoreApi from "../../apis/fakeStoreApi";
export const fetchproducts =  () =>  async (dispatch) => {
        const response = await fakeStoreApi.get("/products");
        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
    };
export const fetchproduct =  (id) =>  async (dispatch) => {
        const response = await fakeStoreApi.get(`/products/${id}`);
        dispatch({type:ActionTypes.SELECTED_PRODUCT,payload:response.data})
    };

export const setProducts = (products) => {
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    };
};
export const selectedProducts = (products) => {
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:products
    };
};
export const removeselectedProducts = () => {
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        // payload:products
    };
};