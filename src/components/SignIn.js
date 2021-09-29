import React, { useState } from 'react';

const SignIn = ({ Login, error }) => {

    const [details, setDetails] = useState({name: "", passoword: ""})
    
    const submintHandler = (event) => {
        event.preventDefault()

        Login(details)
    }

    return ( 
        <form onSubmit={submintHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/* ERROR */}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    onChange={(e) => setDetails({...details, name: e.target.value})} 
                    value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    onChange={(e) => setDetails({...details, passoword: e.target.value})} 
                    value={details.passoword}/>
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
     );
}
 
export default SignIn;
