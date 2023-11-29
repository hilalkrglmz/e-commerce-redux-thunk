import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductData, setError, setLoading, setProducts } from '../redux/actions/productAction'
import Loading from '../components/Loading'
import axios from 'axios'
import Card from '../components/Card'
import { getBasketData, setbasketLoading } from '../redux/actions/basketActions'

const MainPage = () => {
const dispatch = useDispatch()
const state = useSelector((store) => store.productReducer)

useEffect(() => {
  
dispatch(setLoading())

dispatch(setbasketLoading())

dispatch(getProductData())

dispatch(getBasketData())



},[])

console.log(state)

  return (
    <div>
      {state.isLoading && <Loading/>}

     <div className='d-flex flex-wrap gap-4 p-5 justify-content-center'>
     {state?.products.map((product) => <Card key={product.id} product={product}/> )}
     </div>

      {state.isError && <p>Üzgünüz verileri alırken bir hata oluştu...</p>}
    </div>
  )
}

export default MainPage