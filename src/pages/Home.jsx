import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {getAllProducts} from '../redux/middleware/thunk'

const Home = () => {


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllProducts())
    })
    
  return (
    <h1>Home</h1>
  )
}

export default Home