import "./Footer.scss";
import homeIcon from "../../assets/icons/home.svg";
import ordersIcon from "../../assets/icons/orders.svg";
import productsIcon from "../../assets/icons/products.svg";
import storeIcon from "../../assets/icons/store.svg";

function Footer(props) {
	const { path } = props.match.params;

	return (
		<footer className={`footer ${path === "form" ? "footer__border" : ""}`}>
			<div className='footer__wrapper'>
				<div className='footer__icon-wrapper'>
					<img className='footer__icon' src={homeIcon} alt='home' />
					<p className='footer__text footer__text--active'>Home</p>
				</div>
				<div className='footer__icon-wrapper'>
					<img className='footer__icon' src={ordersIcon} alt='home' />
					<p className='footer__text'>Orders</p>
				</div>
				<div className='footer__icon-wrapper'>
					<img className='footer__icon' src={productsIcon} alt='home' />
					<p className='footer__text'>Products</p>
				</div>
				<div className='footer__icon-wrapper'>
					<img className='footer__icon' src={storeIcon} alt='home' />
					<p className='footer__text'>Store</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
