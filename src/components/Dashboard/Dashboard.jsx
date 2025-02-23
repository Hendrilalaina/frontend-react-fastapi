import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css"

export class Dashboard extends Component {
  state = {};
  
  render() {
    return (
      <>
        <header>
          <div className="logo side">
            <span>
              <p> M&M </p>
            </span>
          </div>
          <nav className="nav">
            <ul>
              <li><NavLink to="/" exact="true">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </nav>
          <div className="user side">
            <span>
              <p> User </p>
            </span>
          </div>
        </header>
      </>
    )
  }
}