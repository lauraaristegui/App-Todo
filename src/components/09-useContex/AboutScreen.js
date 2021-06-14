import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const AboutScreen = () => {

    const handleClick = () => {
        setUser({});
    }

    const {user, setUser} = useContext(UserContext)
    return (
        <div>
             <h1>About screen</h1>
           <hr/> 

           <pre>
               {JSON.stringify(user, null, 3)}
           </pre>

           <button 
           className="btn btn-warning"
           onClick={handleClick}
           >
               Logout
           </button>
        </div>
    )
}

export default AboutScreen
