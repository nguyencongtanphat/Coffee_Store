import React from 'react'
import { FormatterService } from "../../../service";

export default function Item({item}) {
  return (
    <div className='flex' key={item.id}>
      <div className='flex-auto w-80 md:w-fit flex flex-col items-start'>
        <label className='text-b15 text-black m-2 md:text-b10 ml-4 md:ml-7 md:text-bold'>{item.Quantity} x {item.Item.Name}</label>
        <p className='text-b15 text-grey200 m-2 ml-8 md:text-b11 md:ml-10 md:my-3'>Size: {item.Size}</p>
      </div>
      <div className='flex-auto '>
        <p className='text-b13 mt-5 text-black text-end pl-6 md:text-b9 md:pl-44'>{FormatterService.format(item.Price*item.Quantity)}</p>
      </div>
    </div>
  )
}