import React from 'react'
import InputField from './InputField'

export default function CustomerInfo({name,phone, address}) {
  return (
    <div className='m-4 rounded-xl p-5 pb-1.5'>
      <h1 className='text-orange text-b10 align-middle text-center mb-2 md:mb-10 md:text-b5'>Thông tin nhận hàng</h1>
      <InputField type="text" holder="Họ tên người nhận" label="Họ và tên người nhận" value={name}/>
      <InputField type="tel" holder="Số điện thoại người nhận" label="Số điện thoại người nhận" value={phone}/>
      <InputField type="text" holder="Địa chỉ nhận hàng" label="Địa chỉ nhận hàng" value={address}/>
    </div>
  )
}
