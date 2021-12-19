import React, {useState} from "react";

function Categories({ items }) {
    const [activeItem, setActiveItem] = useState(null)

    const funActual = (index) => {
        setActiveItem(index)
    };

    console.log(activeItem);
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
}

export default Categories;
