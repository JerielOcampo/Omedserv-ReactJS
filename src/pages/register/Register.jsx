import './register.css';

const Register = () => {
    return (
        <div className="auth-form-container">
            <h2>OMedServ</h2>
            <p>Online Medical Service</p>
            <h3>Register</h3>
        <form className="register-form">
            <label htmlFor="name">Full name</label>
            <input name="name" id="name" placeholder="full Name" />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="********" id="password" name="password" />
            <button className="submit-text" type="submit">Register</button>
        </form>
    </div>
    )
}

export default Register;