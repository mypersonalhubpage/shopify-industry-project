import "./GoBack.scss";
import backArrow from "../../assets/icons/back-arrow.svg";
import { Link } from "react-router-dom";

function GoBack() {
	const handleGoBack = () => {
		window.history.back();
	};

	return (
		<div className='back' onClick={handleGoBack}>
			<img className='back__icon' src={backArrow} alt='back arrow' />
			<p className='back__text'>Back</p>
		</div>
	);
}

export default GoBack;
