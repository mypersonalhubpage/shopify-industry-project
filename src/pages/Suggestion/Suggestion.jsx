import "./Suggestion.scss";
import GoBack from "../../components/GoBack/GoBack";
import shopifyIcon from "../../assets/icons/shopify.svg";
import powerbeats from "../../assets/img/powerbeats-pro.svg";
import mouse from "../../assets/img/mouse.svg";
import keyboard from "../../assets/img/keyboard.svg";
import watch from "../../assets/img/watch.svg";
import SuggestionCard from "../../components/SuggestionCard/SuggestionCard";
import detailBall1 from "../../assets/img/detail-ball1.svg";
import downArrow from "../../assets/icons/down-arrow.svg";

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
			<img className='suggestion__detail1' src={detailBall1} alt='detail 1' />
			<div className='suggestion__wrapper'>
				<div className='suggestion__top-wrapper'>
					<GoBack color='white' />
					<img className='suggestion__logo' src={shopifyIcon} alt='shopify' />
				</div>
				<h2 className='suggestion__name'>Kevin,</h2>
				<p className='suggestion__text'>
					we recommend you start selling the following products:
				</p>
				<div className='suggestion__cards'>
					{products.map((product, i) => (
						<SuggestionCard key={i} product={product} />
					))}
				</div>
				<div className='suggestion__scroll-text-wrapper'>
					<p className='suggestion__scroll-text suggestion__scroll-text--margin'>
						Need financial assistance?
					</p>
					<p className='suggestion__scroll-text'>Explore Shopify Capital</p>
					<img src={downArrow} alt='' />
				</div>
			</div>
		</section>
	);
}

export default Suggestion;
