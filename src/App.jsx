import React from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import OrderTable from "./components/OrderTable";
import CategoryTable from "./components/CategoryTable";
import ProductTable from "./components/ProductTable";
import ProductDetail from "./components/ProductDetail";
import "./App.css";
// import CategoryUpdate from "./components/CategoryUpdate";

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <MainHeader />

      <>
        <Content>
          <Routes>
            <Route index element={<OrderTable />} />
            <Route path="/category" element={<CategoryTable />} />
            {/* <Route path="/category/:ID" element={<CategoryUpdate />} /> */}
            <Route exact path="/product" element={<ProductTable />} />
            <Route path="/product/:ID" element={<ProductDetail />} />
          </Routes>{" "}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          ©2022 <i>Pinky Bakery</i>
        </Footer>
      </>
    </Layout>
  );
};

export default App;
