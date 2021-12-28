import React, {useState} from "react";

const Categories = React.memo(function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = useState(null)

    const funActual = (index) => {
        onClickItem(index);
        setActiveItem(index);
    };

    console.log("ffffffff");

    console.log(12);
  return (
    <div>
      <div className="categories">
        <ul>
          <li className={activeItem === null ? 'active' : ''} onClick={() => funActual(null)}>Все</li>
          {items.map((item, index) => (
            <li className={activeItem === index ? 'active' : ''} onClick={() => funActual(index)} key={`${item}_${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
})

export default Categories;
