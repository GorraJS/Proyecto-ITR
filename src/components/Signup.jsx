import { useState, React } from 'react';
import '../index.css'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { app } from './db';
const auth = getAuth(app)
const db = getFirestore(app);

function Signup() {

  const [Acount, SetAcount] = useState({
    Name: "",
    LastName: "",
    Age: "",
    Gmail: "",
    Password: "",
    CPassword: ""
  })
  const [error, SetError] = useState({
    Name: "",
    LastName: "",
    Age: "",
    Gmail: "",
    Password: "",
    CPassword: ""
  })
  const DatasNames = ["Name", "LastName", "Age", "Gmail", "Password", "CPassword"]

  const AddDataUser = async (id) => {
    await setDoc(doc(db, "Users", id), {
      name: Acount.Name,
      LastName: Acount.LastName,
      Age: Acount.Age
    });
  };
  const Submit = async (event) => {
    event.preventDefault()

    for (let i = 0; i < 6; i++) {
      const dataName = DatasNames[i]
      console.log(dataName)

      if (Acount[dataName] == "") {
        SetError({ ...error, [dataName]: "Complete este valor" })
        return
      }
      else {
        SetError({ ...error, [dataName]: "" })
      }
    }
    await createUserWithEmailAndPassword(auth, Acount.Gmail, Acount.Password)
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage == "Firebase: Error (auth/email-already-in-use).") {
          SetError({ ...Error, Gmail: "La cuenta ya esta en uso" })
        }
      });
    await signInWithEmailAndPassword(auth, Acount.Gmail, Acount.Password)
      .then((userCredential) => {
        AddDataUser(userCredential["user"].uid)
      })

  }
  const Handle = (event) => {
    let name = event.target.name
    let value = event.target.value
    SetAcount({
      ...Acount, [name]: value
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
            ></input>
            <h5>{error.Name}</h5>
            <h3>Apellido</h3>
            <input className={"SignupInputs"}
              onChange={Handle}
              name='LastName'
              type='text'
            ></input>
            <h5>{error.LastName}</h5>
            <h3>Edad</h3>
            <input className={"SignupInputs"}
              onChange={Handle}
              name='Age'
              type='number'
            ></input>
            <h5>{error.Age}</h5>
            <h3>Gmail</h3>
            <input className={"SignupInputs"}
              onChange={Handle}
              name='Gmail'
              type='email'
            ></input>
            <h5>{error.Gmail}</h5>
            <h3>contraseña</h3>
            <input className={"SignupInputs"}
              onChange={Handle}
              name='Password'
              type='password'
            ></input>
            <h5>{error.Password}</h5>
            <h3>Confirmar contraseña</h3>
            <input className={"SignupInputs"}
              onChange={Handle}
              name='CPassword'
              type='password'
            ></input>
            <h5>{error.CPassword}</h5>
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