import React from "react"
import "./login.css"
const Login = () => {
    return (
        <>
            <nav className="navbar" >
                <div className="title" >EFFORT-BYPASS</div>
            </nav>
            <div className="login">

                <form className="form">
                    <div className="form-heading">
                        LOGIN
                    </div>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="uname" required />

                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />

                    </div>
                    <div className="button-container">       
                    <button type="submit" className="button">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;