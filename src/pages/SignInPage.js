import React, { useState } from 'react';

import SignIn from '../components/SignIn';

import '../css/SignIn.css';

const SignInPage = () => {
    
    const testUser = {
        name: "TestUser",
        passoword:"test123",
    }
    
    const [user, setUser] = useState({name:"", passoword:""});
    const [error, useError] = useState("");
    // const [details, setDetails] = useState({name:"", passoword:""});

    const Login = (details) => {
        console.log(details)
        if(details.name === testUser.name && details.passoword === testUser.passoword){
            console.log("logged");
            setUser({
                name: details.name,
            })
        }else{
            console.log("Details not match!");
        }
    }

    return(
        <div>
            {(user.name !== "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button>Logout</button>
                </div>
            ) : (
                <SignIn Login={Login} error={error}/>
            )}
        </div>
    );
}

export default SignInPage;