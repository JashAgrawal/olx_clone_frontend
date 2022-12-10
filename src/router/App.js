import "../common.css";
import Navbar from "../Components/navbar";
import Products from "../Pages/Products";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../Pages/AddProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/add-products" element={<AddProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
