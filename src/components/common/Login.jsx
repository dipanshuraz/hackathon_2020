import React, { Component } from "react";
import { changeAuth } from "../../redux/action";
import { connect } from "react-redux";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyAbODIZPoZZT__dHt3vZ5PCS8vUMeLtbHk",
  authDomain: "hackathon-268909.firebaseapp.com"
});


export class Login extends Component {
  state = { isSignedIn: false };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => {
        this.props.changeAuth(true)
      }
    }
  };



  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  }

  render() {
    return (
      <div>
        <h1 className="pt-5 text-center">Sign In Here</h1>
        {this.state.isSignedIn ? <button className="py-2 px-3 bg-dark text-white" onClick={() => firebase.auth().signOut()}
        >Logout</button> : <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.isAuth
});

const mapDispatchToProps = dispatch => ({
  changeAuth: (payload) => dispatch(changeAuth(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
