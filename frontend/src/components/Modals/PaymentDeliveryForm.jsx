import React from 'react'
import { useState } from 'react'

export default function PaymentDeliveryForm() {
  const [swishPayment, setSwishPayment] = useState(true);


  const completeOrder = (e) => {
    e.preventDefault();
  }
  return (
    <form className='z-10 absolute w-1/2 h-full p-8 mx-[25%] text-left border bg-white'>
      <h2 className='text-center font-semibold text-xl mb-4'>Payment and Delivery</h2>
      <hr />
      <h2 className='font-semibold text-xl mb-4'>Payment</h2>
      <hr />
      <div className='p-8'>
        <label className='block text-left' htmlFor="swish-number">Mobile number</label>
        <input id='swish-number' className='border border-gray-300 w-96' type="text" placeholder='Number connected to Swish' />
      </div>
      <h2 className='font-semibold text-xl mb-4'>Delivery details</h2>
      <hr />
      <section id='delivery-details' className='p-8'>
        <div className='mb-5'>
          <label className='block text-left' htmlFor="first-name">First name</label>
          <input id='first-name' className='border border-gray-300 w-96' type="text" placeholder='First name'/>
        </div>
        <div className='mb-5'>
          <label className='block text-left' htmlFor="last-name">Last name</label>
          <input id='last-name' className='border border-gray-300 w-96' type="text" placeholder='Last name'/>
        </div>
        <div className='mb-5'>
          <label className='block text-left' htmlFor="address">Address</label>
          <input id='address' className='border border-gray-300 w-96' type="text" placeholder='Address'/>
        </div>
        <div className='mb-5'>
          <label className='block text-left' htmlFor="postal-code">Postal code</label>
          <input id='postal-code' className='border border-gray-300 w-96' type="text"   placeholder='Postal code'/>
        </div>
        <div className='mb-5'>
          <label className='block text-left' htmlFor="city">City</label>
          <input id='city' className='border border-gray-300 w-96' type="text" placeholder='City'/>
        </div>
        <div className='mb-5'>
          <label className='block text-left' htmlFor="email">Email</label>
          <input id='email' className='border border-gray-300 w-96' type="text" placeholder='Email'/>
        </div>
        <div className='mb-5'>
          <label className='block text-left' htmlFor="mobile-number">Mobile number</label>
          <input id='mobile-number' className='border border-gray-300 w-96' type="text"   placeholder='Mobile number'/>
        </div>
        <div >
          <button className='m-4 p-3 border rounded bg-[#953A3A] text-white'>Complete Purchase</button>
          <button className='m-4 p-3 border rounded border-black'>Cancel Order</button>
        </div>
      </section>
    </form>
  )
}
