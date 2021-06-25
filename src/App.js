import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cities">
            <Home searchType="cities" />
          </Route>
          <Route path="/books">
            <Home searchType="books" />
          </Route>
          <Route path="/">
            <Home searchType="cities" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
