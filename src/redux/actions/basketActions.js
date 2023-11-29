import axios from "axios";
import { ActionTypes } from "../ActionTypes"

axios.defaults.baseURL='http://localhost:4000'
//!SENKRON AKSİYONLAR

export const setbasketLoading = () => (
    {type:ActionTypes.SET_BASKET_LOADING}
);

export const setBasket = (payload) => ({
    type:ActionTypes.SET_BASKET,
    payload,
})

export const setBasketError = () => ({
    type:ActionTypes.SET_BASKET_ERROR
})

//!ASENKRON AKSİYONLAR

//*API'den verileri alıp store a aktarır
export const getBasketData = () => (dispatch) =>{
    axios.get('/basket')
    .then((res) => dispatch(setBasket(res.data)))
    .catch((err) => dispatch(setBasketError()))
};

export const addToBasket = (product) => (dispatch) =>{

    //!objeye istedğimiz özelliği ekleyip yeni veri oluşturduk.
    const newProduct = {...product, adet:1};

    //!Yeni veri Objesinden gereksiz verileri kaldırdık.

    delete newProduct.renk;
    delete newProduct.ozellikler;
    delete newProduct.baslik;
    

    axios.post("/basket", newProduct)
    .then((res)=> dispatch({type:ActionTypes.ADD_TO_BASKET,payload: newProduct}))
    .catch((err) => setBasketError())
};
export const updateItem = (product) => (dispatch) =>{
    axios
    .patch(`/basket/${product.id}`, {adet: product.adet +1})
    .then(() => dispatch({type: ActionTypes.UPDATE_ITEM, payload: product.id}))
};

//API DEN ÜRÜNÜ KALDIRIP ürünün id sini reducer a gönderir.
export const removeItem = (delete_id) => (dispatch) =>{

    axios.delete(`/basket/${delete_id}`)
    .then(() =>dispatch({type:ActionTypes.REMOVE_ITEM, payload: delete_id}) )
};
