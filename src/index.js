import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numpizzas = pizzas.length;
  //console.log(numpizzas);
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      {numpizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu please come back later :-)</p>
      )}

      {/* <Pizza
        name="Pizza Spinachi"
        ingredient="Tomato, mozarella, and pepperoni"
        photoName="/pizzas/focaccia.jpg"
        price={10}
              />

        <Pizza
        name="Pizza Spinachi"
        ingredient="Tomato, mozarella, and pepperoni"
        photoName="/pizzas/focaccia.jpg"
        price={10}
              />     */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  //if(pizzaObj.soldOut) return null;
  return (
    <>
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          {/* {pizzaObj.soldOut ? <span>SOLD OUT</span>: <span>{pizzaObj.price}</span>} */}
          <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
        </div>
      </li>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if(hour >=openHour && hour <=closeHour) alert("we're currently open");
  //  else alert("Sorry we're closed")
  console.log(hour);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>We're happy to welcome you</p>
      )}
    </footer>
  );
  //return React.createElement('footer', null, "we're currently open");
}

function Order({ openHour, closeHour }) {
  return (
    <div>
      <div className="order">
        <p>
          We're open from {openHour}:00 to {closeHour}:00, come visit us online
        </p>
        <button className="btn">Order</button>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
