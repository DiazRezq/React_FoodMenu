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
  return (
    <div className="menu">
      <h2>Our Menu </h2>
      <ul className="foods">
        {data.map((food) => (
          <Foods foodObj={food} key={food.nama} />
        ))}
      </ul>
      {/* <Foods
        nama="Nasi Goreng"
        deskripsi="Nasi yang digoreng dengan bumbu rempah khas Indonesia"
        harga={25000}
        foto="food/nasi-goreng.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Foods
        nama="Sate Ayam"
        deskripsi="Daging yang dibakar pakai bumbu kacang "
        harga={29000}
        foto="food/sate-ayam.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      /> */}
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

  if (hour < jamBuka || hour > jamTutup) {
    alert("Sudah Tutup");
  } else {
    alert("masih buka ");
  }
  return (
    <div className="footer">
      <footer>
        {" "}
        <p>{new Date().getFullYear()} Yuk Makan </p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
