import React from 'react'
import { Link } from 'react-router-dom';

function BrandCard({barnds}) {
  const {title,description,image,id}=barnds;
  return (
    <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
  
      <Link to={`/brands/${id}`} className="btn btn-primary">See More</Link>
    </div>
  </div>
</div>
  )
}

export default BrandCard