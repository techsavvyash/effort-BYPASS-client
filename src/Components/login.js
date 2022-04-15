import React from "react"
import "./login.css"
const Login = () => {
    return (
        <>
            <nav className="navbar" >
                <div className="title" >EFFORT-BYPASS</div>
            </nav>
            <div className="login">

                <form className="form-lg">
                    <div className="form-heading">
                        LOGIN
                    </div>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text"  className="text" name="uname" required />

                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" className="text" name="pass" required />

                    </div>
                    <div className="button-container">       
                    <button className="button-lg" type="submit" >Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;