import { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  const toggleMenu = () => {
    const menuBtn = document.querySelector('#menu');
    const navbar = document.querySelector('.header .navbar');
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  };

  const toggleTheme = () => {
    const themeBtn = document.querySelector('#theme-btn');
    themeBtn.classList.toggle('fa-sun');
    if (themeBtn.classList.contains('fa-sun')) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
  };

  return (
    <div>
      <header className="header">
        <Link data-aos="zoom-in-left" data-aos-delay="150" to="/" className="logo">
          <i className="fas fa-user"></i> Destiny
        </Link>

        <nav className="navbar">
          <Link data-aos="zoom-in-left" data-aos-delay="300" to="/">
            home
          </Link>
          <Link data-aos="zoom-in-left" data-aos-delay="450" to="/About">
            about
          </Link>
          <Link data-aos="zoom-in-left" data-aos-delay="600" to="/Service">
            service
          </Link>
          <Link data-aos="zoom-in-left" data-aos-delay="750" to="/Plan">
            Destination
          </Link>
          <Link data-aos="zoom-in-left" data-aos-delay="900" to="/Gallery">
            gallery
          </Link>
          <Link data-aos="zoom-in-left" data-aos-delay="1050" to="/Review">
            review
          </Link>
          <Link data-aos="zoom-in-left" data-aos-delay="1200" to="/Contact">
            contact
          </Link>
          
          <Link data-aos="zoom-in-left" data-aos-delay="1250" to="/Login">
            login
          </Link>
        </nav>

        <div className="icons">
          <div
            data-aos="zoom-in-left"
            data-aos-delay="1350"
            className="fas fa-moon"
            id="theme-btn"
            onClick={toggleTheme}
          ></div>
          <div
            data-aos="zoom-in-left"
            data-aos-delay="1500"
            className="fas fa-bars"
            id="menu"
            onClick={toggleMenu}
          ></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
