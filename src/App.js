import React, { Component } from 'react'
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import Routes from "./routes/Routes";
import Footer from "./components/common/Footer";
import { Demo } from './components/maps/Demo'
// import { firestore } from './firebase';




export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  // componentDidMount = async () => {
  //   const posts = await firestore.collection('posts').get();
  //   console.log(posts);
  // }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Demo />
          <Routes />
          <Footer />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
