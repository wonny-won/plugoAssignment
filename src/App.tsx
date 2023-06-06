import Layout from "commons/components/layout/layout";
import MyCart from "pages/mycart/mycart";
import ProductDetail from "pages/product/detail/productDetail";
import ProductList from "pages/product/list/productList";
import NewProduct from "pages/product/new/newProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return(
    <>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/product/new" element={<NewProduct/>}/>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/product/detail/:id" element={<ProductDetail/>}/>
        <Route path="/mycart" element={<MyCart/>}/>
      </Routes>
      </Layout>
	  </BrowserRouter>

    </>
  )
}

export default App;
