import React from 'react'
import {useParams} from'react-router-dom';
import { productstore } from "../store/ProductApi";
import { useEffect } from "react";
import { toJS } from "mobx";


function ProductDetail() {
    const isLoading = productstore.loading;
  const isError = productstore.error;
  const productdata = toJS(productstore.data);
console.log("AEDFED",productdata);
    const {ID} = useParams();
    console.log(ID);

    useEffect(() => {
        productstore.fetchProductData(['product', ID]);
      }, []);

      if (isLoading) {
        return <div style={{ color: "red" }}> loading...</div>;
      }
    
      if (isError) {
        return <div> Error</div>;
      }
      console.log("ALOOOO",ID);
  return (
    <div>{ID}</div>
  )
}

export default ProductDetail