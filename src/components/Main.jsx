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
        <>
            <div className="div">
                <h1 className='text-center p-3 text-warning  shadow bg-body-tertiary rounded mt-3'>SAMPLE STORE</h1>
            </div>
            <div className="row px-4 mt-4">

                {
                    products.map((product, index) => {
                        return <div key={index} className='col-md-3 p-2 px-2'>
                            <div className="card px-2" >
                                <img src={product.image} className="card-img-top px-5 pt-3" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title ">{product.title}</h5>
                                    <p className="card-text fs-6 lh-base font-monospace">{product.description}</p>
                                    <a href="#" className="btn btn-primary"><span className=' fw-bold'>Price:</span> {product.price}$</a>
                                </div>
                            </div>
                        </div>
                    })
                }


            </div>
        </>
    )
}

export default Main