import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Heder from "./Componets/Heder/Heder";
import Corzin from "./Componets/Corzin/Corzin";
import Cart from "./Componets/Cart/Cart";
import Foter from "./Componets/Foter/Foter";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <Heder/>
        <Routes>
          <Route path="/" element={<Cart/>} />
          <Route path="/Corzin" element={<Corzin />} />
        </Routes>
        <Foter/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
