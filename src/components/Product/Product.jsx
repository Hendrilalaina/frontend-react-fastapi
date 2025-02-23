import { Component } from "react";
import './Product.css'
import { Link } from "react-router-dom";

export default class Product extends Component {
  
  render() {
    return(
      <article className="post">
        <h3>{this.props.title}</h3>
        <div className="info">
          <p>{this.props.description}</p>
          <p>{this.props.price}</p>
        </div>
        <Link to={"/detail/" + this.props.id}><button className="detail">Show details</button></Link>
      </article>
    )
  }
}
