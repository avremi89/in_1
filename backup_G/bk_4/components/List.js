import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    fetch("https://hot7.inmanage.com/react/test/test.php")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);

          this.setState({
            isLoaded: true,
            users: result.movies
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
            <div className="card col-sm-3 new1">
             
              <div>

            <h2>{user.name}</h2>

            ____________________
            <h3>{user.year}</h3>
            <h3>{user.category}</h3>

              </div>
             
            </div>
          ))}
        </div>
      );
    }
  }
}

export default List;


// sfsdfds