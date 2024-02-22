import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  const loginHandler = () => {
    btnName === 'Login' ? setBtnName('Log Out'): setBtnName('Login');
  }
    return (
      <div className="header">
        <div>
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
            <Link to='/contact'>Contact Us</Link>
            </li>
            <li>Cart</li>
            <button onClick={loginHandler} className="login">{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;