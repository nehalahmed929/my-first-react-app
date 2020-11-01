import GenericService from "./GenericService";

class ProductsService extends GenericService {
  constructor() {
    super();
  }
  addProduct = (data) => {
    this.post("recipes", data);
  };

  getProducts = () => {
    this.get("recipes");
  };

  deleteProduct = (id) => {
    this.delete("recipes/" + id);
  };
  updateProduct = (id, data) => {
    this.put("recipes/" + id, data);
  };
}

let productService = new ProductsService();
export default productService;
