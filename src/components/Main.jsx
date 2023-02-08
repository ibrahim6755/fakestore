import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllProducts } from '../redux/middleware/thunk'


function Main() {


    const dispatch = useDispatch()
    const { products } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    return (
        <div className="row">
            <div className="div">
                <h1 className='text-center p-3 text-warning bg-dark'>SAMPLE STORE</h1>
            </div>
            {
                products.map((product, index) => {
                    return <div key={index} className='col-md-3 p-2'>
                        <div className="card p-4" >
                <img src={product.image} className="card-img-top p-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title ">{product.title}</h5>
                    <p className="card-text fs-6">{product.description}</p>
                    <a href="#" className="btn btn-primary">{product.price}</a>
                </div>
            </div>
                    </div>
                })
            }
           

        </div>
    )
}

export default Main