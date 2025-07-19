import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function BrandDetails() {
const {id}=useParams()
  const [barnds,setBrands]=useState([]);
useEffect(()=>{
  axios.get("/brand.json").then((res)=>setBrands(res?.data))
},[id])

const brandData=barnds?.find((brand)=>String(brand.id)===String(id));
console.log(brandData)
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={brandData?.image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{brandData?.title}</h1>
      <p className="py-6">
       {brandData?.description}
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default BrandDetails