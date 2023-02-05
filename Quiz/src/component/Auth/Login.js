import { useState } from "react"
import "./Auth.css"
import { postLogin } from "../services/apiService"
import { toast } from 'react-toastify';
import { NavLink, Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmitLogin = async () => {
        //validate
        var isValidateEmail = email.toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        var isValidatePassword = password.match(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        );
        if (!isValidateEmail) {
            toast.error("Invalid Email")
            isValidateEmail = false
        } else {
            isValidateEmail = true
        }

        if (!isValidatePassword) {
            toast.error("Invalid Password")
            isValidatePassword = false
        } else {
            isValidatePassword = true
        }


        //call apis
        if (isValidateEmail == true && isValidatePassword == true) {

            const dataLogin = await postLogin(email, password)
            console.log(dataLogin)
            if (dataLogin.EC == -1) {
                toast.error(dataLogin.EM)
            }

            if (dataLogin.EC == -2) {
                toast.error(dataLogin.EM)

            }
            if (dataLogin.EC == 0) {
                toast.success(dataLogin.EM)
                navigate('/')
            }
        }
    }
    const handleSignup = () => {
        navigate("/signup")
    }


    return (
        < div>
            <div className="header">
                <div className="header-content">
                    <span >Don't have an account yet?</span>
                    <button
                        className="btnSignup"
                        onClick={() => handleSignup()}
                    >
                        Signup
                    </button>
                </div>
            </div>
            <div className="title col-4 mx-auto">
                <h3> Quiz Test</h3>
            </div>
            <div className="wellcome col-4 mx-auto">Hello, who’s this?</div>
            <div className="content form-group col-4  mx-auto">
                <label>Email</label>
                <input
                    type={"email"}
                    className="form-control"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type={"password"}
                    className="form-control"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div className="forgotPass">
                    <span >Forgot password?</span>
                </div>
                <button
                    className="btn btn-dark col-12"
                    onClick={() => handleSubmitLogin()}
                >Login to Quiz Test</button>
                <div className="goToHomePage">
                    <span onClick={() => { navigate("/") }}> &#60;&#60;&#60; Go to home page</span>
                </div>
            </div>
        </div>
    )
}

export default Login