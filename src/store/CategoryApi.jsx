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



class DeleteCategoryStore {
  data = null;
  error = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async deleteCategoryData(KategoriId) {
    console.log("SDJHFGJ",KategoriId);
    this.loading = false;
    try {
      const response = await axios.delete("http://localhost:3500/kategoriSil",{ data: { KategoriId } });
      console.log("askjdgfksjdhyfgvkusj",response.data.json)
      this.data = response.data;
      if (response.data.responseCode===100) {
        await this.fetchCategoryData();
        console.log("kwsje" );
      }
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  }
}

export const deletecategorystore = new DeleteCategoryStore();