import { ActionTypes } from "../constants/action-types";
import fakeStoreApi from "../../apis/fakeStoreApi";

export const fetchproducts = () => async (dispatch) => {
    const response = await fakeStoreApi.get("/products");
    const productsWithDiscount = response.data.map((product) => {
        const discountPercentage = calculateDiscountPercentage(product.price, product.rating);
        return { ...product, discount: discountPercentage };
    });

    dispatch({
        type: ActionTypes.FETCH_PRODUCTS,
        payload: productsWithDiscount,
    });
};

const calculateDiscountPercentage = (price, rating) => {
    if (rating > 4.5) {
        return Math.floor((price * 0.1) / price * 100);
    } else if (rating > 4) {
        return Math.floor((price * 0.05) / price * 100);
    } else {
        return 0;
    }
};

export const fetchproduct = (id) => async (dispatch) => {
    const response = await fakeStoreApi.get(`/products/${id}`);

    dispatch({
        type: ActionTypes.SELECTED_PRODUCT,
        payload: response.data,
    });
};

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProducts = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products,
    };
};

export const removeselectedProducts = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};