import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { auth } from "../Config/Config";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/Login");
    });
  };

  return (
    <div className="navbar">
      <div className="leftside">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>
      <div className="rightside">
        {!user && (
          <>
            <div>
              <Link className="navlink" to="/Signup">
                SIGN UP
              </Link>
            </div>
            <div>
              <Link className="navlink" to="/login">
                LOGIN
              </Link>
            </div>
          </>
        )}

        {user && (
          <>
            <div>
              <Link className="navlink" to="/">
                {user}
              </Link>
            </div>
            <div className="btn btn-danger btn-md" onClick={handleLogout}>
              LOGOUT
            </div>
          </>
        )}
      </div>
    </div>
  );
};
