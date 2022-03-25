import "./GoBack.scss";
import backArrow from "../../assets/icons/back-arrow.svg";
import backArrowWhite from "../../assets/icons/back-arrow-white.svg";

function GoBack(props) {
	const handleGoBack = () => {
		window.history.back();
	};

	return (
		<div className='back' onClick={handleGoBack}>
			<img
				className='back__icon'
				src={`${props.color === "white" ? backArrowWhite : backArrow}`}
				alt='back arrow'
			/>
			<p
				className={`back__text ${
					props.color === "white" ? "back__text--white" : ""
				}`}
			>
				Back
			</p>
		</div>
	);
}

export default GoBack;
