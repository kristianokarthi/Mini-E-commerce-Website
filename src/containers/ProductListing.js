import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchproducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const productList = useSelector((state) => state.allProducts?.products || []);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchproducts());
    }, [dispatch]);

    const handleSearchChange = (e) => {
        dispatch({
            type: "SET_SEARCH_TERM",
            payload: e.target.value,
        });

        console.log("value --->", e.target.value);
    };

    const roundedProducts = productList.map((product) => ({
        ...product,
        price: Number(product.price.toFixed(2)),
    }));

    console.log(roundedProducts);

    return (
        <>
            <br />
            <br />

            <div
                className="ui action input"
                style={{ margin: "20px 0" }}
            >
                <input
                    type="text"
                    placeholder="Search products..."
                    onChange={handleSearchChange}
                />

                <button className="ui button">
                    Search
                </button>
            </div>

            <div className="ui grid">
                <ProductComponent products={roundedProducts} />
            </div>
        </>
    );
};

export default ProductListing