import GenericService from "./GenericService";

class ProductsService extends GenericService {
  constructor() {
    super();
  }
  addProduct = (data) => {
    console.log(data);
    return this.post("recipes", data);
  };

  getProducts = () => {
    return this.get("recipes");
  };

  deleteProduct = (id) => {
    return this.delete("recipes/" + id);
  };
  updateProduct = (id, data) => {
    return this.put("recipes/" + id, data);
  };

  getSingleProduct = (id) => {
    return this.get("recipes/" + id);
  };
}

let productService = new ProductsService();
export default productService;
