import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">OmedServ</span>
        <div className="navItems">
          <Link to='./register/Register' className="btn-primary">Sign up</Link>
          <Link to='./login/Login' className="btn-primary">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar