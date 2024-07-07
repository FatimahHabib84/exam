import React, { useState, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'
import axios from 'axios'


function CartItem(props) {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [tempId, setTempId] = useState(0)
    const [dialog, setDialog] = useState('')

    

    useEffect(() => {
        axios.get(`https://665736bb9f970b3b36c86669.mockapi.io/test/${localStorage.getItem('id')}`)
        .then(function (res) {
            setUser(res.data)
            
        })
    }, [])
    


    const deleteItem = () => {
        setTempId(props.id)
        setDialog('Are you sure to delete this item?')
        document.getElementById('my_modal_1').showModal()
    }

    const insureDelete = () => {
        if(user.products!==undefined){
            let arr = user.products
           let temp = user.products.find(element => element.id == props.id)
           if(temp!==undefined){
            arr.pop(temp)
            setUser({...user,products:arr})
            axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/test/${localStorage.getItem('id')}`,{
                username:user.username,
                email:user.email,
                pwd:user.pwd,
                products:arr
            })
            .then(function () {
                document.getElementById('my_modal_2').showModal()
            })
           }
        }
    }


  return (
    <div className='flex flex-row justify-between items-center p-2 bg-white max-sm:flex-col' key={props.id} >
        <div className='flex flex-row gap-4 items-center'>
            <img className='w-40 ' src={props.image} />
            <div className='flex flex-col gap-1'>
            <div className='badge badge-accent text-black'>{props.category}</div>
                <p>{props.title}</p>
                <div className='flex flex-row gap-4 items-center'>
                    <p className='text-sm text-neutral'>&#9733; &#9733; &#9733; &#9733; &#9734;</p>
                    <p className='text-sm text-accent'>{props.rate}</p>
                </div>
                <h1 className='text-xl font-bold'>{props.price}$</h1>
            </div>
        </div>
        <div className='self-end flex flex-row gap-2'>
            <button className='self-end btn btn-neutral' onClick={()=>deleteItem()} >
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                </svg>
            </button>
            <button onClick={()=>navigate('/')} className='self-end btn btn-base'>Back to Home</button>
        </div>
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Warrning</h3>
            <p className="py-4">{dialog}</p>
            <div className="modal-action">
            <form method="dialog">
                <button className='btn btn-neutral mr-2' onClick={()=>insureDelete()}>Delete</button>
                <button className="btn btn-base">Close</button>
            </form>
            </div>
        </div>
        </dialog>
        <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
            <p className="py-4">Item deleted succussfully!</p>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn btn-base">Close</button>
            </form>
            </div>
        </div>
        </dialog>

    </div>
  )
}

export default CartItem