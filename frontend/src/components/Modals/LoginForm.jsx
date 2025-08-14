import axios from 'axios';
import XIcon from '../Icons/XIcon';
import { useContext, useState } from 'react';
import { IsLoggedInContext } from '../../context/IsLoggedInContext';
import { LoggedInUserContext } from '../../context/LoggedInUserContext';


export default function LoginForm(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {isLoggedIn, setIsLoggedIn} = useContext(IsLoggedInContext);
  const {loggedInUser, setLoggedInUser} = useContext(LoggedInUserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/login', {email, password})
    .then(result => {
      console.log(result.data.user)
      if(result.data.message === "Success"){
        console.log("Logged in");
        setIsLoggedIn(true);
        setLoggedInUser(result.data.user);
        console.log(loggedInUser);

      }
     })
     .catch(err => console.log(err))
  }

  return (
    <form onSubmit={handleLogin} className='z-10 absolute w-1/2 h-full p-8 mx-[25%] text-left border bg-white'>
      <button className='' onClick={props.close}><XIcon /></button>
      <h2 className='text-center font-semibold text-xl mb-4'>Log in to your account</h2>
      <hr />
      <div className='p-5 mt-4'>
        <label className='block mb-2' htmlFor="email">Email</label>
        <input
          className='border border-gray-300 w-96 h-8'
          type="email"
          name="email"
          id="email"
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='p-5'>
        <label className='block mb-2' htmlFor="">Password</label>
        <input
          className='border border-gray-300 w-96 h-8'
          type="password"
          name="password"
          id="password"
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p className='p-5'>Don't you have an account? Please create one <button onClick={props.createAccount} className=''>here</button></p>
      <div>
        <button className='m-4 p-3 border rounded bg-[#953A3A] text-white'>Log in</button>
      </div>
    </form>
  )
}
