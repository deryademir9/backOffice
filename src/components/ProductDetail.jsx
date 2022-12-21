import React from "react";
import { useParams } from "react-router-dom";
import { productstore } from "../store/ProductApi";
import { useEffect } from "react";
import { toJS } from "mobx";
import { Formik } from "formik";
import { Button, Form, Input } from "antd";

function ProductDetail() {
  const isLoading = productstore.loading;
  const isError = productstore.error;
  const productdata = toJS(productstore.data);
  const { ID } = useParams();
  console.log(ID);
  console.log("productdata", productdata);
  console.log("aewrsa",productdata.KategoriAd);

  useEffect(() => {
    productstore.detailProductData({ ID });
  }, []);

  // useEffect(() => {
  //   productstore.updateProductData();
  // }, []);

  if (isLoading) {
    return <div style={{ color: "red" }}> loading...</div>;
  }

  if (isError) {
    return <div> Error</div>;
  }
  // console.log("ALOOOO",ID);

  // const handleSubmit = () => {
  //   console.log("submitted");
  // };
  const handleSubmit = async (values, bag) => {
    console.log("Success:");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
        }) => (
          <div>
            <div>
              {/* <form onSubmit={handleSubmit}> */}
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 8,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={handleSubmit}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Ad"
                    name="{productdata.Ad}"
                    rules={[
                      {
                        required: true,
                        message: "Boş bırakılamaz.",
                      },
                    ]}
                  >
                    <Input
                    defaultValue={values.Ad}
                      name={productdata.Ad}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Ad}
                      disabled={isSubmitting}
                      
                    />
                  </Form.Item>

                  <Form.Item
                    label="Aciklama"
                    name="productdata.Aciklama"
                    rules={[
                      {
                        required: true,
                        message: "Boş bırakılamaz.",
                      },
                    ]}
                  >
                    <Input  name="Aciklama"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Ad}
                      disabled={isSubmitting}/>
                  </Form.Item>
                  <Form.Item
                    label="ResimUrl"
                    name="productdata.ResimUrl"
                    rules={[
                      {
                        required: true,
                        message: "Boş bırakılamaz.",
                      },
                    ]}
                  >
                    <Input  name="ResimUrl"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Ad}
                      disabled={isSubmitting}/>
                  </Form.Item>
                  <Form.Item
                    label="Fiyat"
                    name="productdata.Fiyat"
                    rules={[
                      {
                        required: true,
                        message: "Boş bırakılamaz.",
                      },
                    ]}
                  >
                    <Input  
                    name="Fiyat"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Ad}
                      disabled={isSubmitting}/>
                  </Form.Item>
                  <Form.Item
                    label="StokAdedi"
                    name="productdata.StokAdedi"
                    rules={[
                      {
                        required: true,
                        message: "Boş bırakılamaz.",
                      },
                    ]}
                  >
                    <Input  name="StokAdedi"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Ad}
                      disabled={isSubmitting}/>
                  </Form.Item>
                  <Form.Item
                    label="KategoriID"
                    name="productdata.KategoriID"
                    rules={[
                      {
                        required: true,
                        message: "Boş bırakılamaz.",
                      },
                    ]}
                  >
                    <Input  name="KategoriID"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Ad}
                      disabled={isSubmitting}/>
                  </Form.Item>
                  <Form.Item
                    label="UrunDurumuID"
                    name="productdata.UrunDurumuID"
                    rules={[
                      {
                        required: true,
                        message: "Boş bırakılamaz.",
                      },
                    ]}
                  >
                    <Input  name="UrunDurumuID"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Ad}
                      disabled={isSubmitting}/>
                  </Form.Item>

                  <Form.Item
                    label="KategoriAd"
                    name="productdata.KategoriAd"
                    rules={[
                      {
                        required: true,
                        message: "Boş bırakılamaz.",
                      },
                    ]}
                  >
                    <Input name="KategoriAd"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.KategoriAd}
                      disabled={isSubmitting} />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit" >
                      Update
                    </Button>
                  </Form.Item>
                </Form>
             {/* / </form> */}
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default ProductDetail;
