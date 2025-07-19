import React, { useEffect, useState } from 'react'
import BrandCard from './BrandCard'
import axios from 'axios';


function BrandsScetion() {
const [barnds,setBrands]=useState([]);
useEffect(()=>{
  axios.get("brand.json").then((res)=>setBrands(res?.data))
},[])
console.log(barnds)
  return (
    <div>
<div className='flex flex-col justify-center items-center'>      
  <h1 className='text-4xl font-bold'>Favourite Brands</h1>
      <p className='text-2xl font-semibold text-muted/20'>Buy from your favourite brand</p>
      </div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-2 my-2 gap-4'>
{barnds.map((brand)=>(
  <BrandCard key={brand?.id} barnds={brand}/>
))}

</div>
    </div>
  )
}

export default BrandsScetion