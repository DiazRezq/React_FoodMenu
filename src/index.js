import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import data from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Yuk Makaan </h1>;
}

function Menu() {
  const foods = data;
  const numFoods = foods.length;
  return (
    <div className="menu">
      <h2>Our Menu </h2>
      {numFoods > 0 ? (
        <>
          <p>
            Yuk makan menyajikan makanan Traditional, Asia dan Western. dengan
            harga terjangkau, bahan berkualitas dengan kualitas internasional
          </p>
          <ul className="foods">
            {data.map((food) => (
              <Foods foodObj={food} key={food.nama} />
            ))}
          </ul>
        </>
      ) : (
        <p>Stock habis, datang lagi besok </p>
      )}
    </div>
  );
}

function Foods(props) {
  const { nama, deskripsi, harga, foto, stok } = props.foodObj;
  return (
    <li className={`food ${!stok ? "sold-out" : ""}`}>
      <img src={foto} alt={nama} width={100} height={70} />
      <div>
        <h2>{nama}</h2>
        <p>{deskripsi}</p>
        <span>{stok ? harga : "sold-out"}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 8;
  const jamTutup = 22;
  const isOpen = hour >= jamBuka && hour <= jamTutup;

  if (isOpen) {
    return <FooterOpenHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  } else {
    return <FooterClosehour jamBuka={jamBuka} jamTutup={jamTutup} />;
  }
}

function FooterClosehour({ jamBuka, jamTutup }) {
  return (
    <footer>
      <p>
        Opps sorry we are closed please comeback @ {jamBuka}.00 - {jamTutup}
        .00
      </p>
    </footer>
  );
}

function FooterOpenHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().getFullYear()} Yuk Makan | jam buka {jamBuka} | jam tutup{" "}
          {jamTutup}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
