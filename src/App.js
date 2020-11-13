import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/Register";
import ContactUs from "./components/ContactUs";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";
import NewProduct from "./components/products/NewProduct";
import Products from "./components/products/Products";
import UpdateProduct from "./components/products/UpdateProduct";
import TopMenu from "./components/TopMenu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <TopMenu />
        <div style={{ padding: "10px" }}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/products/new" component={NewProduct} />
            <Route path="/products/update/:id" component={UpdateProduct} />
            <Route path="/products/:page?/:perPage?" component={Products} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <Redirect to="not-found" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
