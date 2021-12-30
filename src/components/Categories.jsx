import React from "react";
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {

  return (
    <div>
      <div className="categories">
        <ul>
          <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
          {items && items.map((item, index) => (
            <li className={activeCategory === index ? 'active' : ''} onClick={() => onClickCategory(index)} key={`${item}_${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
})


Categories.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
}

export default Categories;
