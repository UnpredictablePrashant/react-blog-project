import React from "react";
import Logo from '../../assets/images/logo.png'
import './header.css'
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              <img className="logo" src={Logo}/>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0 ms-auto my-nav">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/blogs">
                    Blogs
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contactus">
                    Contact Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/aboutus">
                    About Us
                  </Link>
                </li>
                
              </ul>
              <form class="d-flex">
                  
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;