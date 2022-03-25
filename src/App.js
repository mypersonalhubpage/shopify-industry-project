import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./pages/Main/Main";
import FormPage from "./pages/FormPage/FormPage";
import Suggestion from "./pages/Suggestion/Suggestion";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className='App'>
			<Switch>
				<Redirect exact from='/' to='/home' />
				<Route path='/' exact component={Main} />
				<Route path='/home' component={Main} />
				<Route path='/form' component={FormPage} />
				<Route path='/suggestion' component={Suggestion} />
			</Switch>
			<Route path='/:path' component={Footer} />
		</div>
	);
}

export default App;
