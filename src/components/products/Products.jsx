import React from "react";
import SingleProduct from "./SingleProduct";

import { FormControl, Grid, InputLabel, MenuItem } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import productService from "../../services/ProductsService";
import userService from "../../services/UsersService";
import Pagination from "@material-ui/lab/Pagination";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Products = (props) => {
  const [products, setProducts] = React.useState([
    { name: "abc", price: "500" },
  ]);
  const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(props.match.params.perPage);

  const classes = useStyles();
  let page = props.match.params.page ? props.match.params.page : 1;
  const handleBtnclick = () => {
    props.history.push("/products/new");
  };

  const getProducts = () => {
    productService
      .getProducts(page, perPage)
      .then((data) => {
        // console.log("inside products" + data);
        setProducts(data.products);
        setTotal(data.total);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // getProducts();
  React.useEffect(getProducts, [page, perPage]);
  // console.log("products inside");
  return (
    <div>
      <FormControl variant="filled" style={{ width: "150px" }}>
        <InputLabel id="demo-simple-select-filled-label">
          Records per page
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={perPage}
          onChange={(e) => {
            // props.match.params.perPage = e.target.value;
            setPerPage(e.target.value);
            props.history.push("/products/" + page + "/" + e.target.value);
          }}
        >
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
      <h1>Products</h1>

      {userService.isAdmin() && (
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          onClick={handleBtnclick}
        >
          <AddIcon />
        </Fab>
      )}
      {products.length === 0 ? (
        <p>There are no products</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct
              key={index}
              product={product}
              onDelete={getProducts}
            />
          ))}
        </Grid>
      )}
      <div className={classes.root}>
        <Pagination
          count={Math.ceil(total / perPage)}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => {
            props.history.push("/products/" + value + "/" + perPage);
          }}
        />
      </div>
      <div>Total :{total}</div>
    </div>
  );
};

export default Products;
