import React from "react";
import { Component } from "react";
import AppCss from "./App.module.css";
import Header from "./component/Header/Header";
import Layout from "./container/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className={AppCss.Body}>
        <Header />
        <Layout />
      </div>
    );
  }
}

export default App;
