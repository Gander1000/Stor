import scss from "./Cart.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import korzina from "../../assets/korzina.png";
import { useCart } from "../../CartContext";

function Cart() {
  const [products, setProducts] = useState([]);
  const { cart, addProduct, removeProduct, deleteOne, clearCart } = useCart();

  async function getProducts() {
    const res = await axios("https://fakestoreapi.com/products");
    setProducts(res.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const total = products.reduce((acc, el) => {
    const count = cart[el.id] || 0;
    return acc + el.price * count;
  }, 0);

  return (
    <section className={scss.Cart}>
      {products.slice(0, 20).map((el) => (
        <div key={el.id} className={scss.Cart}>
          <div className={scss.contai_div}>
            <img src={el.image} alt={el.title} width={150} />
          </div>
          <h1>{el.rating.rate}</h1>
          <h2>{el.rating.count}</h2>
          <h3>{el.price}$</h3>
          <button onClick={() => addProduct(el.id)}>Добавить +</button>
          <p>{cart[el.id] || 0}</p>
          <button onClick={() => removeProduct(el.id)}>Убавит-</button>
          <button onClick={() => deleteOne(el.id)}>Удалить</button>
          <p>{(el.price * (cart[el.id] || 0)).toFixed(2)}$</p>
        </div>
      ))}

      <div className={scss.foter}>
        <h4>Итого: {total.toFixed(2)}$</h4>
        <button onClick={clearCart}>Очистить корзину</button>
      </div>
    </section>
  );
}

export default Cart;
