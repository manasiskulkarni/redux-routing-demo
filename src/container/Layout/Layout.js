import React, { Component } from "react";
import SignUp from "../../component/SignUp/SignUp";
import NextPage from "../../component/NextPage/NextPage";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import axios from "../../axios";

class Layout extends Component {
    componentDidMount(){
        const list = {
            username:"asdf21",
            city:"asda",
            state:"asdsd",
            zipcode:"23423",
            password:"2342",
        };
      console.log("post data", list);
    //   axios
    //     .post("/list.json", list)
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    }
    submit = () => {
        const {username,city,state,zipcode,password}  = this.props.state;
        const list = {
            username,
            city,
            state,
            zipcode,
            password,
        };
      console.log("post data", list);
      axios
        .post("/list.json", list)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };

  

  render() {
    // const list = this.props.state
    // axios.post("/list.json", list).then((response) => console.log(response));

    const signup = (
      <SignUp
        username={this.props.state.username}
        city={this.props.state.city}
        state={this.props.state.state}
        zipcode={this.props.state.zipcode}
        password={this.props.state.password}
        changeUsername={this.props.changeUsername}
        changeCity={this.props.changeCity}
        changeState={this.props.changeState}
        changedZipcode={this.props.changedZipcode}
        changePassword={this.props.changePassword}
        submit={this.submit}
      />
    );

    return (
      <div>
        <Switch>
          <Route exact path="/">
            {signup}
          </Route>
          <Route path="/next">
            <NextPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUsername: (value) => dispatch({ type: "USERNAME", payload: value }),
    changeCity: (value) => dispatch({ type: "CITY", payload: value }),
    changeState: (value) => dispatch({ type: "STATE", payload: value }),
    changedZipcode: (value) => dispatch({ type: "ZIPCODE", payload: value }),
    changePassword: (value) => dispatch({ type: "PASSWORD", payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
