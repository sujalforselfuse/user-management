import React from 'react'
import profile from '../assets/profile.png';
import { Link } from 'react-router-dom';
export default function Left() {
    
  return (
    <div className='w-56 h-[100vh]' style={{'backgroundImage':'linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)'}}>
      <div className='flex flex-col items-center'>
            <div className='p-2 text-2xl text-white' style={{fontFamily:'Quicksand, sans-serif'}}>
                matriye.<span className='text-bold text-teal-500'>io</span> 
            </div>

            <div className='flex flex-col items-center'>
                <div>
                    <img className='w-24 h-24 rounded-full' src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg' alt="" srcset="" />
                </div>
                <div className='text-center'>
                    <h1 className='text-lg text-white font-semibold'>Mrunal</h1>
                    <h1>Economic Times</h1>
                </div>
            </div>

            <div className='mt-4 p-2 text-white flex flex-col h-[70vh] justify-around'>
                <Link className='hover:bg-purple-400 p-1' to='/'>Dashboard</Link>
                <Link className='hover:bg-purple-400 p-1' to='/'>User Mangement</Link>
                <Link className='hover:bg-purple-400 p-1' to='/'>Master Settings</Link>
                <Link className='hover:bg-purple-400 p-1' to='/'>Website</Link>
                <Link className='hover:bg-purple-400 p-1' to='/'>Application Job Post</Link>
                <Link className='hover:bg-purple-400 p-1' to='/'>LMS Management</Link>
                <Link className='hover:bg-purple-400 p-1' to='/'>Product Management</Link>
                <Link className='hover:bg-purple-400 p-1' to='/'>Blog Management</Link>
                <Link className='hover:bg-purple-400 p-1' to='/'>Sales Request</Link>
                <Link className='hover:bg-purple-400 p-1' to='/'>CRM</Link>
                <Link className='hover:bg-purple-400 p-1' to='/'>Report Management</Link>
                <Link className='hover:bg-purple-400 p-1' to='/'>ERP LMS</Link>
            </div>
      </div>
    </div>
  )
}
