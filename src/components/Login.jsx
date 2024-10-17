import { useState,React } from 'react';
import '../index.css'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { app } from './db';
const auth=getAuth(app)

function Login(props) {

    const [Acount,SetAcount]=useState({
      Name:"",
      LastName:"",
      Age:"",
      Gmail:"",
      Password:""
    })
    const Submit= (event)=>{
       event.preventDefault()
       signInWithEmailAndPassword(auth,Acount.Gmail,Acount.Password)
       .then((userCredential) => { 
        props.send(userCredential["user"].uid)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    }
    const Handle=(event)=>{
      let name = event.target.name
      let value = event.target.value
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
            <input className={"SignupInputs"}  
            onChange={Handle}
            name='Gmail'
            type='email'
            ></input>
              <h3>contraseña</h3>
            <input className={"SignupInputs"}  
            onChange={Handle}
            name='Password'
            type='password'
            ></input>
            <br></br>
            <button className="SignupButton" type='Submit'>Submit</button>
            <br></br>
            <br></br>
            </form>
          </div>
      </div>
      </div>
    );
  };


export default Login;