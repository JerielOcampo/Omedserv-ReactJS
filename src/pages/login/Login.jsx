import './login.css';

const Login = () => {
    return (
        <div className="auth-form-container">
            <h2>OMedServ</h2>
            <p>Online Medical Service</p>
            <h3>Login</h3>
            <form className="login-form">
                <label>Email</label>
                <input type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password </label>
                <input type="password" placeholder="********" id="password" name="password" />
                <button className="submit-text" type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login;