import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Heder from "./Componets/Heder/Heder";
import Corzin from "./Componets/Corzin/Corzin";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Heder />} />
          <Route path="/Corzin" element={<Corzin />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
