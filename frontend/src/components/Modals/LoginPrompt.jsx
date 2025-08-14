import { useContext } from "react";
import { ShowModalContext } from "../../context/ShowModalContext";

export default function LoginPrompt() {
  const {show, setShow} = useContext(ShowModalContext);

  return (
    <div className='bg-slate-300 p-8'>
      <p>Please log in to chat</p>
      <button onClick={() => setShow(true)} className="bg-blue-700 p-4 text-white">Log in</button>
    </div>
  )
}
