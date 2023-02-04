import { useState } from "react"
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmitLogin = () => {
        console.log(">>>Login", email, password)
    }
    return (
        < div>
            <div className="header">Don't have an account yet?</div>
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
            </div>
        </div>
    )
}

export default Login