import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, updateItem } from '../redux/actions/basketActions'

const Card = ({product}) => {

const dispatch = useDispatch()
const state = useSelector((store) => store.basketReducer)

const found = state.baskets.find((i) => i.id === product.id)
console.log(found)

 const handleClick = () => {

//!BU NOKTADA İKİ ŞEYİ SORGULAMALIYIZ: 1-ELEMAN SEPETTE VAR MI YOK MU?
//!VARSA patch isteği, yoksa post isteği çalıştırılacak.

if(found){

  dispatch(updateItem(found))
}else{

  dispatch(addToBasket(product))
}



 } 
     return (
    <div className='pt-4 card' style={{width: "18rem"}}>
        <div className='d-flex justify-content-center'>
            <img className='rounded' width={200} height={200} src={product.resim} alt="" />
        </div>
        <div className='card-body text-center'>
        <h5 className='title'>{product.baslik}</h5>
        <p>
            
            <span className='fw-bold'>{product.marka}</span>
            <br />
            {product.model}
        </p>
        <p>{product.ozellikler.map((line) => <span>{line}</span>)}</p>
        
        <button onClick={handleClick} className='w-100 d-flex justify-content-between'>
            <span>{found ? `Miktarı arttır ${found.adet}` : "Sepete Ekle"}</span>
            <span className='text-success'>{product.fiyat}₺</span>
        </button>
        </div>
    </div>
  )
}

export default Card