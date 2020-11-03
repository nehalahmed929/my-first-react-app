import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import productService from "../../services/ProductsService";

const UpdateProduct = (props) => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  console.log(props);
  const id = props.match.params.id;
  React.useEffect(() => {
    productService
      .getSingleProduct(id)
      .then((p) => {
        setTitle(p.title);
        setBody(p.body);
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Registration City"
          fullWidth
          value={body}
          onChange={(e) => setBody(e.target.value)}
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
              .updateProduct(id, { title, body })
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
