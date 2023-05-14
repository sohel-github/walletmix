import React, {useState} from 'react'
import Signup from '../signup/Signup'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'
import './navbar.css'


const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About Walletmix</a>
    </p>
    <p>
      <a href="#services">Services</a>
    </p>
    <p>
      <a href="#security">Security</a>
    </p>
    <p>
      <a href="#features">Case Study</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <div className="wmx__navbar">
      {signup && (<Signup signup={signup} setSignup={setSignup} />)}
      <div className="wmx__navbar-links">
        <div className="wmx__navbar-links_logo">
          <img src={logo} alt="Walletmix" />
        </div>
        <div className="wmx__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="wmx__navbar-sign">
        <p>
          <a href="#">Sign in</a>
        </p>
        <button type="button" onClick={()=> setSignup(true)}>Sign up</button>
      </div>
      <div className="wmx__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            className="rotate-center"
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="rotate-center"
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="wmx__navbar-menu_container scale-up-center">
            <div className="wmx__navbar-menu_container-links">
              <Menu />
              <div className="wmx__navbar-menu_container-links-sign">
                <p>
                  <a href="#">Sign in</a>
                </p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar