import React from 'react'

export default function PaymentDeliveryForm() {
  return (
    <form className='w-4/6'>
      <strong>Payment</strong>
      <hr />
      <div className='p-8'>
        <label className='block text-left' htmlFor="swish-number">Mobile number</label>
        <input id='swish-number' className='border border-gray-300 w-96' type="text" placeholder='Number connected to Swish' />
      </div>
      <strong>Delivery details</strong>
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
