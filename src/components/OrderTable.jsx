import React from 'react'
import {orderstore} from '../store/OrderApi';
import { toJS } from "mobx";
import { useEffect } from 'react';
import {Table} from 'antd';
import { observer } from 'mobx-react-lite';

function OrderTable() {
 const isLoading= orderstore.loading ;
 const isError= orderstore.error;
 const orderdata= orderstore.data;

 useEffect(()=>{orderstore.fetchOrderData()},[])

 if (isLoading) {
  return <div style={{color:'red'}}> loading...</div>
 }


 if (isError) {
  return <div> Error</div>
 }

 console.log(toJS(orderdata));

 const columns=[{
  title: "Siparis Tarihi",
  dataIndex: "SiparisTarihi",
  key: "SiparisTarihi",

},
{
  title: "TeslimTarihi",
  dataIndex: "TeslimTarihi",
  key: "TeslimTarihi",

},
{
  title: "SiparisDurum",
  dataIndex:"SiparisDurumID",
  key:"SiparisDurumID",

},
{
  title: "MusteriNotu",
  dataIndex: "MusteriNotu",
  key: "MusteriNotu",

},
{
  title: "FirmaNotu",
  dataIndex: "FirmaNotu",
  key: "FirmaNotu",

},
{
  title: "Il",
  dataIndex: "IlID",
  key: "IlID",

},
{
  title: "AcikAdres",
  dataIndex: "AcikAdres",
  key: "AcikAdres",

},
{
  title: "Telefon",
  dataIndex: "Telefon",
  key: "Telefon",

},
{
  title: "Ad",
  dataIndex: "Ad",
  key: "Ad",

},
{
  title: "Soyad",
  dataIndex: "Soyad",
  key: "Soyad",

},
{
  title: "ToplamFiyat",
  dataIndex: "ToplamFiyat",
  key: "ToplamFiyat",

},]
 return (
    <div>
      <h1 style={{marginLeft:'40%'}}>Sipariş Tablosu</h1>
      <Table dataSource={orderdata} columns={columns} rowKey="orderdata.ID" ></Table>
    </div>
  )
}

export default observer(OrderTable)