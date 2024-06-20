import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
   <>
   <div className='w-full h-[100vh] bg-sky-500/75 flex justify-center items-center flex-col gap-[50px]'>
    <h1 className='text-white text-6xl font-bold'>WELCOME TO DASHBOARD</h1>
    <div>
        <Link to='/customer' className='p-4 bg-cyan-500 hover:bg-cyan-600 shadow-xl text-white rounded-2xl text-2xl font-bold'>FOR CUSTOMER</Link>
        <Link to='/product'  className='p-4 bg-cyan-500 hover:bg-cyan-600 shadow-xl text-white rounded-2xl text-2xl font-bold ml-[20px]'>FOR PRODUCT</Link>
    </div>
   </div>
   </>
  )
}

