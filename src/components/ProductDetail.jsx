import React from "react";
import { useParams } from "react-router-dom";
import { productstore } from "../store/ProductApi";
import { useEffect } from "react";
import { toJS } from "mobx";
import { Formik } from "formik";
// import { Button, Checkbox, Form, Input } from 'antd';


function ProductDetail() {
  const isLoading = productstore.loading;
  const isError = productstore.error;
  const productdata = toJS(productstore.data);
  console.log("AEDFED", productdata);
  const { ID } = useParams();
  console.log(ID);

  useEffect(() => {
    productstore.detailProductData({ ID });
  }, []);

  if (isLoading) {
    return <div style={{ color: "red" }}> loading...</div>;
  }

  if (isError) {
    return <div> Error</div>;
  }
  // console.log("ALOOOO",ID);

  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <div>
      <h2 style={{ marginLeft: "40%" }}>ÜRÜN DETAYI</h2>

      <Formik
        initialValues={{
          ID: productdata.ID,

          Ad: productdata.Ad,

          Aciklama: productdata.Aciklama,

          ResimUrl: productdata.ResimUrl,
          Fiyat: productdata.Fiyat,

          StokAdedi: productdata.StokAdedi,

          KategoriID: productdata.KategoriID,

          UrunDurumuID: productdata.UrunDurumuID,

          KategoriAd: productdata.KategoriAd,
        }}
        //validationSchema
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          isSubmitting,
        }) => (<div>
        
            <div>
              <form></form>
            </div>
        
        </div>)}
      </Formik>
    </div>
  );
}

export default ProductDetail;
