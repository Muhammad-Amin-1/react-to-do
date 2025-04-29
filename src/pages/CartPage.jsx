// src/pages/CartPage.jsx
export function CartPage({
  cart,
  onIncrement,
  onDecrement,
  onRemove,
  onClear,
  totalPrice,
}) {
  return (
    <div>
      <h2>Корзина:</h2>
      <ul>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              gap: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <div style={{ flex: 1 }}>
              <h4>{item.title}</h4>
              <p>{item.price}₽ за шт.</p>
              <div>
                <button
                  onClick={() => onDecrement(item.id)}
                  style={{ marginRight: "5px" }}
                >
                  ➖
                </button>
                <span>{item.count}</span>
                <button
                  onClick={() => onIncrement(item.id)}
                  style={{ marginLeft: "5px" }}
                >
                  ➕
                </button>
              </div>
            </div>

            <div>
              <p>Итого: {item.price * item.count}₽</p>
              <button onClick={() => onRemove(item.id)}>❌</button>
            </div>
          </div>
        ))}
      </ul>

      <h3>Итого: {totalPrice}₽</h3>
      <div>
        <button onClick={onClear}>очистить </button>
      </div>
    </div>
  );
}
