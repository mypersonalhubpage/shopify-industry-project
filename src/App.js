import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import FormPage from "./pages/FormPage/FormPage";
import Suggestion from "./pages/Suggestion/Suggestion";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/home" component={Main} />
        <Route path="/form" component={FormPage} />
        <Route path="/suggestion" component={Suggestion} />
      </Switch>
    </div>
  );
}

export default App;
