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
        <ul className="foods">
          {data.map((food) => (
            <Foods foodObj={food} key={food.nama} />
          ))}
        </ul>
      ) : (
        <p>Stock habis, datang lagi besok </p>
      )}
    </div>
  );
}

function Foods(props) {
  return (
    <li className="food">
      <img
        src={props.foodObj.foto}
        alt={props.foodObj.nama}
        width={100}
        height={70}
      />
      <div>
        <h2>{props.foodObj.nama}</h2>
        <p>{props.foodObj.deskripsi}</p>
        <span>{props.foodObj.harga}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 10;
  const jamTutup = 22;
  const isOpen = hour >= jamBuka && hour <= jamTutup;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            {new Date().getFullYear()} Yuk Makan | jam buka {jamBuka} | jam
            tutup {jamTutup}
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          Opps sorry we are closed please comeback @ {jamBuka}.00 - {jamTutup}
          .00
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
