import { makeAutoObservable } from "mobx";
import axios from "axios";

class OrderStore {
  data = null;
  error = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

   fetchOrderData = async() =>{
    this.loading = true;
    try {
      const fetchResponse = await axios.get("http://localhost:3500/siparisList");
      console.log(fetchResponse);
      this.data = fetchResponse.data;
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  }

  


 addOrderData = async( MusteriNotu,IlID,UrunResimUrl,AcikAdres,Telefon,Ad,Soyad,ToplamFiyat ,Urunler, UrunId, SiparisAdet ) => {
    console.log("SDJHFGJ",MusteriNotu,
    IlID,
    UrunResimUrl,
    AcikAdres,
    Telefon,
    Ad,
    Soyad,ToplamFiyat,Urunler,UrunId, SiparisAdet);
    this.loading = false;
    try {
      const addResponse = await axios.post("http://localhost:3500/siparisEkle",{

      MusteriNotu:"",
   
      IlID:"",
 
      AcikAdres:"",
 
      Telefon:"",
 
      Ad:"",
 
      Soyad:"",
 
      ToplamFiyat:"" ,
      Urunler: [

        {
        
        UrunId:"",
        
        SiparisAdet:""
        
        }
        
        ]
   
      }); if (addResponse.data.responseCode===100) {
        this.fetchProductData();
      }
      console.log("askjdgfksjdhyfgvkusj",addResponse.data.json)
      this.data = addResponse.data;
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  }
}

export const orderstore = new OrderStore();

// deleteProductData = async(UrunID) => {
//   console.log("SDJHFGJ",UrunID);
//   this.loading = false;
  
//   try {
//     const deleteResponse = await axios.delete("http://localhost:3500/urunSil",{ data: { UrunID } });
//      if (deleteResponse.data.responseCode===100) {
//        this.fetchProductData();
//      }
//     console.log("askjdgfksjdhyfgvkusj",deleteResponse.data)
//     this.data = deleteResponse.data;
//   } catch (err) {
//     this.error = err;
//   } finally {
//     this.loading = false;
//   }
// }