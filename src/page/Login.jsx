import axios from 'axios'
import React, { useState ,useEffect } from 'react'
import { useNavigate , Link } from 'react-router-dom'


function Login() {

    // use states
    const [user, setUser] = useState({
        email:'',
        pwd:'',
    })
    // const [data, setData] = useState({})
    // let data = ''
    const [dialog, setDialog] = useState('')

    const navigate = useNavigate()


    // useEffect(() => {
    // axios.get(`https://665736bb9f970b3b36c86669.mockapi.io/test`)
    // .then(function(res){
    //     const temp = res.data.find(item => item.email==user.email)
    //     // setData(temp)
    // })
    // }, [])
    
    // functions
    const login = () => {
        let data = undefined
        axios.get(`https://665736bb9f970b3b36c86669.mockapi.io/test`)
        .then(function(res){
            data = res.data.find(item => item.email==user.email)
            // setData(temp)
        
        console.log(data)
        if (data!==undefined){
            if(user.email=='' || user.pwd==''){
                setDialog('Enter All information!')
                document.getElementById('my_modal_1').showModal()

            } else if(user.pwd !== data.pwd){
                setDialog('Wrong Password!')
                document.getElementById('my_modal_1').showModal()

            } else if (user.email == data.email && user.pwd == data.pwd){
                localStorage.setItem('username',data.username)
                localStorage.setItem('id',data.id)
                setDialog('You have login successufully!')
                document.getElementById('my_modal_1').showModal()
                setTimeout(() => {
                    navigate('/')
                }, 2000);
                        
            }
        } else {
            setDialog('Enter Valid Email!')
            document.getElementById('my_modal_1').showModal()
                
        }
    })
    }


  return (
    <div className='felx flex-col justify-center items-center w-screen h-screen py-[15%]'>
    <div className="card-body w-1/2 max-sm:w-full self-center m-auto">
    <h1 className='font-bold text-3xl'>Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input value = {user.email} onChange={(e)=>setUser({...user,email:e.target.value})} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input value = {user.pwd} onChange={(e)=>setUser({...user,pwd:e.target.value})} type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to={'/Signup'} className="label-text-alt link link-hover">Don't have an account? Signup</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={()=>login()} className="btn btn-neutral">Login</button>
        </div>
      </div>
      
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Warrning</h3>
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

export default Login