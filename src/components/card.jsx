import s from "./card.module.css";

export function Card({title, description, price, image}) {
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
          <button>добавить в корзину</button>
        </div>
      </div>
    </div>
  );
}
