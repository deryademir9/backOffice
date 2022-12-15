import { makeAutoObservable } from "mobx";
import axios from "axios";

class OrderStore {
  data = null;
  error = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchOrderData() {
    this.loading = true;
    try {
      const response = await axios.get("http://localhost:3500/siparisList");
      console.log(response);
      this.data = response.data;
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  }
}

export const orderstore = new OrderStore();