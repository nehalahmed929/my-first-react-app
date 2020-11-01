import axios from "axios";
axios.defaults.baseURL = "https://usman-recipes.herokuapp.com/api/";

class GenericService {
  constructor() {}

  get = (url) => {
    new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          console.log("inside generic res" + res.data);
          alert("inside generic service data: " + res.data);
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  post = (url, data) => {
    new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          resolve(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  put = (url, data) => {
    new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  delete = (url) => {
    new Promise((resolve, reject) => {
      axios
        .delete(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}

export default GenericService;
