import { productstore } from "../store/ProductApi";
import { toJS } from "mobx";
import { Table, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const ProductTable = observer(() => {
  const isLoading = productstore.loading;
  const isError = productstore.error;
  const productdata = toJS(productstore.data);

  useEffect(() => {
    productstore.fetchProductData();
  }, []);

  if (isLoading) {
    return <div style={{ color: "red" }}> loading...</div>;
  }

  if (isError) {
    return <div> Error</div>;
  }

  console.log(toJS(productdata));

  const columns = [
    {
      title: "Ürün Adı",
      dataIndex: "Ad",
      key: "Ad",
    },
    {
      title: "Ürün Açıklaması",
      dataIndex: "Aciklama",
      key: "Aciklama",
    },
    {
      title: "Ürün Fotoğrafı",
      dataIndex: "ResimUrl",
      key: "ResimUrl",
    },
    {
      title: "Fiyat",
      dataIndex: "Fiyat",
      key: "Fiyat",
    },
    {
      title: "Stok Bilgisi",
      dataIndex: "StokAdedi",
      key: "StokAdedi",
    },
    {
      title: "Kategori",
      dataIndex: "KategoriAd",
      key: "KategoriAd",
    },
    {
      title: "Ürün Durumu",
      dataIndex: "UrunDurumuID",
      key: "UrunDurumuID",
    },
    {
      title: "Aksiyon",
      key: "action",
      render: (text, record) => (
        <div>
          <Link to={`/product/${record.ID}`}>Düzenle</Link>
          <Popconfirm
            title="Silinsin mi?"
            onConfirm={() => {
              productstore.deleteProductData(record.ID);
            }}
            onCancel={() => {
              console.log("İşlem iptal edildi.");
            }}
            okText="Evet"
            cancelText="İptal"
            placement="left"
          >
            <a href="/#" style={{ marginLeft: "5px" }}>
              Sil
            </a>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1 style={{ marginLeft: "40%" }}>Ürün Tablosu</h1>
      <Table
        dataSource={productdata}
        columns={columns}
        rowKey="productdata.ID"
      />
    </div>
  );
});

export default ProductTable;
