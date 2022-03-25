import "./AddProduct.scss";
import tag from "../../assets/logo/tag.png";
import { Link } from "react-router-dom";
function AddProduct() {
  return (
    <>
      <div className="test-container">
        <div className="img-container">
          <img src={tag} className="tag" alt="tag image" />
        </div>

        <p className="add-subheader">Add your first product</p>
        <p className="add-description">
          Add physical items, digital downloads, services, or anything else you
          dream up.
        </p>
        <div className="button-container">
          <Link className="btn add-product__btn">Add product</Link>
        </div>
        <p className="add-subheader">
          Not sure which product&#40;s&#41; to add?
        </p>
        <p className="add-description">
          Fill out the questionnaire below and we'll recommend the right ones
          for you.
        </p>
        <div className="button-container">
          <Link to="/form" className="getstart-btn btn">
            Find Product&#40;s&#41;
          </Link>
          <Link className="learnmore" to="/">
            {" "}
            Learn more
          </Link>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
