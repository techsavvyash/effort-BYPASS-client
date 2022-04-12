import React from "react"
import "./signup.css"
const SignUp = () => {
    return (
        <>
            <nav className="navbar" >
                <div className="title" >EFFORT-BYPASS</div>
            </nav>
            <div className="SignUp">

                <form className="form">
                    <div className="form-heading">
                        SignUp
                    </div>
                    <div className="input-container">
                        <label>First Name </label>
                        <input type="text" name="fname" required />

                    </div>
                    <div className="input-container">
                        <label>Last Name </label>
                        <input type="text" name="lname" required />

                    </div>
                    <div className="input-container">
                        <label>Email ID </label>
                        <input type="email" name="email" required />

                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />

                    </div>
                    <div className="button-container">
                        <button type="submit" className="button">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp;