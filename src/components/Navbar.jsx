import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {

    const [isActive, setIsActive] = useState(false);

    function stateChange(){
        setIsActive(!isActive)
    }

  return (
    <div className='container mx-auto my-auto flex justify-between items-center border-b-[5px] border-green-500'>
            <h1 className='text-[60px] text-green-500 font-extrabold m-[30px]'>ToDo</h1>
            <div className="absolute right-40 mt-5 w-24">
            <RxHamburgerMenu onClick={stateChange} size={40} className='text-green-500 '/>
            {isActive ? <>
            <div className="absolute right-8 mt-5 w-24 bg-white border border-green-200 rounded p-[10px]">
            <ul>
              <li className='text-green-500'>Home</li>
              <li className='text-green-500'>About</li>
              <li className='text-green-500'>Contact</li>
            </ul> 
            </div>
            </> : ''}
            </div>
    </div>
  )
}

export default Navbar