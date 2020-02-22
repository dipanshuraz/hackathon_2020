import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";

class MobileNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false
    };
  }

  clickMe = () => {
    this.setState(previousState => {
      return {
        flag: !previousState.flag
      };
    });
  };

  render() {
    return (
      <>
        <div className="menu-wrap">
          <input
            type="checkbox"
            name=""
            className="toggler"
            onClick={this.clickMe}
            checked={this.state.flag}
            id=""
          />
          <div className="hamburger" style={{ background: "#fff" }}>
            <div className=""></div>
          </div>
          <div className="menu">
            <div className="">
              <div className="">
                <ul>
                  <li>
                    <Link onClick={this.clickMe} to="/">
                      Landing Page
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.clickMe} to="/home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.clickMe} to="/addItem">
                      Add Item
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.clickMe} to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.clickMe} to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.clickMe} to="/orders">
                      Your Orders
                    </Link>
                  </li>
                </ul>

                <td className="p-2">
                  <Link
                    onClick={this.clickMe}
                    style={{ textDecoration: "none" }}
                    to="/login"
                  >
                    <i className="fas fa-sign-in-alt mx-2"></i>
                    Log In
                  </Link>
                </td>
                <td className="p-2">
                  <Link
                    onClick={this.clickMe}
                    style={{ textDecoration: "none" }}
                    to="/signup"
                  >
                    <i className="fas fa-user-plus mx-2"></i>
                    Create account
                  </Link>
                </td>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default MobileNav;
