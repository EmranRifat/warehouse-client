import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    console.log(" end");
  };
  <ToastContainer />;

  return (
    <div>
      <nav
        style={{ padding: "5px" }}
        expand="lg"
        bg="dark"
        sticky="top"
        variant="dark"
        className="navbar navbar-expand-lg navbar-light bg-light "
      >
        <div className="container fs-5">
          <Link
            style={{ color: "orange" }}
            className="navbar-brand fs-3 fw-bold header1"
            to="/"
          >
            {" "}
            <span style={{ color: "green" }}>WARE</span> -HOUSE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                                <Link className="nav-link" to="#features">Features</Link>
                            </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="inventory">
                  Inventory
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="blogs">
                  Blogs
                </Link>
              </li>

              {user && (
                <>
                  <Link className="nav-link" to="addCard">
                    Add
                  </Link>
                  <Link className="nav-link" to="manageService">
                    Manage
                  </Link>
                </>
              )}
            </ul>

            {user ? (
              <button
                className="btn btn-link text-black text-decoration-none"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            ) : (
              <Link className="nav-link" to="login">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
