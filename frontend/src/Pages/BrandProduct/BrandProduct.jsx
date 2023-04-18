import React, { useEffect, useState } from 'react'
import "./BrandProduct.css"
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import BnbCard from '../../Components/Bnbcard/BnbCard';
const BrandProduct = () => {
  const [products,setProducts] = useState([])
  const {brandname} = useParams();
    console.log(brandname)



    const getBrandProducts=(brandname)=>{
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandname}`)
       .then((res)=>{
        console.log(res)
        setProducts(res.data)
       })
       .catch((err)=>{
        console.log(err)
       })
   
    }


    useEffect(()=>{
    getBrandProducts(brandname)
    
    },[brandname])

  return (
    <div className='brandproduct'>
    {

        products?.map((item)=>(
<BnbCard item={item}/>
        ))


    }
    
    
    
    </div>
  )
}

export default BrandProduct