import React from "react"
import { useState }from "react"

export default function Login({ getUser }) {
    const [signUp, setSignUp] = useState(false)

    const [loginDetails, setLoginDetails] = useState({ email: "", password: "" })
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [signUpDetails, setSignUpDetails] = useState({ callsign:"", email: "",confirm_password:"", password: "", birthday: ""})

    function checkPasswordMatch(){

    }
    return (
        <div className="login">
            <div id="sign-up-logo" className="logo">
                <img alt="" src="/pictures/logo.png" />
                <h3>AIMKEYS</h3>
                <h2>GAMEPLACE</h2>
            </div>
            {signUp ? null : <div>
                <form>
                    <label>Email/username</label>
                    <input id="email" name="email" placeholder="Enter email or call sign" type={'text'} value={loginDetails.email} />
                    <label htmlFor="password">Password</label>
                    <input name="password" type={"password"} id="password"  />
                    <button>Log in</button>
                </form>
            </div>}

            {signUp ? <div>
                <form >
                    <input  value={signUpDetails.callsign} name="callsign" type={"text"} placeholder="Call sign" />
                    <input value={signUpDetails.email} name="email" type={'text'} placeholder="Email" /> 
                    <input  value={signUpDetails.password} name="password" type={'password'} placeholder='Enter password' />
                    <input onBlur={checkPasswordMatch} value={signUpDetails.last_name} name="confirm_password" type="text" placeholder="Confirm password" />
                    <label>Birthday</label>
                    <input  type={'date'} value={signUpDetails.birthday} name='birthday' />
                    <button>Sign Up</button>
                </form>
            </div> : null}
            {!signUp && !user ? <p className="error">Email or call sign not found!</p> : null}
            {signUp && error !== "" ? <p className="error">{error}</p> : null}
            <p style={{ margin: "-2px", textAlign: "left" }}>{signUp ? "Already has an account?" : "Don't have an account yet?"}<em style={{ cursor: "pointer", textDecoration: "underline" }} onClick={() => setSignUp(sign => !sign)}>{signUp ? "Log in" : "sign up"}</em></p>
        </div>
    )
}