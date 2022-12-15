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



class DeleteProductStore {
  data = null;
  error = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async deleteProductData(UrunID) {
    console.log("SDJHFGJ",UrunID);
    this.loading = false;
    try {
      const response = await axios.delete("http://localhost:3500/urunSil",{ data: { UrunID } });
      console.log("askjdgfksjdhyfgvkusj",response.data.json)
      this.data = response.data;
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  }
}

export const deleteproductstore = new DeleteProductStore();



class AddProductStore {
  data = null;
  error = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async deleteProductData( UrunAdi,
  UrunAciklama,
  UrunResimUrl,
  UrunFiyat,
  UrunStokAdedi,
  UrunKategoriID,
  UrunDurumuID,
  ) {
    console.log("SDJHFGJ",UrunAdi,
    UrunAciklama,
    UrunResimUrl,
    UrunFiyat,
    UrunStokAdedi,
    UrunKategoriID,
    UrunDurumuID,);
    this.loading = false;
    try {
      const response = await axios.post("http://localhost:3500/urunEkle",{

      UrunAdi:"",
      
      UrunAciklama:"",
    
      UrunResimUrl:"",
    
      UrunFiyat:"",
    
      UrunStokAdedi:"",
    
      UrunKategoriID:"",
    
      UrunDurumuID:"" ,
      
      });
      console.log("askjdgfksjdhyfgvkusj",response.data.json)
      this.data = response.data;
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  }
}

export const addproductstore = new AddProductStore();