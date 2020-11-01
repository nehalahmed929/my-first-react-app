import { Grid } from "@material-ui/core";
import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <Grid item xs={4}>
      <h2>{product.title}</h2>
      <p>{product.body}</p>
      <hr />
    </Grid>
  );
};

export default SingleProduct;
