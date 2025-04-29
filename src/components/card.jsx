import s from "./card.module.css";

// Карточка получает инфу о блюде и функцию onAddToCart
export function Card({title, description, price, image, onAddToCart }) {
  // console.log(onAddToCart)
  return (
    <div className={s.container}>
      <div className={s.img}>
        <img src={image} alt="" />
      </div>
      <div className={s.content}>
        <h2 className="">{title}</h2>
        <p className="">
        {description}
        </p>
        <div className={s.prise}>
          <p>{price}₽</p>
          <button onClick={onAddToCart}>добавить в корзину</button>
        </div>
      </div>
    </div>
  );
}
