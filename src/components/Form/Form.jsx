import { Link } from "react-router-dom";
import "./Form.scss";
import logo from "../../assets/logo/shopify-logo.png";
import GoBack from "../GoBack/GoBack";
function Form() {
  return (
    <>
      <div className="page-container">
        <GoBack />
        <img className="logo" src={logo} alt="shopify logo" />
        <h2 className="page-header">Tell us a bit more!</h2>
        <form className="main-form">
          <label htmlFor="product" className="form__label">
            What type of product are you interested in?
          </label>
          <select name="product" id="product" className="form__select">
            <option value="Select">Select</option>
            <option value="Tech Gadget">Tech Gadget</option>
            <option value="Smart Clocks, Sunglasses, Mugs">
              Smart Clocks, Sunglasses, Mugs
            </option>
          </select>
          <label htmlFor="product" className="form__label">
            What type of product are you not interested in?
          </label>
          <select name="product" id="product" className="form__select">
            <option value="Select">Select</option>
            <option value="Tech Gadget">Tech Gadget</option>
            <option value="Smart Clocks, Sunglasses, Mugs">
              Smart Clocks, Sunglasses, Mugs
            </option>
          </select>
          <label htmlFor="amount" className="form__label">
            What is the amount you want to spend per unit?
          </label>
          <select name="amount" id="amount" className="form__select">
            <option value="Select">Select</option>
            <option value="Less than $10 /unit">Less than $10/unit</option>
            <option value="Less than $30 /unit">Less than $30/unit</option>
            <option value="Less than $60 /unit">Less than $60/unit</option>
            <option value="Less than $90 /unit">Less than $90/unit</option>
          </select>
          <label htmlFor="risk" className="form__label">
            What is your risk tolerance in tackling a market?
          </label>
          <select name="risk" id="risk" className="form__select">
            <option value="Select">Select</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <label htmlFor="local" className="form__label">
            Would you like to deal with local suppliers only?
          </label>
          <select name="local" id="local" className="form__select">
            <option value="Select">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <label htmlFor="storage" className="form__label">
            Do you need an area to store your products? If yes, please provide
            the estimated costs (in dollars).
          </label>
          <select name="storage" id="storage" className="form__select">
            <option value="Select">Select</option>
            <option value="400 sq ft">400 sq ft</option>
            <option value="600 sq ft">600 sq ft</option>
            <option value="800 sq ft">800 sq ft</option>
            <option value="1200 sq ft">1200 sq ft</option>
          </select>
          <div className="btn-box">
            <Link to="/suggestion" className="submit-btn">
              Next
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
