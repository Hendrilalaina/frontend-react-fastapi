import { Component } from "react";
import Product from "../Product/Product";
import axios from 'axios'
import './Home.css'

export default class Home extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get("http://localhost:8000/products")
          .then(response => {
            this.setState({products: response.data})
            console.log(this.state.products)
          })
  }

  // componentDidUpdate() {
  //   axios.get("http://localhost:8000/products")
  //         .then(response => {
  //           this.setState({products: response.data})
  //           console.log(this.state.products)
  //         })
  // }

  render() {
    const products = this.state.products.map(post => {
      return <Product 
              key={post.id}
              id={post.id}
              title={post.name}
              description={post.description}
              price={post.price}
              />
    })
    return (
      <div className="home">
        <section className="products">
          {products}
        </section>
      </div>
    )
  }
}