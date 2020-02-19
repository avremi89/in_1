import React, { Component } from "react";
import { Link } from "react-router-dom";

class Single extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
       users:   {}
    };
  }

  componentDidMount() {
    fetch("https://hot7.inmanage.com/react/test/test.php?id=1001")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);

          this.setState({
            isLoaded: true,
            users: result
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

      console.log(users);
      return (
        <div className="s_container">
          

            <div className="card col-sm-3 new1">

              <h2>{users.name}</h2>

            </div>

        

          
        </div>
        
      );
    }
  }
}

export default Single;


// sfsdfds