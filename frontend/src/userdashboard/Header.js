import { useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Header(props) {
    const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/');
    props.setchecklogin(false);
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
        <Link data-aos="zoom-in-left" data-aos-delay="150" to="/Dashboard" className="logo">
          <i className="fas fa-user"></i> Destiny
        </Link>

        <nav className="navbar">
          <Link data-aos="zoom-in-left" data-aos-delay="300" to="/Dashboard/main">
            Dashboard
          </Link>
          <Link data-aos="zoom-in-left" data-aos-delay="450" to="/Dashboard/employee">
            Employee
          </Link>
          <Link data-aos="zoom-in-left" data-aos-delay="600" to="/Dashboard/contact">
            Contact
          </Link>
        </nav>

        {/* {<div className="icons">
          <div
            data-aos="zoom-in-left"
            data-aos-delay="1350"
            className="fas fa-moon"
            id="theme-btn"
            onClick={toggleTheme}
          ></div>
          <Link data-aos="zoom-in-left" data-aos-delay="1250" to="/" onClick={handleLogout}>
            Logout
        </Link>
        </div>} */}
        <div className="navbar">
        <Link data-aos="zoom-in-left" data-aos-delay="1250" to="/" onClick={handleLogout}>
            Logout
        </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
