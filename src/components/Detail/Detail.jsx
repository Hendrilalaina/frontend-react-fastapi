import { Component } from "react";
import withRouter from "../../withRouter";
import axios from "axios";
import "./Detail.css"
import { redirect } from "react-router-dom";

class Detail extends Component {
  state = {
      product: {
        name: null,
        description: null,
        price: null,
        id: null
      }
    }
  
  componentDidMount() {
    this.loadData()
  }

  loadData() {
    axios.get("http://localhost:8000/product/" + this.props.params.id)
            .then(response => {
              this.setState({product: response.data})
              console.log(this.state.product)
            })
  }

  updateData(event) {
    event.preventDefault();
  }

  onChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({product: {...this.state.product, [name]: value}});
  }

  onSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:8000/product/' + this.state.product.id, this.state.product)
          .then(response => {
            // console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    this.loadData()
  }

  render() {
    return (
      <div className="details">
        <form onSubmit={this.onSubmit}>
          <label> Title </label>
          <input type="text" name="name" defaultValue={this.state.product.name} onChange={this.onChangeHandler} />

          <label> Description </label>
          <input type="text" name="description" defaultValue={this.state.product.description} onChange={this.onChangeHandler} />

          <label> Price </label>
          <input type="number" name="price" defaultValue={this.state.product.price} onChange={this.onChangeHandler} />

          <div className="button">
            <button onClick={this.onSubmit}>Modify</button>
            <button>Delete</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(Detail)