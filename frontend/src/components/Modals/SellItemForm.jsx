import axios from "axios";
import { useContext, useState } from "react";
import { OpenSellItemContext } from "../../context/OpenSellItemContext";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import { IsLoggedInContext } from "../../context/IsLoggedInContext";

export default function SellItemForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const {loggedInUser, setLoggedInUser} = useContext(LoggedInUserContext);
  const {openSellItem, setOpenSellItem} = useContext(OpenSellItemContext);
  const [seller, setSeller] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(description);
    console.log(price);
    console.log(category);
    console.log(loggedInUser);
    setSeller(loggedInUser);
console.log(seller);

    axios.post("http://localhost:4000/additem", {title, description, price, category, seller}, {
        withCredentials: true
      })
    .then(result => {
      console.log(result);
      alert("Your item has been added")
    })
    .catch(err => {
      console.log(err);
      alert("Ooops! Something is wrong!");
    })
  }

  return (
    <form onSubmit={addItem} className='z-10 absolute w-1/2 h-full p-8 mx-[25%] text-left border bg-white'>
       <button className='' onClick={() => setOpenSellItem(false)}>Close</button>
       <h2 className='text-center font-semibold text-xl mb-4'>Sell your item</h2>
       <hr />
        <div className='p-5 mt-4'>
            <label className='block mb-2' htmlFor="title">Title</label>
            <input
              className='border border-gray-300 w-96 h-8'
              type="text"
              name="title"
              id="title"
              placeholder='Product title (e.g. Volvo V70)'
              onChange={(e) => setTitle(e.target.value)}
              required/>
          </div>
          <div className='p-5'>
            <label className='block mb-2' htmlFor="price">Price</label>
            <input
              className='border border-gray-300 w-96 h-8'
              type="number"
              name="price"
              id="price"
              placeholder='The cost of the product (e.g. 30 000)'
              onChange={(e) => setPrice(e.target.value)}
              required/>
          </div>
          <div className='p-5'>
            <label className='block mb-2' htmlFor="telephone-number">Description</label>
            <textarea
              className='border border-gray-300 w-96 h-28'
              type="text"
              name="telephone-number"
              id="telephone-number"
              placeholder='Describe your product
(e.g. An Volvo V70 of 2007 year model that has gone 13000 miles and in pristine condition)'
              onChange={(e) => setDescription(e.target.value)}
              required/>
          </div>
          <div className='p-5'>
            <label className='block mb-2' htmlFor="category">Category</label>
            <select name="category" onChange={(e) => setCategory(e.target.value)} id="category" className='border border-gray-300 w-96 h-8'>
              <option value="">Select a category</option>
              <option value="Cars and vehicles">Cars & Vehicles</option>
              <option value="Clothes and shoes">Clothes & Shoes</option>
              <option value="Home">Home</option>
              <option value="Electronics">Electronics</option>
              <option value="Hobbies">Hobbies</option>
            </select>
          </div>
          <div>
            <button className='m-4 p-3 border rounded bg-[#953A3A] text-white'>Add item</button>
          </div>
    </form>
  )
}
