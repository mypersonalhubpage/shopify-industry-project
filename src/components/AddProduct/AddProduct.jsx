import "./AddProduct.scss";
import tag from "../../assets/logo/tag.png";
function AddProduct() {
  return (
    <>
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
      <button className="getstart-btn btn">Explore</button>
    </>
  );
}

export default AddProduct;
