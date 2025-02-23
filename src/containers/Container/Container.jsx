import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from '../../components/Home/Home';
import { About } from '../../components/About/About'
import { Dashboard } from "../../components/Dashboard/Dashboard";

export default class Container extends Component {
  render() {
    return (
      <div>
        <Dashboard />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </div>
    )
  }
}