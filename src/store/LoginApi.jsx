import axios from "axios";
import { makeAutoObservable } from "mobx";

class LoginApi {
  data = null;
  error = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async loginData() {
    this.loading = true;
    try {
      const response = await axios.post("http://localhost:3500/login");
      this.data = response.data;
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  }
}

export const loginstore = new LoginApi();