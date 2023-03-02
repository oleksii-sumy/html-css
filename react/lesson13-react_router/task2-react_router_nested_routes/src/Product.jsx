import React from "react";
// import {useParams} from 'react-router-dom';

function Product ({match}) {
  // const {productId} = useParams();
  return <div className="product">
    {match.params.productId}
    </div>;
}

export default Product;