import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import FormPage from "./pages/FormPage/FormPage";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/home" component={Main} />
        <Route path="/form" component={FormPage} />
      </Switch>
    </div>
  );
}

export default App;
