// src/hooks/useCart.js
import { useState, useEffect } from "react";

export function useCart() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
   // читаем локал ,  и сох локал
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  //сох в карзину
  const addToCart = (item) => {
    setCart((prevCart) => {
      //cушествуеший элемент,
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, count: 1 }];
      }
    });
  };

  const increment = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrement = (itemId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === itemId ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  //удалить карту 
  const remove = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // очистить корзину
  const clearCart = () => {
    setCart([])
    localStorage.removeItem('cart')

  }

  //обшяя цена
  const totalPrice = cart.reduce((total, item) => total + item.price * item.count, 0);

  return {
    cart,
    addToCart,
    increment,
    decrement,
    remove,
    clearCart,
    totalPrice,
  };
}
