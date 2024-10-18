import "./Footer.css";
import '../index.css'
import Login from "./Login";
import { useState } from 'react';
import Signup from "./Signup";
function Inicio() {
    const [SignupIsOpen,SetSignupIsOpen]=useState(false);
    const [LoginIsOpen,SetLoginIsOpen]=useState(false);
        return (
            <>
            {SignupIsOpen &&  <div className='background' onClick={()=>SetSignupIsOpen(false)}>
          .
          
          </div>}
          {LoginIsOpen &&  <div className='background' onClick={()=>SetLoginIsOpen(false)}>
          .
          </div>}
{SignupIsOpen && <Signup></Signup>}
{LoginIsOpen && <Login></Login>}

<button onClick={()=>SetSignupIsOpen(true)}>Signup</button>
<button onClick={()=>SetLoginIsOpen(true)}>Login</button>

            </>
        );
    }
export default Inicio;