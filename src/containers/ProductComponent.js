import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const searchTerm = useSelector((state) => state.reducer.searchTerm);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredProducts.length === 0) {
        return <div>No Product Found</div>;
    }

    return (
        <>
            {filteredProducts.map(({ id, image, title, price, category, discount }) => (
                <div className="four wide column" key={id}>
                    <Link to={`/product/${id}`}>
                        <div className="ui link cards">
                            <div className="card">
                                <div className="image">
                                    <img src={image} alt={title} />
                                    {discount > 0 && (
                                        <div className="ui red label discount-badge">
                                            {discount}% off
                                        </div>
                                    )}
                                </div>
                                <div className="content">
                                    <div className="header">{title}</div>
                                    <div className="meta price">
                                        {discount > 0 ? (
                                            <span>
                                                <strike>$ {price}</strike>
                                                $ {price - (price * discount / 100)}
                                            </span>
                                        ) : (
                                            <span>$ {price}</span>
                                        )}
                                    </div>
                                    <div className="meta">{category}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
};

export default ProductComponent