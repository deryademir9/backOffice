import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productstore } from "../store/ProductApi";
import { useEffect } from "react";
import { toJS } from "mobx";
import { Formik } from "formik";
import { Button, Form, Input } from "antd";
import { observer } from "mobx-react-lite";

const ProductDetail = observer(() => {
  const isLoading = productstore.loading;
  const isError = productstore.error;
  const productdata = toJS(productstore.data);
  const { ID } = useParams();
	const [form] = Form.useForm();

  const [initialValuesState, setInitialValuesState] = useState(true)

  console.log(ID);
  console.log("productdata", productdata);
  console.log("aewrsa", productdata);

  useEffect(() => {
    productstore.detailProductData({ ID });
  }, []);

  useEffect(() => {
    if(productdata && initialValuesState) {
      form.setFieldsValue({
      ID: productdata.ID || '',
      Ad: productdata.Ad,
      Aciklama: productdata.Aciklama,
      ResimUrl: productdata.ResimUrl,
      Fiyat: productdata.Fiyat,
      StokAdedi: productdata.StokAdedi,
      KategoriID: productdata.KategoriID,
      UrunDurumuID: productdata.UrunDurumuID,
      KategoriAd: productdata.KategoriAd,
    })
    setInitialValuesState(false)
    }
  
  }, [productdata, form])

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
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h2 style={{ marginLeft: "40%" }}>ÜRÜN DETAYI</h2>

  
          <div>
            <div>
              {/* <form onSubmit={handleSubmit}> */}
              <Form
                form={form}
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 8,
                }}
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Ad"
                  name="Ad"
                  rules={[
                    {
                      required: true,
                      message: "Boş bırakılamaz.",
                    },
                  ]}
            
                >
                  <Input
                    name="Ad"
                  
                  />
                </Form.Item>
              
                <Form.Item
                  label="Aciklama"
                  name="Aciklama"
                  rules={[
                    {
                      required: true,
                      message: "Boş bırakılamaz.",
                    },
                  ]}
                >
                  <Input
                    name="Aciklama"
                   
                  />
                </Form.Item>
                <Form.Item
                  label="ResimUrl"
                  name="ResimUrl"
                  rules={[
                    {
                      required: true,
                      message: "Boş bırakılamaz.",
                    },
                  ]}
                >
                  <Input
                    name="ResimUrl"
                   
                  />
                </Form.Item>
                <Form.Item
                  label="Fiyat"
                  name="Fiyat"
                  rules={[
                    {
                      required: true,
                      message: "Boş bırakılamaz.",
                    },
                  ]}
                >
                  <Input
                    name="Fiyat"
                   
                  />
                </Form.Item>
                <Form.Item
                  label="StokAdedi"
                  name="StokAdedi"
                  rules={[
                    {
                      required: true,
                      message: "Boş bırakılamaz.",
                    },
                  ]}
                >
                  <Input
                    name="StokAdedi"
                   
                  />
                </Form.Item>
                <Form.Item
                  label="KategoriID"
                  name='KategoriID'
                  rules={[
                    {
                      required: true,
                      message: "Boş bırakılamaz.",
                    },
                  ]}
                >
                  <Input
                    name="KategoriID"
                    
                  />
                </Form.Item>
                <Form.Item
                  label="UrunDurumuID"
                  name="UrunDurumuID"
                  rules={[
                    {
                      required: true,
                      message: "Boş bırakılamaz.",
                    },
                  ]}
                >
                  <Input
                    name="UrunDurumuID"
                    
                  />
                </Form.Item>

                <Form.Item
                  label="KategoriAd"
                  name="KategoriAd"
                  rules={[
                    {
                      required: true,
                      message: "Boş bırakılamaz.",
                    },
                  ]}
                >
                  <Input
                    name="KategoriAd"
                    
                  />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                </Form.Item>
              </Form>
              {/* / </form> */}
            </div>
          </div>
      
    </div>
  );
})

export default ProductDetail;
