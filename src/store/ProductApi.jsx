import { makeAutoObservable } from "mobx";
import axios from "axios";
import { message } from "antd";

class ProductStore {
  data = null;
  error = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProductData = async () => {
    this.loading = true;
    try {
      const fetchResponse = await axios.get("http://localhost:3500/urunList");
      console.log("sdgfsrde", fetchResponse , this.error);

      this.data = fetchResponse.data;
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  };

  //  fetchProductDetailData= async (ID)=> {
  //    this.loading = true;
  //    try {
  //      const fetchDetailResponse = await axios.get("http://localhost:3500/urunList/ID");
  //      console.log("sdgfsrde",fetchDetailResponse, this.error);

  //      this.data = fetchDetailResponse.data;
  //    } catch (err) {
  //      this.error = err;
  //    } finally {
  //      this.loading = false;
  //    }
  //  }

  deleteProductData = async (UrunID) => {
    console.log("SDJHFGJ", UrunID);
    this.loading = false;

    try {
      const deleteResponse = await axios.delete(
        "http://localhost:3500/urunSil",
        { data: { UrunID } }
      );

      console.log("askjdgfksjdhyfgvkusj", deleteResponse.data);
      this.data = deleteResponse.data;
      if (deleteResponse.data.responseCode === 100) {
        await this.fetchProductData();
        console.log("kwsje");
      }
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  };

  addProductData = async (
    UrunAdi,
    UrunAciklama,
    UrunResimUrl,
    UrunFiyat,
    UrunStokAdedi,
    UrunKategoriID,
    UrunDurumuID
  ) => {
    console.log(
      "SDJHFGJ",
      UrunAdi,
      UrunAciklama,
      UrunResimUrl,
      UrunFiyat,
      UrunStokAdedi,
      UrunKategoriID,
      UrunDurumuID
    );
    this.loading = false;
    try {
      const addResponse = await axios.post("http://localhost:3500/urunEkle", {
        UrunAdi: "",

        UrunAciklama: "",

        UrunResimUrl: "",

        UrunFiyat: "",

        UrunStokAdedi: "",

        UrunKategoriID: "",

        UrunDurumuID: "",
      });
      if (addResponse.data.responseCode === 100) {
        this.fetchProductData();
      }
      console.log("askjdgfksjdhyfgvkusj", addResponse.data.json);
      this.data = addResponse.data;
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  };

  detailProductData = async (ID) => {
    this.loading = false;
    console.log("UrunID", ID);
    try {
      console.log(ID);

      const detailResponse = await axios.post(
        "http://localhost:3500/urunDetayList",
        { Id: Number(ID.ID) }
      );
      // if (addResponse.data.responseCode===100) {
      //   this.fetchProductData();
      // }

      console.log("aAAAAAAA", detailResponse.data);
      this.data = detailResponse.data;
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  };
}

export const productstore = new ProductStore();




  // updateProductData = async (UrunID, UrunAd, UrunAciklama, UrunResimUrl, UrunFiyat, UrunStokAdedi, UrunKategoriID, UrunDurumuID) => {
  //   this.loading = false;
  //   console.log("UrunID, UrunAd, UrunAciklama, UrunResimUrl, UrunFiyat, UrunStokAdedi, UrunKategoriID, UrunDurumuID", UrunID, UrunAd, UrunAciklama, UrunResimUrl, UrunFiyat, UrunStokAdedi, UrunKategoriID, UrunDurumuID);
  //   try {
  //     console.log(UrunID, UrunAd, UrunAciklama, UrunResimUrl, UrunFiyat, UrunStokAdedi, UrunKategoriID, UrunDurumuID);

  //     const updateResponse = await axios.put(
  //       "http://localhost:3500/urunGuncelle",
  //       { UrunID, UrunAd, UrunAciklama, UrunResimUrl, UrunFiyat, UrunStokAdedi, UrunKategoriID, UrunDurumuID }
  //     );
  
  //     console.log("aAAAAAAA", updateResponse.data);
  //     this.data = updateResponse.data;
  //   } catch (err) {
  //     this.error = err;
  //   } finally {
  //     this.loading = false;
  //   }
  // };





// class DeleteProductStore {
//   data = null;
//   error = null;
//   loading = false;

//   constructor() {
//     makeAutoObservable(this);
//   }

//   async deleteProductData(UrunID) {
//     console.log("SDJHFGJ",UrunID);
//     this.loading = false;
//     try {
//       const response = await axios.delete("http://localhost:3500/urunSil",{ data: { UrunID } });
//       if (response) {
//         fetchProductData();
//       }
//       console.log("askjdgfksjdhyfgvkusj",response.data.json)
//       this.data = response.data;
//     } catch (err) {
//       this.error = err;
//     } finally {
//       this.loading = false;
//     }
//   }
// }

// export const deleteproductstore = new DeleteProductStore();

// class AddProductStore {
//   data = null;
//   error = null;
//   loading = false;

//   constructor() {
//     makeAutoObservable(this);
//   }

//   async addProductData( UrunAdi,
//   UrunAciklama,
//   UrunResimUrl,
//   UrunFiyat,
//   UrunStokAdedi,
//   UrunKategoriID,
//   UrunDurumuID,
//   ) {
//     console.log("SDJHFGJ",UrunAdi,
//     UrunAciklama,
//     UrunResimUrl,
//     UrunFiyat,
//     UrunStokAdedi,
//     UrunKategoriID,
//     UrunDurumuID,);
//     this.loading = false;
//     try {
//       const response = await axios.post("http://localhost:3500/urunEkle",{

//       UrunAdi:"",

//       UrunAciklama:"",

//       UrunResimUrl:"",

//       UrunFiyat:"",

//       UrunStokAdedi:"",

//       UrunKategoriID:"",

//       UrunDurumuID:"" ,

//       });
//       console.log("askjdgfksjdhyfgvkusj",response.data.json)
//       this.data = response.data;
//     } catch (err) {
//       this.error = err;
//     } finally {
//       this.loading = false;
//     }
//   }
// }

// export const addproductstore = new AddProductStore();
