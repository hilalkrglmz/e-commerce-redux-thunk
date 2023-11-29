import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBasketData, setbasketLoading } from '../redux/actions/basketActions'
import Loading from '../components/Loading'
import BasketItem from '../components/BasketItem'

const ProductPage = () => {

  const dispatch = useDispatch()
  const state = useSelector((store) => store.basketReducer)


  useEffect(() => {
    dispatch(setbasketLoading());
    dispatch(getBasketData())
  }, [])

  const total_count = state.baskets.reduce((total, item) => total + item.adet * item.fiyat, 0)


  return (
    <div className='row px-4 py-5'>
      {state.isLoading && <Loading />}

      {state.isError && (

        <p>
          Üzgünüz sepet verileri alınırken bir hata oluştu.
        </p>
      )}

      <div className='col-md-8'>

        {state.baskets.length > 0 ? (
        state.baskets.map((item) => (
          <BasketItem item={item} key={item.id} />
          )) 
        )  : (
        <p> Sepet boş :( </p>
        )}

      </div>

      <div className='d-flex align-items-start justify-content-start col-md-4'>
       <div className='w-100 bg-white text-black p-5 rounded'>
       <h5 className='text-center'>Toplam Tutar: {total_count}</h5>
        <button className='btn btn-primary w-100 my-3'>Alışverişi tamamla</button>
       </div>
      </div>





    </div>


  )
}

export default ProductPage