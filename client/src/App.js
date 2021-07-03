import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsList from "./pages/JobsList";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/jobs/:location" component={JobsList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
