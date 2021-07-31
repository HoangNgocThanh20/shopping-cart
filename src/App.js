import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import ProductFeature from "./features/Products";


function App() {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/products" exact/>
      
        <Route path="/products" component={ProductFeature} />
      </Switch>
    </Router>
  );
}

export default App;
