import { makeAutoObservable } from "mobx";
import axios from "axios";

class ProductStore {
  data = null;
  error = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchProductData() {
    this.loading = true;
    try {
      const response = await axios.get("http://localhost:3500/urunList");
      this.data = response.data;
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  }
}

export const productstore = new ProductStore();