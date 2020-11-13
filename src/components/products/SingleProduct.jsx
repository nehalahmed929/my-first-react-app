import { Button, Grid } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import userService from "../../services/UsersService";
import productService from "../../services/ProductsService";

const SingleProduct = (props) => {
  const { product, onDelete } = props;
  return (
    <Grid item xs={4}>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      {userService.isAdmin() && (
        <>
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => {
              productService.deleteProduct(product._id);
              onDelete();
            }}
          >
            Del
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              console.log("pid: " + product._id);
              props.history.push("products/update/" + product._id);
              //   productService.deleteProduct(product._id);
              //   onDelete();
            }}
          >
            Edit
          </Button>
        </>
      )}
      <hr />
    </Grid>
  );
};

export default withRouter(SingleProduct);
