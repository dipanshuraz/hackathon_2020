import React, { Component } from "react";
import { connect } from "react-redux";

class Singup extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // console.log(this.props, "<=====");
    return <div>Sign up</div>;
  }
}

const mapStateToProps = state => ({
  isAuth: state.isAuth,
  state: state,
  name: state.name
});

export default connect(mapStateToProps, {})(Singup);
