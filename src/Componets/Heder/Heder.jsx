import { useEffect, useRef, useState } from "react";
import ebay from "../../assets/ebay.png";
import луна from "../../assets/луна.png";
import солнце from "../../assets/солнце.png";
import scss from "./Heder.module.scss";
import { Link } from "react-router-dom";
import korzina from "../../assets/korzina.png";

const Heder = () => {
  const [tema, setTema] = useState("light");
  const [logo, setLogo] = useState(солнце);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(tema);
  }, [tema]);

  return (
    <section className={scss.Heder}>
      <Link className={scss.logo} to="/">
        EBEY.com
      </Link>
      <div className={scss.contai_a}>
        <a href="">Heder</a>
        <a href="">Home</a>
        <a href="">Cart</a>
        <a href="">Corzin</a>
        <a href="">Produckt</a>
        <a href="">Foter</a>
      </div>
      <div className={scss.foter}>
        <div className={scss.tema}>
          <button onClick={() => setTema(tema === "light" ? "dark" : "light")}>
            <img
              onClick={() => setLogo(logo === солнце ? луна : солнце)}
              src={logo}
              alt="logo"
              width={50}
            />
          </button>
        </div>
        <Link className={scss.corzin} to="/Corzin">
          <img src={korzina} alt="Корзина" />
          <p>Корзина</p>
        </Link>
      </div>
    </section>
  );
};

export default Heder;
