import React from 'react'
import {categorystore} from '../store/CategoryApi';
import { toJS } from "mobx";
import { useEffect } from 'react';
import {Table} from 'antd';
import { observer } from 'mobx-react-lite';

function CategoryTable() {
  const isLoading= categorystore.loading ;
  const isError= categorystore.error;
  const categorydata= categorystore.data;
 
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
  },]

  return (
<div>
      <h1 style={{marginLeft:'40%'}}>Kategori Tablosu</h1>
      <Table dataSource={categorydata} columns={columns} ></Table>
    </div>  )
}

export default observer(CategoryTable)