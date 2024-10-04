import { useState } from 'react';
import '../index.css'
function Signup() {
    const [Person,SetPerson]=useState({
      Name:"",
      LastName:"",
      Age:"",
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
              <h3>Nombre</h3>
            <input 
            onChange={Handle}
            name='Name'
            type='text'
            ></input>
            
            <h3>Apellido</h3>
            <input 
            onChange={Handle}
            name='LastName'
            type='text'
            ></input>
            
            <h3>Edad</h3>
            <input 
            onChange={Handle}
            name='Age'
            type='number'
            ></input>
            
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


export default Signup;