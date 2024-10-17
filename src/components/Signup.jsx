import { useState,React } from 'react';
import '../index.css'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore,doc, setDoc  } from 'firebase/firestore'
import { app } from './db';
const auth=getAuth(app)
const db = getFirestore(app);

function Signup() {
  
    const [Acount,SetAcount]=useState({
      Name:"",
      LastName:"",
      Age:"",
      Gmail:"",
      Password:""
    })
    const AddDataUser = async(id) => {
      await setDoc(doc(db, "Users", id), {
        name: Acount.Name,
        LastName: Acount.LastName,
        Age: Acount.Age
      });
    }; 
    const Submit= async(event)=>{
       event.preventDefault()
        await createUserWithEmailAndPassword(auth,Acount.Gmail,Acount.Password) 
        await signInWithEmailAndPassword(auth,Acount.Gmail,Acount.Password)
        .then((userCredential) => { 
          AddDataUser(userCredential["user"].uid)
       })
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
              <h3>Nombre</h3>
            <input className={"SignupInputs"} 
            onChange={Handle}
            name='Name'
            type='text'
            required 
            ></input>
            
            <h3>Apellido</h3>
            <input className={"SignupInputs"} 
            onChange={Handle}
            name='LastName'
            type='text'
            required 
            ></input>
            
            <h3>Edad</h3>
            <input className={"SignupInputs"} 
            onChange={Handle}
            name='Age'
            type='number'
            required 
            ></input>
            
            <h3>Gmail</h3>
            <input className={"SignupInputs"} 
            onChange={Handle}
            name='Gmail'
            type='email'
            required 
            ></input>
              <h3>contraseña</h3>
            <input className={"SignupInputs"} 
            onChange={Handle}
            name='Password'
            type='password'
            required 
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


export default Signup;