import React from 'react'
import {categorystore, deletecategorystore} from '../store/CategoryApi';
import { toJS } from "mobx";
import { useEffect } from 'react';
import {Table ,  Popconfirm} from 'antd';
import { observer } from 'mobx-react-lite';
import { Link } from "react-router-dom";


function CategoryTable() {
  const isLoading= categorystore.loading ;
  const isError= categorystore.error;
  const categorydata= toJS(categorystore.data);
 
  useEffect(()=>{categorystore.fetchCategoryData()},[])
 
  if (isLoading) {
   return <div style={{color:'red'}}> loading...</div>
  }
 
 
  if (isError) {
   return <div> Error</div>
  }
 
  console.log(toJS(categorydata));

  const columns=[{
    title: "Kategori Adı",
    dataIndex: "Ad",
    key: "Ad",
  },
  {
    title: "Aksiyon",
    key: "action",
    render: (text, record) => (
      <div>
        <Link to={`/category/${record.ID}`}>Düzenle</Link>
        <Popconfirm 
        title="Silinsin mi?"
        onConfirm={()=>{ deletecategorystore.deleteCategoryData(record.ID)
          
        }}
        onCancel={()=>{console.log("İşlem iptal edildi.")}}
        okText="Evet"
        cancelText="İptal"
        placement="left"><a href="/#" style={{marginLeft:'5px'}}>Sil</a></Popconfirm>
      </div>
    ),
  },]

  return (
<div>
      <h1 style={{marginLeft:'40%'}}>Kategori Tablosu</h1>
      <Table dataSource={categorydata} columns={columns} ></Table>
    </div>  )
}

export default observer(CategoryTable)