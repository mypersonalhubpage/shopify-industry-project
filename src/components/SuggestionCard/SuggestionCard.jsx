import "./SuggestionCard.scss";
import addIcon from "../../assets/icons/add.svg";
import { useState } from "react";
function SuggestionCard(props) {
  console.log(props);
  const { name, price, img } = props.product;
  const [added, setAdded] = useState(false);
  const addHandler = (e) => {
    if (added) {
      setAdded(false);
    } else {
      setAdded(true);
    }
  };

  return (
    <div className="suggestion-card">
      <div className="suggestion-card__wrapper">
        <p className="suggestion-card__name">{name}</p>
        <p className="suggestion-card__price">{price}</p>
        <img className="suggestion-card__img" src={img} alt="product" />
        <div className="suggestion-card__add-wrapper">
          <p className="suggestion-card__add">Add Product</p>
          <img
            onClick={addHandler}
            className="suggestion-card__add-btn"
            src={addIcon}
            alt="plus"
          />
        </div>
        <div className={`added ${added ? "added--true" : ""}`}>Added</div>
      </div>
    </div>
  );
}

export default SuggestionCard;
