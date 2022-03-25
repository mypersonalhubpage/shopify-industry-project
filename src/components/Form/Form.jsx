import { Link } from "react-router-dom";
import "./Form.scss";
import logo from "../../assets/logo/shopify-logo.png";
import GoBack from "../GoBack/GoBack";
function Form() {
	return (
		<>
			<div className='page-container'>
				<GoBack color='black' />
				<img className='logo' src={logo} alt='shopify logo' />
				<h2 className='page-header'>Tell us a bit more!</h2>
				<form className='main-form'>
					<label htmlFor='amount' className='form__label'>
						What is the amount you want to spend per unit?
					</label>
					<input name='amount' id='amount' className='form__input' />
					<p className='field-explanation'>Format: $x/unit</p>
					<label htmlFor='risk' className='form__label'>
						What is your risk tolerance in tackling a market?
					</label>
					<select name='risk' id='risk' className='form__select'>
						<option value='Select'>Select</option>
						<option value='Low'>Low</option>
						<option value='Medium'>Medium</option>
						<option value='High'>High</option>
					</select>
					<label htmlFor='product' className='form__label'>
						What type of product are you interested?
					</label>
					<label htmlFor='local' className='form__label'>
						Would you like to deal with local suppliers only?
					</label>
					<select name='local' id='local' className='form__select'>
						<option value='Select'>Select</option>
						<option value='Yes'>Yes</option>
						<option value='No'>No</option>
					</select>
					<label htmlFor='storage' className='form__label'>
						Do you need an area to store your products? If yes, please provide
						the estimated costs (in dollars).
					</label>
					<input name='storage' id='storage' className='form__input' />
					<div className='btn-box'>
						<Link to='/suggestion' className='submit-btn'>
							Next
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}

export default Form;
