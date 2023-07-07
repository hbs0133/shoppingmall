import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from './ProductDetail';
import ProductAll from './ProductAll';
const PrivateRouter = ({ login }) => {
  return (login == true ? <ProductAll /> :  <Navigate to="/login" />)
}

export default PrivateRouter
