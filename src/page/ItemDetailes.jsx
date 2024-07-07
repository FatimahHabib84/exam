import axios from 'axios'
import React , { useEffect, useState } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import Nav from '../component/Nav'

function ItemDetailes() {
    const params = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState()
    const [user, setUser] = useState({})
    const [dialog, setDialog] = useState('')
    const id = params.id



    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(function (res) {
        setData(res.data)       
      })
      axios.get(`https://665736bb9f970b3b36c86669.mockapi.io/test/${localStorage.getItem('id')}`)
      .then(function(res){
        setUser(res.data)
      })
    }, [])

    const addToCart = () => {
        const arr = user.products
        arr.push(data)
        setUser({...user,products:arr})
        console.log(arr)
        axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/test/${localStorage.getItem('id')}`,{
            username:user.username,
            email:user.email,
            pwd:user.pwd,
            products:arr
        })
        .then(function (res) {
            console.log(res.data)
            setDialog('Items added to cart')
            document.getElementById('my_modal_1').showModal()
        })
    }


    
  return (
    <div className='flex flex-col items-center min-h-screen'>   
    <Nav/>
    <button className='btn btn-accent self-end m-4' onClick={()=>navigate('/')}>Back</button>

    {data!==undefined&&<div className='w-3/5 flex flex-row max-sm:flex-col max-sm:w-full p-4 gap-6 my-auto'>
        <img className='w-80 self-center m-auto ' src={data.image} />

        <div className='flex flex-col justify-between'>
            <div className='badge badge-accent text-black'>{data.category}</div>
            <h1 className='font-bold text-lg'>{data.title}</h1>
            <h1 className='text-lg text-wrap break-all'>{data.description}</h1>
            <div className='flex flex-row gap-4 items-center '>
                <p className='text-sm text-neutral'>&#9733; &#9733; &#9733; &#9733; &#9734;</p>
                <p className='text-sm text-accent'>{data.rating.rate}</p>
            </div>
                
            <h1 className='text-xl font-bold'>{data.price}$</h1>
            <p className='text-sm font-semibold'>Delivery Thu, Jul 18</p>
            <p className='text-sm'>Ships to Saudi Arabia</p>
            <button className='btn btn-neutral'onClick={()=>addToCart()} >add to cart</button>

        </div>
        
    </div>}
    
    <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">success</h3>
            <p className="py-4">{dialog}</p>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn btn-neutral">Close</button>
            </form>
            </div>
        </div>
        </dialog>
    </div>
  )
}

export default ItemDetailes