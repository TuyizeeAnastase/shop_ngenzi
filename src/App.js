import "./App.css";
import HomePage from "./components/home/HomePage";
import { BrowserRouter, Routes, Route,useLocation  } from "react-router-dom";
import ItemDetail from "./components/itemDetail/ItemDetail";
import Cart from "./components/cart/Cart";
import Orders from "./components/orders/Orders";
import Checkout from "./components/checkout/Checkout";
import AboutUs from "./components/about/About";
import Dashboard from "./components/admin/overview/DashboardOverview";
import Layout from './Layout';
import ProductsList from "./components/admin/products/ProductsList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="dashboard/products" element={<ProductsList/>}/>
        </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
