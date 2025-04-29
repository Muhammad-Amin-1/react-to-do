// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MenuPage } from "./pages/MenuPage";
import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage"; // Импортируем главную страницу
import { Header } from "./components/Header";
import { useCart } from "./hooks/useCart";

export default function App() {
  const { cart, addToCart, increment, decrement, remove, clearCart, totalPrice } = useCart();

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Теперь "/" ведет на отдельную страницу */}
        <Route path="/menu" element={<MenuPage onAddToCart={addToCart} />} />
        <Route path="/cart" element={
          <CartPage
            cart={cart}
            onIncrement={increment}
            onDecrement={decrement}
            onRemove={remove}
            onClear={clearCart}
            totalPrice={totalPrice}
          />
        }/>
      </Routes>
    </BrowserRouter>
  );
}
