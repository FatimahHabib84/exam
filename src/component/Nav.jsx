import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate()
  return (
  <div className='flex flex-row gap-2 w-full bg-primary justify-between p-2 items-center'>
        <img className='w-24' src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White.png" />
        
        <div className='flex flex-row gap-4 items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
              <p className='text-sm text-base-100'>Delever to</p>
              <p className='text-sm text-white font-bold'>Saudi Arabia</p>
            </div>
            <h1 className='font-bold text-white text-center'>{localStorage.getItem('username')}</h1>
            <svg role='button' onClick={()=>navigate('/Cart')} className="w-6 h-6 text-gray-800 text-end dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
          </svg>
        </div>

      </div>

  )
}

export default Nav