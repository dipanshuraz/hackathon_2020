import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./AddItem.module.css";

class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      mobile: "",
      description: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addItemSubmit = e => {
    e.preventDefault();
    if (
      this.state.name != "" &&
      this.state.email != "" &&
      this.state.password != "" &&
      this.state.username != "" &&
      this.state.mobile != "" &&
      this.state.description != ""
    ) {
      alert("Item added successfully");
      //   this.props.addItemForm(this.state);
    } else {
      alert("Fill input properly");
    }
  };
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center mt-5 py-5 "
        style={{ height: "70vh" }}
      >
        <div className={styles.addItem}>
          <div className="px-5">
            <form className="p-4 text-center">
              <i class="fas fa-utensils text-white mr-2 bg-danger p-2 rounded-circle"></i>
              <br />
              <label className="h2 font-weight-normal mt-1 text-primary">
                Add Item
              </label>
              <div className="py-3">
                <input
                  className={styles.addItemInput}
                  type="name"
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.name}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="py-3">
                <input
                  className={styles.addItemInput}
                  type="email"
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.email}
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div className="py-3">
                <input
                  className={styles.addItemInput}
                  type="number"
                  onChange={this.handleChange}
                  name="mobile"
                  value={this.state.mobile}
                  placeholder="Enter Your Mobile"
                  required
                />
              </div>
              <div className="py-3">
                <input
                  className={styles.addItemInput}
                  type="text"
                  onChange={this.handleChange}
                  name="description"
                  value={this.state.description}
                  placeholder="Enter Your Description"
                  required
                />
              </div>
              <button className={styles.myBtn} onClick={this.addItemSubmit}>
                Add Item
              </button>
              <br />
              <div className="text-left">
                <Link to="/home" className="ml-2 mt-3 text-left d-inline-block">
                  Back Home
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
