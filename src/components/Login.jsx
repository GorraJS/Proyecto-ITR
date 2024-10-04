import { useState } from 'react';
import '../index.css'
function Login() {
    const [Person,SetPerson]=useState({
        Gmail:"",
        Password:""
    })
    const Submit=(event)=>{
        event.preventDefault()
        console.log(Person)
    }
    const Handle=(event)=>{
        [Name,Value]=event.target
        SetPerson({
            ...Person,Name:Value
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