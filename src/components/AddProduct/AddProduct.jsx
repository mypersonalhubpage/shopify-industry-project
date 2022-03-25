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
        <button className="btn">Add product</button>
        <p className="juststart-subheader">
          Just getting started? Let us help you find the right fit!
        </p>
        <div className="button-container">
          <Link to="/form" className="getstart-btn btn">
            Explore
          </Link>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
