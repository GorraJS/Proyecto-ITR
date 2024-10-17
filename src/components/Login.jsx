import { useState,React } from 'react';
import '../index.css'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { app } from './db';
const auth=getAuth(app)
function Login() {
    const [Acount,SetAcount]=useState({
      Name:"",
      LastName:"",
      Age:"",
      Gmail:"",
      Password:""
    })
    const Submit= async(event)=>{
       event.preventDefault()
        await signInWithEmailAndPassword(auth,Acount.Gmail,Acount.Password)
    }
    const Handle=(event)=>{
      let name = event.target.name
      let value = event.target.value
      console.log(name,value)
        SetAcount({
            ...Acount,[name]:value
        })
    }
    return (
        <div>
        <div className="popup">
         
          <div>
            <form onSubmit={Submit}>
            <h3>Gmail</h3>
            <input 
            onChange={Handle}
            name='Gmail'
            type='email'
            ></input>
              <h3>contraseña</h3>
            <input 
            onChange={Handle}
            name='Password'
            type='password'
            ></input>
            <br></br>
            <button type='Submit'>Submit</button>
            <br></br>
            <br></br>
            </form>
          </div>
      </div>
      </div>
    );
  };


export default Login;