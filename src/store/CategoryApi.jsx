import { makeAutoObservable } from "mobx";
import axios from "axios";

class CategoryStore {
  data = null;
  error = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchCategoryData() {
    this.loading = true;
    try {
      const response = await axios.get("http://localhost:3500/kategoriList");
      this.data = response.data;
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  }
}

export const categorystore = new CategoryStore();