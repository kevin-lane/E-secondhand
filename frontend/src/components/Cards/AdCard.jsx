import React from 'react'

function AdCard(props) {
  return (
    <a key={props.id} href={props.id}>
      <div className='w-64 text-left bg-[#F1CBCB] p-4 rounded-lg m-8'>
        <img src="https://inspireonline.in/cdn/shop/files/iPhone_16_Teal_PDP_Image_Position_1__en-IN_6aed3712-113a-4579-8a71-41c02aa0003c.jpg?v=1727247732&width=250" alt="" />
        <strong className='text-2xl'>{props.title}</strong>
        <p className='mt-4 mb-4'>{props.description}</p>
        <strong className='text-xl'>{props.price}:-</strong>
        <p className='mt-4 mb-4'><span className='bg-red-500 font-semibold text-white p-1 rounded-full mr-2'>{props.seller.charAt(0)}</span>{props.seller}</p>
      </div>
    </a>
  )
}

export default AdCard;
