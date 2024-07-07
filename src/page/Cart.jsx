import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CartItem from '../component/CartItem'
import Nav from '../component/Nav'


function Cart() {
    const [user, setUser] = useState()
    const [count, setCount] = useState(0)

    useEffect(() => {
      axios.get(`https://665736bb9f970b3b36c86669.mockapi.io/test/${localStorage.getItem('id')}`)
      .then(function (res) {
        setUser(res.data)
        res.data.products.forEach(e => 
            setCount(count+e.price)
          )
      })
    
    }, [])
    

  return (
    <div className='bg-base-100 min-h-screen flex flex-col gap-2'>
        <Nav/>
        {user!==undefined&&<div className='flex flex-col gap-2'>
            {
                user.products.length==0?
                <p className='text-3xl text-center m-auto'>No items!!</p>:
            user.products.map(item => 
            <CartItem 
            image={'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'}
            key={item.id}
            id = {item.id}
            category={item.category}
            title={item.title}
            // description={item.description}
            rate={item.rating.rate}
            price={item.price}
            /> )
            }
                        {user.products.length==0?null:
                        <h1 className='text-xl bg-white font-bold text-end'>total: {count} </h1>}
        </div>}

    </div>
  )
}

export default Cart