import React, { useState, useEffect } from 'react'
import { useNavigate , Link } from 'react-router-dom'
import axios from 'axios'

function Signup() {

    // use states
    const [user, setUser] = useState({
        username:'',
        email:'',
        pwd:'',
        products:[],
    })
    const [chechPrevEmail, setChechPrevEmail] = useState()
    const [dialog, setDialog] = useState('')

    // other varibles
    const validateEmail = /^[a-zA-Z0-9-_.]*@[a-z.]*\.[a-z]{2,4}$/
    const navigate = useNavigate()

     useEffect(() => {
       
        axios.get(`https://665736bb9f970b3b36c86669.mockapi.io/test`)
        .then(function(res){
            const temp = res.data.find(item=>item.email==user.email)
            setChechPrevEmail(temp)
        })

     }, [user])
     


    // functions
    const signup = () => {
        if(chechPrevEmail==!undefined) {
            setDialog('You have signed up before!')
            document.getElementById('my_modal_1').showModal()
        } else {
            if(user.email=='' || user.pwd=='' || user.username==''){
                setDialog('Enter All Informations!')
                document.getElementById('my_modal_1').showModal()

            } else if(user.username.length<3){
                setDialog('Username must be more than 3 letters/numbers!')
                document.getElementById('my_modal_1').showModal()
                
            } else if(!validateEmail.test(user.email)){
                setDialog('Email is Wrong!')
                document.getElementById('my_modal_1').showModal()
                
            } else if(user.pwd.length<3){
                setDialog('Password must be more than 3 letters/numbers!')
                document.getElementById('my_modal_1').showModal()
                
            } else if (validateEmail.test(user.email) && user.username.length>=3 && user.pwd.length>=3){
                axios.post(`https://665736bb9f970b3b36c86669.mockapi.io/test`,{
                    username:user.username,
                    email:user.email,
                    pwd:user.pwd,
                    products:[]
                })
                .then(function(res){
                    console.log(res.data)
                    setDialog('You have signed up successufully!')
                    document.getElementById('my_modal_1').showModal()
                    setTimeout(() => {
                        navigate('/Login')
                    }, 2000)
                })
            }

        }

    }


  return (
    <div className='felx flex-col justify-center items-center w-screen h-screen py-[15%]'>
    <div className="card-body w-1/2 max-sm:w-full self-center m-auto">
    <h1 className='font-bold text-3xl'>Signup</h1>
    <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} placeholder="username" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" value={user.pwd} onChange={(e)=>setUser({...user,pwd:e.target.value})} placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to={'/Login'} className="label-text-alt link link-hover">Alredy have an account? Login</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={()=>signup()} className="btn btn-primary">Signup</button>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Warrning</h3>
            <p className="py-4">{dialog}</p>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
      </div>
  )
}

export default Signup