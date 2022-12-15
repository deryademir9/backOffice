import React from "react";
import {  Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Layout } from "antd";

import { Dropdown, Space } from "antd";

const items = [

  {
    label: <a href="https://www.antgroup.com">Çıkış</a>,
    key: "0",
  },
];


function MainHeader() {
  return (
    <nav style={{padding: '10px' , marginBottom:'5px',display:'flex', justifyContent:'space-between', borderBottom:'blur 3px #c4c1e0', lineHeigth:'1px'}}>
      <div className="left" style={{display:'flex'}}>
        <ul style={{display:'flex' }}>
          <li style={{ marginLeft:'80px' }}
            
          >
            <Link to="/">Siparişler</Link>
          </li>
          <li style={{ marginLeft:'150px' }}
          
          >
            <Link to="/category">Kategori</Link>
          </li>
          <li style={{ marginLeft:'150px' }}
            
          >
            <Link to="/product">Ürün</Link>
          </li>
        </ul>
      </div>

      <div className="right" style={{display:'flex', marginRight:'20px', justifyContent:'center' , alignItems:'center'}}>
        <Dropdown
         
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space >
              <UserOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </nav>
  );
}

export default MainHeader;

// <div className='right'><Header
//         className="site-layout-background"
//         style={{
//            backgroundColor: '#5e63b6',
//           padding: 0,
//         }} >
//       <div  style={{ marginRight:'10px ' , float: 'right'}}> <Dropdown
//      style={{float: 'right'}}
//       menu={{
//           items,
//         }}
//         trigger={['click']}
//       >
//         <a  onClick={(e) => e.preventDefault()  }>
//           <Space  style={{  marginRight: '30px',float: 'right'}}>

//           <UserOutlined />
//           </Space>
//         </a>
//       </Dropdown> </div>

//       </Header>
