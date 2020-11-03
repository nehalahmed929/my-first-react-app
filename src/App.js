import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ContactUs from "./components/ContactUs";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";
import NewProduct from "./components/products/NewProduct";
import Products from "./components/products/Products";
import UpdateProduct from "./components/products/UpdateProduct";
import TopMenu from "./components/TopMenu";

function App() {
  return (
    <Router>
      <div>
        <TopMenu />
        <div style={{ padding: "10px" }}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/products/new" component={NewProduct} />
            <Route path="/products/update/:id" component={UpdateProduct} />
            <Route path="/products" component={Products} />

            <Redirect to="not-found" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
