import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeItem(props) {
    const navigate = useNavigate()
  return (
    <div key={props.id} className='bg-base-100 flex flex-col gap-2 items-start w-[22rem] p-2 m-auto h-[43rem] my-2'>
        <img className='w-64 h-96 self-center' src={props.image} />
        <div className='badge badge-accent text-black'>{props.category}</div>
        <h1 className='font-bold text-lg'>{props.title}</h1>
        {/* <h1 className='text-lg text-wrap break-all'>{props.description}</h1> */}
        <div className='flex flex-row gap-4 items-center'>
            <p className='text-sm text-neutral'>&#9733; &#9733; &#9733; &#9733; &#9734;</p>
            <p className='text-sm text-accent'>{props.rate}</p>
        </div>
        <h1 className='text-xl font-bold'>{props.price}$</h1>
        <p className='text-sm font-semibold'>Delivery Thu, Jul 18</p>
        <p className='text-sm'>Ships to Saudi Arabia</p>
        <button className='btn btn-neutral' onClick={()=>navigate(`/ItemDetailes/${props.id}`)} >Detailes</button>
    </div>
  )
}

export default HomeItem