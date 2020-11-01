import React from "react";
import SingleProduct from "./SingleProduct";

import { Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import productService from "../../services/ProductsService";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Products = (props) => {
  const [products, setProducts] = React.useState([
    { title: "abc", body: "500" },
  ]);

  const classes = useStyles();

  const handleBtnclick = () => {
    props.history.push("/products/new");
  };

  const getProducts = () => {
    productService
      .getProducts()
      .then((data) => {
        // console.log("inside products" + productService.getProducts();
        setProducts(data);
        console.log("inside products" + data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // getProducts();
  React.useEffect(getProducts, []);
  // console.log("products inside");
  return (
    <div>
      <h1>Products</h1>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={handleBtnclick}
      >
        <AddIcon />
      </Fab>
      {products.length === 0 ? (
        <p>There are no products</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Products;
