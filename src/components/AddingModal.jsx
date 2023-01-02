import { Button, Modal, Input, Form } from "antd";
import React, { useState } from "react";

function AddingModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();


  const handleSubmit = async (values, bag) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (values) => {
    setIsModalOpen(false);
    console.log("gönderildi", values);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button
        style={{ marginBottom: "10px" }}
        type="primary"
        onClick={showModal}
      >
        Ürün Ekle
      </Button>
      <Modal
        title="Ürün Ekle"
        open={isModalOpen}
        onOk={handleOk} //buraya api isteği gelcek
        onCancel={handleCancel} // iptal etcek
        okText={"Ürün Ekle"}
        cancelText={"İptal"}
      >
        {/* <p>Ürün Adı</p>
        <Input></Input>
        <p>Ürün Açıklaması</p>
        <Input></Input>
        <p>Ürün Fotoğrafı</p>
        <Input></Input>
        <p>Ürün Fiyat</p>
        <Input></Input>
        <p>Ürün Stok Bilgisi</p>
        <Input></Input>
        <p>Ürün Kategorisi</p>
        <Input></Input>
        <p>Ürün Durumu</p>
        <Input></Input> */}

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
            <Input name="Ad" />
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
            <Input name="Aciklama" />
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
            <Input name="ResimUrl" />
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
            <Input name="Fiyat" />
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
            <Input name="StokAdedi" />
          </Form.Item>
          <Form.Item
            label="KategoriID"
            name="KategoriID"
            rules={[
              {
                required: true,
                message: "Boş bırakılamaz.",
              },
            ]}
          >
            <Input name="KategoriID" />
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
            <Input name="UrunDurumuID" />
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
            <Input name="KategoriAd" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          ></Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AddingModal;
