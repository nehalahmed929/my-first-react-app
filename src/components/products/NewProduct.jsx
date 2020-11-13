import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import productService from "../../services/ProductsService";

const NewProduct = (props) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Add New Product</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          id="standard-basic"
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Price"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            productService
              .addProduct({ name, price })
              .then((res) => {
                props.history.push("/products");
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewProduct;
