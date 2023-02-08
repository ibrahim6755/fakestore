import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllProducts } from '../redux/middleware/thunk'


function Main() {

    
    const dispatch = useDispatch()
    const  {products}  = useSelector(state =>state.product)

    useEffect(()=>{
        dispatch(getAllProducts());
    },[])

  return (
    <div className="row">
        {
            products.map((product,index)=>{
                return <div key={index} className='col-md-2'>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                </div>
            })
        }

    </div>
  )
}

export default Main