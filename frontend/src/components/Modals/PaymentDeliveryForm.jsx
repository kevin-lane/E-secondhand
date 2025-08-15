import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { SelectedItemContext } from '../../context/SelectedItemContext';
import axios from 'axios';
import { IsLoggedInContext } from '../../context/IsLoggedInContext';

export default function PaymentDeliveryForm() {
  const [swishPayment, setSwishPayment] = useState(true);
  const [swishNumber, setSwishNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const {selectedItem, setSelectedItem} = useContext(SelectedItemContext);
  const {isLoggedIn} = useContext(IsLoggedInContext);

  const buyer = {
    swishNumber,
    firstName,
    lastName,
    address,
    postalCode,
    city,
    email,
    mobileNumber,
  };

  const { password, ...seller } = selectedItem.seller;


  const completeOrder = (e) => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(address);
    console.log(postalCode);
    console.log(city);
    console.log(email);
    console.log(mobileNumber);
    console.log(selectedItem);
    console.log(selectedItem.seller);
    console.log(isLoggedIn);
    console.log(buyer);
    console.log(seller);

    axios.post("http://localhost:4000/makeorder", {selectedItem, seller, buyer}, {
        withCredentials: true
      })
      .then(result => {
          console.log(result);
          alert("Thank you for your order");
      })
      .catch(err => {
        console.log(err);
        alert("Something wrong!");
      })

  }
  return (
    <form className='z-10 absolute w-1/2 h-full p-8 mx-[25%] text-left border bg-white'>
      <h2 className='text-center font-semibold text-xl mb-4'>Payment and Delivery</h2>
      <hr />
      <h2 className='font-semibold text-xl mb-4'>Payment</h2>
      <hr />
      <div className='p-8'>
        <label className='block text-left' htmlFor="swish-number">Mobile number</label>
        <input
          id='swish-number'
          className='border border-gray-300 w-96' type="text"
          placeholder='Number connected to Swish'
          onChange={(e) => setSwishNumber(e.target.value)}
          required
        />
      </div>
      <h2 className='font-semibold text-xl mb-4'>Delivery details</h2>
      <hr />
      <section id='delivery-details' className='p-8'>
        <div className='mb-5'>
          <label className='block text-left' htmlFor="first-name">First name</label>
          <input
            id='first-name'
            className='border border-gray-300 w-96' type="text"
            placeholder='First name'
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className='mb-5'>
          <label className='block text-left' htmlFor="last-name">Last name</label>
          <input
            id='last-name'
            className='border border-gray-300 w-96' type="text"
            placeholder='Last name'
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className='mb-5'>
          <label className='block text-left' htmlFor="address">Address</label>
          <input
            id='address'
            className='border border-gray-300 w-96' type="text"
            placeholder='Address'
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label className='block text-left' htmlFor="postal-code">Postal code</label>
          <input
            id='postal-code'
            className='border border-gray-300 w-96' type="text"
            placeholder='Postal code'
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label className='block text-left' htmlFor="city">City</label>
          <input
            id='city'
            className='border border-gray-300 w-96' type="text"
            placeholder='City'
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label className='block text-left' htmlFor="email">Email</label>
          <input
            id='email'
            className='border border-gray-300 w-96' type="text"
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label className='block text-left' htmlFor="mobile-number">Mobile number</label>
          <input
            id='mobile-number'
            className='border border-gray-300 w-96' type="text"
            placeholder='Mobile number'
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div >
          <button className='m-4 p-3 border rounded bg-[#953A3A] text-white' onClick={completeOrder}>Complete Purchase</button>
          <button className='m-4 p-3 border rounded border-black'>Cancel Order</button>
        </div>
      </section>
    </form>
  )
}
