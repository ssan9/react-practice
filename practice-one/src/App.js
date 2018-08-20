import React, { Component } from 'react';
import './App.css';
import {Link, Route, withRouter} from "react-router-dom";

import {links, heading} from "./nav-links";

export default function NavigationBar(props) {
  console.log(props);
    const llinks = links.map((link, index) => (
        <li key={index}>
          <Link to={link.href}>
            {link.title}
          </Link>  
        </li>
      ))
    return (
      <div className="App">
        <h1>Thinkful</h1>
        <h2>{llinks}</h2>
      </div>
    );
  
}

