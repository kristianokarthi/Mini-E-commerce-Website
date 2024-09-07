import React,{ useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts,fetchproducts } from "../redux/actions/productActions"
import axios from "axios";
const ProductListing = () =>{
    const products = useSelector((state) => state);
    const dispatch = useDispatch()
    // const fetchproducts = async () => {
    //     const response = await axios.get("https://fakestoreapi.com/products").catch((err) =>{
    //         console.log("err",err)
    //     });
    //     console.log(response.data)
    //     dispatch(setProducts(response.data))
    // }
    useEffect(() =>{
        dispatch(fetchproducts())
    },[])
    const handleSearchChange = (e) => {
        dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value });
        console.log("value--->",e.target.value)
      };
    // console.log(products)
    return(
        <>
        <br></br>
        <br></br>
        <div className="ui action input" style={{ margin: '20px 0' }}>
            <input
                type="text"
                placeholder="Search products..."
            onChange={handleSearchChange}
            />
            <button className="ui button">Search</button>
        </div>
        <div className="ui grid">
           <ProductComponent />
        </div>
        </>
    )
}

export default ProductListing