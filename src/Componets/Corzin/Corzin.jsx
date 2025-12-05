import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../CartContext.jsx";
import { Link } from "react-router-dom";
import stor from "../../assets/магазин.png";
import scss from "./Corzin.module.scss";

function Corzin() {
  const [products, setProducts] = useState([]);
  const { cart, addProduct, removeProduct, deleteOne, clearCart } = useCart();

  useEffect(() => {
    async function getProducts() {
      const res = await axios("https://fakestoreapi.com/products");
      setProducts(res.data);
    }
    getProducts();
  }, []);

  const items = products.filter((el) => cart[el.id]);
  const total = items.reduce((acc, el) => acc + el.price * cart[el.id], 0);

  if (products.length === 0) return <p>Загрузка...</p>;
  if (items.length === 0)
    return (
      <div className={scss.Logo}>
        <div>
          <h1>Корзина пустая</h1>
          <Link className={scss.magaz} to="/">
            <img src={stor} alt="" />
            <p>вернутся в магазин</p>
          </Link>
        </div>
      </div>
    );

  return (
    <section className={scss.Corzin}>
      <div className={scss.top}>
        <Link className={scss.magaz_2} to="/">
          Корзина
        </Link>
        <h1>Ваши товары</h1>
        <Link className={scss.magaz} to="/">
          <img src={stor} alt="" />
          <p>вернутся в магазин</p>
        </Link>
      </div>
      <div className={scss.container}>
        {items.map((el) => (
          <div className={scss.contai_cart} key={el.id}>
            <div className={scss.contai_tovar}>
              <img
                className={scss.image}
                src={el.image}
                width={100}
                alt={el.title}
              />
              <h3>{el.title}</h3>
            </div>
            <div className={scss.button_div}>
              <p>Цена: {el.price}$</p>

              <p>{cart[el.id]}</p>
              <div className={scss.contai_add_remove}>
                <button onClick={() => removeProduct(el.id)}>-</button>
                <button onClick={() => addProduct(el.id)}>+</button>
              </div>
              <button onClick={() => deleteOne(el.id)}>Удалить товар</button>

              <p>Сумма: {(el.price * cart[el.id]).toFixed(2)}$</p>
            </div>
          </div>
        ))}
      </div>

      <div className={scss.top}>
        <Link className={scss.magaz_2} to="/">
          Корзина
        </Link>
        <div className={scss.Foter}>
          <h2>Итого: {total.toFixed(2)}$</h2>
          <button onClick={clearCart}>Очистить корзину</button>
        </div>
        <Link className={scss.magaz} to="/">
          <img src={stor} alt="" />
          <p>вернутся в магазин</p>
        </Link>
      </div>
    </section>
  );
}

export default Corzin;
