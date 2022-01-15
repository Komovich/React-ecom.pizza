import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Button from "../Button";

function PizzaBlock({
  id,
  imageUrl,
  name,
  price,
  types,
  sizes,
  onClickAddPizza,
  addedCount,
}) {
  const avilableTypes = ["Тонкое", "Традиционное"]; //для перебора и отображения
  const avilableSizes = [26, 30, 40]; //для перебора и отображения

  const [activeType, setActiveType] = useState(types[0]); //для сравнения с index и применения className
  const [activeSize, setActiveSize] = useState(sizes[0]); //для сравнения с index и применения className

  const onSelectTypes = (index) => {
    setActiveType(index);
  }; //для присваивания нового значения в activeSize

  const onSelectSize = (index) => {
    setActiveSize(index);
  }; //для присваивания нового значения в activeSize

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      type: avilableTypes[activeType],
      size: avilableSizes[activeSize],
    };
    onClickAddPizza(obj);
  }; //для передачи данных в Redux

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {avilableTypes.map((type, index) => (
            <li
              onClick={() => onSelectTypes(index)}
              key={type}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(type), //если не активный тип то убрать актив статус
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {avilableSizes.map((size, index) => (
            <li
              onClick={() => onSelectSize(index)}
              key={size}
              className={classNames({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}
            >
              {size}см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button onClick={onAddPizza} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
  name: "---",
  price: 0,
  types: [],
  sizes: [],
};

export default PizzaBlock;
