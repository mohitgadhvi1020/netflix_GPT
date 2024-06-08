import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSign , setIsSign] = useState(false)
  return (
    <div>
      <Header />
    <div className='h-full w-full absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='bg'
        />
        </div>
        <form className='bg-opacity-80 w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl my-4'>{isSign ? "Sign In" : "Sign Up"}</h1>
            <input type='text' placeholder='Email address' className='p-4 bg-gray-700 my-4 w-full' />
            <input type='password' placeholder='Password' className='p-4 bg-gray-700 my-4 w-full ' />
            <button className='p-4 my-4 w-full bg-red-600 rounded-lg ' >{isSign ? "Sign In" : "Sign Up"}</button>
          <p className='text-center'>{isSign ? "New to Netflix? " : "Already have an account? "} <span onClick={() => setIsSign(!isSign)} className='text-red-600 cursor-pointer'>{isSign ? "Sign Up now." : "Sign In now."}</span></p>
        </form>

    </div>
  )
}

export default Login