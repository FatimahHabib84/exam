import React , { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import HomeItem from '../component/HomeItem'


function Home() {
  const [data, setData] = useState([])
  const [user, setUser] = useState({})
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
    .then(function(res) {
      // console.log(res.data)
      setData(res.data)
    })
  }, [])
  

  return (
    <div className='flex flex-col items-center min-h-screen bg-white'>


      <div className='grid grid-cols-6 gap-2 w-full bg-primary p-2 items-center'>
        <img className='w-24' src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White.png" />
        <div className='flex flex-col items-center justify-center'>
          <p className='text-sm text-base-100'>Delever to</p>
          <p className='text-sm text-white font-bold'>Saudi Arabia</p>
        </div>
        <div className='flex flex-row col-span-2 w-full rounded-lg'>
          <input value={search} onChange={(e)=>setSearch(e.target.value)} className='search h-8 w-full' type="text" />
          <svg className="w-6 h-8 p-1 text-gray-800 dark:text-white bg-neutral" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="black" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
        </svg>
        </div>
        <h1 className='font-bold text-white text-center'>{localStorage.getItem('username')}</h1>
        <button className='w-fit h-fit z-50' onClick={()=>navigate('/Cart')}><svg role='button' className="w-6 h-6 text-gray-800 text-end dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
      </svg></button>

      </div>

      {/* <div className='flex flex-row gap-2 w-full bg-secondary'>

      </div> */}
    









      {data.length!==0&&<div className='grid grid-cols-4 max-sm:grid-cols-1 w-full'>
        {
          data.filter(item => item.title===''? item : item.title.toLowerCase().includes(search.toLowerCase()) ).map(item => 
          
          <HomeItem 
          key={item.id}
          id = {item.id}
          image={item.image}
          category={item.category}
          title={item.title}
          // description={item.description}
          rate={item.rating.rate}
          price={item.price}

            />
          )
        }
      </div>}
        
    </div>
  )
}

export default Home