// src/components/Header.jsx

import { Link } from "react-router-dom";

export function Header() {
  return (
    <header style={{ padding: "10px", backgroundColor: "#eee", marginBottom: "20px" }}>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/menu">Меню</Link>
        <Link to="/cart">Корзина</Link>
      </nav>
    </header>
  );
}