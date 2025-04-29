// src/pages/MenuPage.jsx
import { Card } from "../components/Card";
import { data } from "../data";

export function MenuPage({ onAddToCart }) {
  return (
    <div className="menu">
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          onAddToCart={() => onAddToCart(item)}
        />
      ))}
    </div>
  );
}
