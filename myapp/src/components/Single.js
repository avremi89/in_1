import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Single = props => {
  return (
   
      
        <div className="card col-sm-3 new1" >
          <div key={props.Key}>
            <h2>{props.Title}</h2>
            ___________________
            <h3>{props.gender}</h3>
            
          </div>
        </div>
   
  );
};

export default Single;
