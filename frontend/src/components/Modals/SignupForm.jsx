import { useContext, useState } from 'react';
import XIcon from '../Icons/XIcon';
import axios from 'axios';
import { HasAccountContext } from '../../context/HasAccountContext';

export default function SignupForm(props) {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [telephone, setTelephone] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const {hasAccount, setHasAccount} = useContext(HasAccountContext);

  const handleSignup = (e) => {
    e.preventDefault();
    if(password !== repeatPassword){
      alert("Passwords don't match");
    }
    else{
      console.log(fullName);
      console.log(email);
      console.log(telephone);
      console.log(password);

      axios.post('http://localhost:4000/signup', {fullName, email, telephone, password}, {
        withCredentials: true
      })
        .then(result => {
          console.log(result.status);
          alert("You are successfully a member of E-Secondhand");

        })
        .catch(err => {
          console.log(err);
          alert("User with this email already exists!");
        })
    }
  }
  return (
    <form onSubmit={handleSignup} className='z-10 absolute w-1/2 h-full p-8 mx-[25%] text-left border bg-white'>
          <button className='' onClick={props.close}>Close</button>
          <h2 className='text-center font-semibold text-xl mb-4'>Create a new account</h2>
          <hr />
          <div className='p-5 mt-4'>
            <label className='block mb-2' htmlFor="full-name">Full name</label>
            <input
              className='border border-gray-300 w-96 h-8'
              type="text"
              name="full-name"
              id="full-name"
              placeholder='Full Name'
              onChange={(e) => setFullName(e.target.value)}
              required/>
          </div>
          <div className='p-5'>
            <label className='block mb-2' htmlFor="email">Email</label>
            <input
              className='border border-gray-300 w-96 h-8'
              type="email"
              name="email"
              id="email"
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              required/>
          </div>
          <div className='p-5'>
            <label className='block mb-2' htmlFor="telephone-number">Telephone number</label>
            <input
              className='border border-gray-300 w-96 h-8'
              type="tel"
              name="telephone-number"
              id="telephone-number"
              placeholder='Telephone Number'
              onChange={(e) => setTelephone(e.target.value)}
              required/>
          </div>
          <div className='p-5'>
            <label className='block mb-2' htmlFor="password">Password</label>
            <input
              className='border border-gray-300 w-96 h-8'
              type="password"
              name="password"
              id="password"
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required/>
          </div>
          <div className='p-5'>
            <label className='block mb-2' htmlFor="repeat-password">Repeat Password</label>
            <input
              className='border border-gray-300 w-96 h-8'
              type="password"
              name="repeat-password"
              id="repeat-password"
              placeholder='Repeat Password'
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
          </div>
          <p className='p-5'>Do you already have an account? Please log in <button onClick={props.logIn} className=''>here</button></p>
          <div>
            <button className='m-4 p-3 border rounded bg-[#953A3A] text-white'>Sign up</button>
          </div>
        </form>
  )
}
