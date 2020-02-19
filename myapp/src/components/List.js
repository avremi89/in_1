import React, { Component } from "react";
import { Link } from "react-router-dom";
import Single from "./Single";
import Button from "./Button";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: []
    };
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/ztbpm")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);

          this.setState({
            isLoaded: true,
            users: result.d.results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div className="lc">
          {users.map((user, key) => (
            <Single className="single" key={user.id} Title={user.Title} gender={user.gender}>
             
              <Button single={user} />
            </Single>
          ))}
        </div>
      );
    }
  }
}

export default List;
