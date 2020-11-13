import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import productService from "../../services/ProductsService";

const UpdateProduct = (props) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  console.log(props);
  const id = props.match.params.id;
  React.useEffect(() => {
    productService
      .getSingleProduct(id)
      .then((p) => {
        setName(p.name);
        setPrice(p.price);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Update Product</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          id="standard-basic"
          label="Title"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Registration City"
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
              .updateProduct(id, { name, price })
              .then((res) => {
                props.history.push("/products");
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Update
        </Button>
      </Grid>
    </Grid>
  );
};

export default UpdateProduct;
