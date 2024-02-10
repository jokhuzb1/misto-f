import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Ratings from '../helpers/Ratings';
import { Button } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import IncreasableButton from '../helpers/IncreasableButton';
export default function SingleProduct({item, listView}) {

  const dispatch = useDispatch()
  
  const list ='flex justify-between max-h-40 overflow-hidden  px-20'
  const card = ' max-w-64 min-w-54 max-h-96 min-h-96'
  const {id, title, price, category, description, image,rating} = item;
  const editText = title?.slice(0, 20)
  useEffect(()=>{
    console.log(id)
  },[])
  return (
    <div className={`mb-20 bg-cream shadow-md`}>
    <Link to={`${listView ? '':'/singleProduct/'+ id}`}>
      <div className={`relative ${listView ? list : card}`}>
        <img src={image} alt="" className={`${listView ?'object-scale-down w-40' :'object-fill  h-72 w-64'}  mix-blend-multiply mb-5` } />
        <div className='p-2 flex flex-col justify-between '>
        <h2 className='capitalize  text-gray-600 text-lg font-thin ' >{editText}</h2>
        {listView && (
          <div className='flex justify-between'>

          <Button onClick={()=>dispatch(addItem({id, title, price, category, image, rating, description}))} className='rounded-none mr-1'>ADD TO CART</Button>
          <Link to={`/singleProduct/${id}`}><Button className='mr-2 rounded-none cursor-pointer'variant='outlined'>View Item</Button></Link>
          </div>
        )}
        <div className='flex justify-between'>
            <span className='font-bold'>$ {price}</span>
            <Ratings rating={rating}/>
      </div>  
      {item?.onSale && <span className='absolute top-0 left-0 text-white bg-sale px-1'>-50%</span>}
        </div>
      </div>
    </Link>
    </div>

  )
}
