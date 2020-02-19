import React from "react";
import { Link } from "react-router-dom";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const button = {
      color:"white",
      backgroundColor:"red"
    }
    return (
      <div>
        
        <button style={button}>show  </button>
        <Link to="/Single" className="btn btn-primary">Sign up</Link>
        <h3>bbbbbbbbbbb</h3>
        
        <div>{this.props.user.gender}</div>
      </div>
    );
  }
}

export default Button;
