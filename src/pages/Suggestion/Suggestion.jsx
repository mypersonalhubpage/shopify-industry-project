import "./Suggestion.scss";
import GoBack from "../../components/GoBack/GoBack";
import shopifyIcon from "../../assets/icons/shopify.svg";
import powerbeats from "../../assets/img/powerbeats-pro.svg";
import mouse from "../../assets/img/mouse.svg";
import keyboard from "../../assets/img/keyboard.svg";
import watch from "../../assets/img/watch.svg";

function Suggestion() {
	const products = [
		{
			name: "Powerbeats Pro",
			price: "$80/unit",
			img: powerbeats,
		},
		{
			name: "Microsoft Mouse",
			price: "$10/unit",
			img: mouse,
		},
		{
			name: "Apple Keyboard",
			price: "$80/unit",
			img: keyboard,
		},
		{
			name: "Sleep Watch",
			price: "$50/unit",
			img: watch,
		},
	];

	return (
		<section className='suggestion'>
			<div className='suggestion__wrapper'>
				<div className='suggestion__top-wrapper'>
					<GoBack color='white' />
					<img className='suggestion__logo' src={shopifyIcon} alt='shopify' />
				</div>
				<h2 className='suggestion__name'>Kevin,</h2>
				<p className='suggestion__text'>
					we recommend you start selling the following products:
				</p>
			</div>
		</section>
	);
}

export default Suggestion;
